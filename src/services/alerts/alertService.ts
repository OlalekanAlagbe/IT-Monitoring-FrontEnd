import { Server } from '../../types/server';
import { MetricThresholds, MetricAlert } from '../metrics/types';
import { RESOURCE_THRESHOLDS } from '../metrics/thresholds';
import { sendAlertEmail } from './emailService';
import { showAlertNotification } from './notificationService';

function checkThreshold(value: number, metric: string): MetricAlert | null {
  return value > RESOURCE_THRESHOLDS.CRITICAL
    ? { metric, value }
    : null;
}

export function checkResourceAlerts(server: Server, metrics: MetricThresholds) {
  const alerts: MetricAlert[] = [
    checkThreshold(metrics.cpuUsage, 'CPU Usage'),
    checkThreshold(metrics.memoryUsage, 'Memory Usage'),
    checkThreshold(metrics.diskUsage, 'Disk Usage'),
  ].filter((alert): alert is MetricAlert => alert !== null);

  alerts.forEach(alert => {
    showAlertNotification(alert, server.name);
    sendAlertEmail({
      serverName: server.name,
      metric: alert.metric,
      value: alert.value,
    });
  });
}