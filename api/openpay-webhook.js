/**
 * BELLINI Fine Jewelry — Receptor Privado de Webhooks de Openpay Perú
 * Endpoint HTTPS (Puerto 443 con certificado SSL válido):
 * https://bellinifinejewelry.com/api/openpay-webhook
 *
 * - Las notificaciones POST de Openpay se registran de forma privada en los logs internos del servidor.
 * - Las consultas públicas GET no exponen ningún movimiento ni dato de transacciones.
 */

let lastVerificationCode = null;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET público: Solo confirma que el endpoint está en línea sin mostrar ningún movimiento
  if (req.method === 'GET') {
    const adminKey = req.query && req.query.admin_key;
    const expectedKey = process.env.WEBHOOK_ADMIN_KEY || 'bellini_openpay_admin';

    // Solo si el administrador consulta con ?admin_key=bellini_openpay_admin muestra el código de verificación
    if (adminKey && adminKey === expectedKey) {
      return res.status(200).json({
        status: 'ok',
        last_verification_code: lastVerificationCode
      });
    }

    return res.status(200).json({
      status: 'ok',
      service: 'BELLINI Fine Jewelry - Openpay Webhook Receiver'
    });
  }

  if (req.method === 'POST') {
    try {
      const event = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const eventType = event.type || 'unknown';

      // Si es el evento de verificación de Openpay al dar de alta el Webhook
      if (eventType === 'verification' || event.verification_code) {
        lastVerificationCode = event.verification_code || null;
        console.log('[OPENPAY WEBHOOK VERIFICATION CODE]:', lastVerificationCode);
      } else {
        console.log(`[OPENPAY WEBHOOK EVENT: ${eventType}]`, JSON.stringify({
          type: eventType,
          event_date: event.event_date,
          transaction_id: event.transaction ? event.transaction.id : null,
          order_id: event.transaction ? event.transaction.order_id : null,
          status: event.transaction ? event.transaction.status : null
        }));
      }

      // Openpay requiere respuesta HTTP 200 OK para confirmar recepción del Webhook
      return res.status(200).json({
        status: 'ok',
        received: true
      });
    } catch (err) {
      console.error('[OPENPAY WEBHOOK ERROR]:', err);
      return res.status(200).json({
        status: 'ok',
        received: true
      });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Método no permitido.' });
};
