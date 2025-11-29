require('dotenv').config();
const axios = require('axios');

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json'
  }
});

async function sendInstantEmail() {
  try {
    const response = await apiClient.post('/send-email/instant', {
            to: [process.env.TO_EMAIL],
            subject: `Welcome ${process.env.USER_NAME}!`,
            body: `<h1>Welcome ${process.env.USER_NAME}!</h1><p>Thank you for joining our platform.</p>`,
            is_html: true
        });

    console.log('Email sent successfully!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error sending email:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

async function main() {
  console.log('=== Sending Simple Email ===');
  await sendInstantEmail();
}

main();
