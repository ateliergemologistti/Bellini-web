/**
 * BELLINI Fine Jewelry — Receptor de Webhooks de Openpay Perú
 * Endpoint HTTPS (Puerto 443 con certificado SSL válido):
 * https://bellinifinejewelry.com/api/openpay-webhook
 *
 * Recibe eventos POST desde Openpay:
 * - verification (envía verification_code al registrar el Webhook en el Dashboard de Openpay)
 * - charge.succeeded (pago completado exitosamente)
 * - charge.failed / charge.cancelled / charge.created
 */

let lastVerificationCode = null;
let lastWebhookEvent = null;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Permite verificar que el endpoint está activo y consultar el último código de verificación
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      service: 'BELLINI Fine Jewelry - Openpay Webhook Endpoint',
      last_verification_code: lastVerificationCode,
      last_event: lastWebhookEvent
    });
  }

  if (req.method === 'POST') {
    try {
      const event = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const eventType = event.type || 'unknown';

      // Si es el evento de verificación de Openpay al dar de alta el Webhook
      if (eventType === 'verification' || event.verification_code) {
        lastVerificationCode = event.verification_code || null;
        console.log('[OPENPAY WEBHOOK VERIFICATION CODE]:', lastVerificationCode, JSON.stringify(event));
      } else {
        console.log(`[OPENPAY WEBHOOK EVENT: ${eventType}]`, JSON.stringify(event));
      }

      lastWebhookEvent = {
        type: eventType,
        event_date: event.event_date || new Date().toISOString(),
        verification_code: event.verification_code || null,
        transaction_id: event.transaction ? event.transaction.id : null,
        order_id: event.transaction ? event.transaction.order_id : null,
        status: event.transaction ? event.transaction.status : null
      };

      // Openpay requiere respuesta HTTP 200 OK para confirmar recepción del Webhook
      return res.status(200).json({
        status: 'ok',
        received: true,
        type: eventType,
        verification_code: event.verification_code || undefined
      });
    } catch (err) {
      console.error('[OPENPAY WEBHOOK ERROR]:', err);
      // Aun en error de parseo devolvemos 200 para no bloquear reintentos innecesarios
      return res.status(200).json({
        status: 'ok',
        received: true
      });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Método no permitido.' });
};
