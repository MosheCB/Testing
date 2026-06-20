export async function onRequestPost({ request, env }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Contact Form <contact@moshebrownsteinlicsw.com>",
      to: "moshebrownsteinlcsw@gmail.com",
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`
    })
  });

  if (res.ok) {
    return Response.redirect("/index.html", 302);
  } else {
    const errorText = await res.text();
    return new Response("Resend error: " + errorText, { status: 500 });
  }
}
