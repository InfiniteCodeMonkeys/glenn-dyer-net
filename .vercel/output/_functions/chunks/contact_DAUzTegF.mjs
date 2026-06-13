import { Resend } from 'resend';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const subject = data.get("subject")?.toString().trim();
  const message = data.get("message")?.toString().trim();
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const resend = new Resend(undefined                              );
  const { error } = await resend.emails.send({
    from: "Contact Form <contact@glenndyer.net>",
    to: undefined                                ,
    replyTo: email,
    subject: `[Contact] ${subject ?? "General Correspondence"} — ${name}`,
    text: `Name: ${name}
Email: ${email}
Subject: ${subject}

${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`
  });
  if (error) {
    return new Response(JSON.stringify({ error: "Failed to send. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
