import { SystemMetrics, MetricDataPoint } from '../../types/metrics';
import { Server } from '../../types/server';
import { METRIC_RANGES } from './thresholds';

function generateMetricPoint(min: number, max: number): MetricDataPoint {
  return {
    timestamp: new Date().toLocaleTimeString(),
    value: Math.min(Math.floor(Math.random() * (max - min) + min), 100),
  };
}

export function generateNewMetrics(server: Server): SystemMetrics {
  const variance = METRIC_RANGES[server.environment];
  
  return {
    requests: [generateMetricPoint(100 * variance.min, 500 * variance.max)],
    responseTime: [generateMetricPoint(50 * variance.min, 200 * variance.max)],
    errors: [generateMetricPoint(0, 10 * variance.max)],
    cpuUsage: [generateMetricPoint(20 * variance.min, 90 * variance.max)],
    memoryUsage: [generateMetricPoint(40 * variance.min, 85 * variance.max)],
    diskUsage: [generateMetricPoint(50 * variance.min, 80 * variance.max)],
  };
}