/**
 * BELLINI Fine Jewelry — Receptor Privado de Webhooks de Openpay Perú
 * Endpoint HTTPS (Puerto 443 con certificado SSL válido):
 * https://bellinifinejewelry.com/api/openpay-webhook
 *
 * - Las notificaciones POST de Openpay se registran de forma privada en los logs internos del servidor.
 * - Las consultas públicas GET no exponen ningún movimiento ni dato de transacciones.
 */

const fs = require('fs');
const path = require('path');

const OPENPAY_MERCHANT_ID = process.env.OPENPAY_MERCHANT_ID || 'matkbk74vv77brm4tkao';
const OPENPAY_SK = process.env.OPENPAY_SK || 'sk_18bd40ca5a4d4915af05a9596e4ff54e';
const OPENPAY_ENV = (process.env.OPENPAY_ENV || 'production').toLowerCase();
const OPENPAY_BASE_URL = OPENPAY_ENV === 'sandbox'
  ? `https://sandbox-api.openpay.pe/v1/${OPENPAY_MERCHANT_ID}`
  : `https://api.openpay.pe/v1/${OPENPAY_MERCHANT_ID}`;

const TMP_CODE_FILE = path.join('/tmp', 'openpay_verification_code.json');
let lastVerificationCode = null;

function saveVerificationCode(code) {
  if (!code) return;
  lastVerificationCode = code;
  try {
    fs.writeFileSync(TMP_CODE_FILE, JSON.stringify({
      code,
      saved_at: new Date().toISOString()
    }), 'utf8');
  } catch (e) {}
}

function loadVerificationCode() {
  if (lastVerificationCode) return lastVerificationCode;
  try {
    if (fs.existsSync(TMP_CODE_FILE)) {
      const raw = JSON.parse(fs.readFileSync(TMP_CODE_FILE, 'utf8'));
      if (raw && raw.code) {
        lastVerificationCode = raw.code;
        return lastVerificationCode;
      }
    }
  } catch (e) {}
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET público: Solo confirma que el endpoint está en línea sin mostrar ningún movimiento
  if (req.method === 'GET') {
    const adminKey = req.query && req.query.admin_key;
    const expectedKey = process.env.WEBHOOK_ADMIN_KEY || 'bellini_openpay_admin';

    // Solo si el administrador consulta con ?admin_key=bellini_openpay_admin muestra el código y estado
    if (adminKey && adminKey === expectedKey) {
      const basicAuth = Buffer.from(`${OPENPAY_SK}:`).toString('base64');
      let webhooksList = [];
      try {
        const wbResp = await fetch(`${OPENPAY_BASE_URL}/webhooks`, {
          headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Accept': 'application/json'
          }
        });
        if (wbResp.ok) {
          webhooksList = await wbResp.json();
        }
      } catch (e) {}

      // Si hay un webhook sin verificar y aún no tenemos el código en esta instancia (o se pide ?recreate=1),
      // lo re-disparamos en caliente para capturar el código inmediatamente
      const unverified = Array.isArray(webhooksList)
        ? webhooksList.find(w => w.url === 'https://bellinifinejewelry.com/api/openpay-webhook' && w.status === 'unverified')
        : null;

      if ((req.query.recreate === '1') || (unverified && !loadVerificationCode())) {
        try {
          if (unverified && unverified.id) {
            await fetch(`${OPENPAY_BASE_URL}/webhooks/${unverified.id}`, {
              method: 'DELETE',
              headers: { 'Authorization': `Basic ${basicAuth}` }
            });
          }
          const createResp = await fetch(`${OPENPAY_BASE_URL}/webhooks`, {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${basicAuth}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              url: 'https://bellinifinejewelry.com/api/openpay-webhook',
              event_types: [
                'charge.refunded',
                'charge.failed',
                'charge.cancelled',
                'charge.created',
                'charge.succeeded',
                'subscription.charge.failed',
                'transaction.expired',
                'payout.created',
                'payout.succeeded',
                'payout.failed',
                'transfer.succeeded',
                'fee.succeeded',
                'spei.received',
                'chargeback.created',
                'chargeback.rejected',
                'chargeback.accepted',
                'order.payment.received',
                'order.activated',
                'order.expired',
                'order.cancelled',
                'order.payment.cancelled'
              ]
            })
          });
          await new Promise(r => setTimeout(r, 1500));
          const wbResp2 = await fetch(`${OPENPAY_BASE_URL}/webhooks`, {
            headers: {
              'Authorization': `Basic ${basicAuth}`,
              'Accept': 'application/json'
            }
          });
          if (wbResp2.ok) {
            webhooksList = await wbResp2.json();
          }
        } catch (e) {}
      }

      return res.status(200).json({
        status: 'ok',
        environment: OPENPAY_ENV,
        merchant_id: OPENPAY_MERCHANT_ID,
        last_verification_code: loadVerificationCode(),
        webhooks: webhooksList
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
        const code = event.verification_code || null;
        saveVerificationCode(code);
        console.log('[OPENPAY WEBHOOK VERIFICATION CODE]:', code);
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
