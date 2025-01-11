import toast from 'react-hot-toast';
import { MetricAlert } from '../metrics/types';

export function showAlertNotification(alert: MetricAlert, serverName: string) {
  const message = `High ${alert.metric} Alert: ${alert.value}% on ${serverName}`;
  toast.error(message, { duration: 5000 });
}