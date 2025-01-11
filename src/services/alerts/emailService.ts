import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './emailConfig';

// Initialize EmailJS with public key
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

interface AlertEmailParams {
  serverName: string;
  metric: string;
  value: number;
}

export async function sendAlertEmail({ serverName, metric, value }: AlertEmailParams) {
  try {
    const templateParams = {
      to_email: EMAIL_CONFIG.RECIPIENT,
      server_name: serverName,
      metric,
      value: `${value}%`,
      timestamp: new Date().toLocaleString(),
    };

    await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    console.log('Alert email sent successfully');
  } catch (error) {
    console.error('Failed to send alert email:', error);
  }
}