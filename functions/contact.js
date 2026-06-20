import { Resend } from 'resend';

const resend = new Resend('re_TbyLdKhR_A1XgishPy2VDwnQW365wNGKt');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'moshebrownstein@proton.me',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
