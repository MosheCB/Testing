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
      from: "Contact Form <onboarding@resend.dev>",
      to: "moshebrownsteinlcsw@gmail.com",
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`
    })
  });

  return res.ok
    ? Response.redirect("/index.html", 302)
    : new Response("Something went wrong", { status: 500 });
}
