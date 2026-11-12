/**
 * BELLINI Fine Jewelry — Openpay Perú (Opción 2: Flujo Tarjeta vía Redirect)
 * Serverless Endpoint para Vercel (/api/openpay-charge)
 *
 * - POST /api/openpay-charge : Crea un cargo con redirección (payment_method.url -> card_capture)
 * - GET  /api/openpay-charge?id={transaction_id} : Consulta el estado real de una transacción en Openpay
 */

const OPENPAY_MERCHANT_ID = process.env.OPENPAY_MERCHANT_ID || 'mfuzppxtix8ad5sbkcbd';
const OPENPAY_SK = process.env.OPENPAY_SK || 'sk_db4d0b4e7f9545a78dc52c82c237d9ce';
const OPENPAY_ENV = (process.env.OPENPAY_ENV || 'sandbox').toLowerCase();

const OPENPAY_BASE_URL = OPENPAY_ENV === 'production'
  ? `https://api.openpay.pe/v1/${OPENPAY_MERCHANT_ID}`
  : `https://sandbox-api.openpay.pe/v1/${OPENPAY_MERCHANT_ID}`;

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const basicAuth = Buffer.from(`${OPENPAY_SK}:`).toString('base64');

  // =========================================================================
  // 1. GET: Consultar estado de un cargo por ID (?id=tr...)
  // =========================================================================
  if (req.method === 'GET') {
    const chargeId = (req.query && (req.query.id || req.query.charge_id)) || '';
    if (!chargeId) {
      return res.status(400).json({
        status: 'error',
        message: 'Falta el parámetro id de la transacción de Openpay.'
      });
    }

    try {
      const response = await fetch(`${OPENPAY_BASE_URL}/charges/${encodeURIComponent(chargeId)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({
          status: 'error',
          message: data.description || 'No se pudo consultar la transacción en Openpay.',
          openpay_error: data
        });
      }

      return res.status(200).json({
        status: 'success',
        environment: OPENPAY_ENV,
        charge: {
          id: data.id,
          status: data.status, // 'completed', 'charge_pending', 'failed', 'cancelled'
          authorization: data.authorization || null,
          order_id: data.order_id || null,
          amount: data.amount,
          currency: data.currency,
          description: data.description,
          error_message: data.error_message || null,
          creation_date: data.creation_date,
          operation_date: data.operation_date,
          card: data.card ? {
            brand: data.card.brand,
            type: data.card.type,
            card_number: data.card.card_number,
            holder_name: data.card.holder_name,
            bank_name: data.card.bank_name
          } : null
        }
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Error de conexión al consultar Openpay: ' + (err.message || String(err))
      });
    }
  }

  // =========================================================================
  // 2. POST: Crear cargo de tarjeta vía Redirect (Opción 2)
  // =========================================================================
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

      const rawAmount = Number(body.amount);
      if (!rawAmount || rawAmount <= 0) {
        return res.status(400).json({
          status: 'error',
          message: 'El monto del pedido debe ser mayor a 0.'
        });
      }

      const amount = Number(rawAmount.toFixed(2));
      const baseOrderId = String(body.order_id || `PED-${Date.now()}`).trim();
      // Openpay exige que order_id sea único por cada intento de cargo
      const uniqueSuffix = Date.now().toString().slice(-5);
      const openpayOrderId = `${baseOrderId}-${uniqueSuffix}`;

      const customerInput = body.customer || {};
      const cleanPhone = String(customerInput.phone_number || '922427713')
        .replace(/[^0-9]/g, '')
        .replace(/^51/, '') || '922427713';

      const customer = {
        name: String(customerInput.name || 'Cliente').trim() || 'Cliente',
        last_name: String(customerInput.last_name || 'BELLINI').trim() || 'BELLINI',
        email: String(customerInput.email || 'clientes@bellinifinejewelry.com').trim(),
        phone_number: cleanPhone
      };

      const description = String(
        body.description || `Pedido BELLINI Fine Jewelry - ${baseOrderId}`
      ).substring(0, 240);

      const redirectUrl = String(
        body.redirect_url || 'https://bellinifinejewelry.com/checkout.html'
      ).trim();

      const openpayPayload = {
        method: 'card',
        amount: amount,
        currency: body.currency || 'PEN',
        description: description,
        order_id: openpayOrderId,
        confirm: 'false',
        send_email: 'false',
        redirect_url: redirectUrl,
        customer: customer
      };

      const response = await fetch(`${OPENPAY_BASE_URL}/charges`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(openpayPayload)
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({
          status: 'error',
          message: data.description || 'Error al generar el enlace de pago en Openpay.',
          error_code: data.error_code || null,
          openpay_error: data
        });
      }

      const redirectTarget = data.payment_method && data.payment_method.url
        ? data.payment_method.url
        : null;

      if (!redirectTarget) {
        return res.status(502).json({
          status: 'error',
          message: 'Openpay no devolvió una URL de redirección (payment_method.url).',
          openpay_response: data
        });
      }

      return res.status(200).json({
        status: 'success',
        environment: OPENPAY_ENV,
        charge_id: data.id,
        openpay_order_id: data.order_id,
        base_order_id: baseOrderId,
        redirect_url: redirectTarget,
        charge: data
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Error interno al procesar el pago con Openpay: ' + (err.message || String(err))
      });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Método no permitido.' });
};
