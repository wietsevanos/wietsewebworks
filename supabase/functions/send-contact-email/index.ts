import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';
const TO_ADDRESS = 'wietsevanos@gmail.com';
const FROM_ADDRESS = 'Wietse Webworks <onboarding@resend.dev>';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      console.error('Missing LOVABLE_API_KEY or RESEND_API_KEY');
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = (await req.json().catch(() => ({}))) as ContactPayload;
    const name = clean(body.name, 100);
    const email = clean(body.email, 255);
    const company = clean(body.company, 150);
    const subject = clean(body.subject, 200);
    const message = clean(body.message, 5000);

    const errors: string[] = [];
    if (!name) errors.push('Naam is verplicht');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Geldig e-mailadres is verplicht');
    if (!subject) errors.push('Onderwerp is verplicht');
    if (!message) errors.push('Bericht is verplicht');
    for (const line of [name, email, company, subject]) {
      if (/[\r\n]/.test(line)) { errors.push('Ongeldige invoer'); break; }
    }
    if (errors.length) {
      return new Response(JSON.stringify({ error: errors.join(', ') }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const companyRow = company
      ? `<tr><td style="padding:6px 12px;color:#64748b;">Bedrijf</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">${escapeHtml(company)}</td></tr>`
      : '';

    const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;">
        <div style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
          <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#f97316;font-weight:600;">Nieuw bericht</div>
          <div style="font-size:18px;font-weight:600;margin-top:4px;">${escapeHtml(subject)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 12px;color:#64748b;width:110px;">Naam</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 12px;color:#64748b;">E-mail</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">${escapeHtml(email)}</td></tr>
          ${companyRow}
        </table>
        <div style="padding:16px 24px 24px;border-top:1px solid #e2e8f0;">
          <div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;margin-bottom:8px;">Bericht</div>
          <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;color:#0f172a;">${escapeHtml(message)}</div>
        </div>
      </div>
    </div>`;

    const text = `Nieuw bericht via de website\n${'-'.repeat(40)}\nNaam:      ${name}\nE-mail:    ${email}\n${company ? `Bedrijf:   ${company}\n` : ''}Onderwerp: ${subject}\n${'-'.repeat(40)}\n\n${message}\n`;

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: email,
        subject: `[Contactformulier] ${subject}`,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const details = await resp.text();
      console.error(`Resend gateway failed [${resp.status}]: ${details}`);
      return new Response(
        JSON.stringify({ error: 'Verzenden mislukt', status: resp.status, details }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
