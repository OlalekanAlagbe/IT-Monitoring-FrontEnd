import toast from 'react-hot-toast';
import { sendAlertEmail } from './emailService';
import { Server } from '../types/server';

const RESOURCE_THRESHOLD = 85;

export function checkResourceAlerts(server: Server, metrics: { 
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
}) {
  const alerts = [];

  if (metrics.cpuUsage > RESOURCE_THRESHOLD) {
    alerts.push({ metric: 'CPU Usage', value: metrics.cpuUsage });
  }
  if (metrics.memoryUsage > RESOURCE_THRESHOLD) {
    alerts.push({ metric: 'Memory Usage', value: metrics.memoryUsage });
  }
  if (metrics.diskUsage > RESOURCE_THRESHOLD) {
    alerts.push({ metric: 'Disk Usage', value: metrics.diskUsage });
  }

  alerts.forEach(alert => {
    const message = `High ${alert.metric} Alert: ${alert.value}% on ${server.name}`;
    toast.error(message, { duration: 5000 });
    sendAlertEmail({
      serverName: server.name,
      metric: alert.metric,
      value: alert.value,
    });
  });
}