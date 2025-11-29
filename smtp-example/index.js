require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

async function sendEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'Test Email from Keplers SMTP',
      text: 'This is a test email sent via Keplers.email SMTP service.',
      html: '<p>This is a <strong>test email</strong> sent via Keplers.email SMTP service.</p>'
    });

    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
