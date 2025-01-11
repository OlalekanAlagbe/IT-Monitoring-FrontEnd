import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_1e4bkve';
const EMAIL_TEMPLATE_ID = 'template_cznwdvo';
const EMAIL_PUBLIC_KEY = '6ncHIVPL78-9GFdX9';

interface AlertEmailParams {
  serverName: string;
  metric: string;
  value: number;
}

export async function sendAlertEmail({ serverName, metric, value }: AlertEmailParams) {
  try {
    await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      {
        to_email: 'alagbeolalekan1000@gmail.com',
        server_name: serverName,
        metric,
        value: `${value}%`,
        timestamp: new Date().toLocaleString(),
      },
      EMAIL_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Failed to send alert email:', error);
  }
}