import nodemailer from 'nodemailer';

const transporter =
  process.env.NODE_ENV === 'test'
    ? null
    : nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

export async function sendNotificationEmail({ to, subject, text }) {
  if (!transporter) return;
  await transporter.sendMail({
    from: 'no-reply@smarthospital.local',
    to,
    subject,
    text
  });
}
