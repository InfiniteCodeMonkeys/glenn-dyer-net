import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const subject = data.get('subject')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const turnstileToken = data.get('cf-turnstile-response')?.toString();
  if (!turnstileToken) {
    return new Response(JSON.stringify({ error: 'Please complete the security check.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: import.meta.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  });
  const verifyData = await verifyRes.json() as { success: boolean };
  if (!verifyData.success) {
    return new Response(JSON.stringify({ error: 'Security check failed. Please try again.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Contact Form <contact@glenndyer.net>',
    to: import.meta.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[Contact] ${subject ?? 'General Correspondence'} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Failed to send. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
