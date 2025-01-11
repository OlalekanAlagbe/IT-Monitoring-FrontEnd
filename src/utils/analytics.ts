import { DailyMetrics, MetricStats } from '../types/analytics';

export const INITIAL_STATS: Record<keyof DailyMetrics, MetricStats> = {
  requests: { average: 0, maximum: 0, minimum: 0, median: 0 },
  responseTime: { average: 0, maximum: 0, minimum: 0, median: 0 },
  errors: { average: 0, maximum: 0, minimum: 0, median: 0 },
  cpuUsage: { average: 0, maximum: 0, minimum: 0, median: 0 },
  memoryUsage: { average: 0, maximum: 0, minimum: 0, median: 0 },
  diskUsage: { average: 0, maximum: 0, minimum: 0, median: 0 },
};

export function calculateMetricStats(metrics: DailyMetrics[]): Record<keyof DailyMetrics, MetricStats> {
  if (!metrics.length) return INITIAL_STATS;

  const stats = {} as Record<keyof DailyMetrics, MetricStats>;
  const keys = ['requests', 'responseTime', 'errors', 'cpuUsage', 'memoryUsage', 'diskUsage'];

  keys.forEach(key => {
    const values = metrics.map(m => m[key as keyof DailyMetrics] as number);
    const sorted = [...values].sort((a, b) => a - b);
    
    stats[key as keyof DailyMetrics] = {
      average: values.reduce((a, b) => a + b, 0) / values.length,
      maximum: Math.max(...values),
      minimum: Math.min(...values),
      median: sorted[Math.floor(sorted.length / 2)],
    };
  });

  return stats;
}