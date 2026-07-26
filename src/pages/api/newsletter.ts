import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email')?.toString().trim();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const groupId = import.meta.env.MAILERLITE_GROUP_ID;

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      ...(groupId ? { groups: [groupId] } : {}),
    }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null) as { message?: string } | null;
    return new Response(JSON.stringify({ error: errorBody?.message ?? 'Failed to subscribe. Please try again.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
