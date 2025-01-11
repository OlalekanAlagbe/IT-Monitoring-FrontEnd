import { format, subWeeks, eachDayOfInterval } from 'date-fns';
import { Server } from '../types/server';
import { METRIC_RANGES } from '../services/metrics/thresholds';
import { servers } from '../rawData/servers';

function generateMetricValue(min: number, max: number, variance: { min: number; max: number }) {
  return Math.floor(
    Math.random() * (max * variance.max - min * variance.min) + min * variance.min
  );
}

function generateDailyMetrics(server: Server, date: Date) {
  const variance = METRIC_RANGES[server.environment];
  const metrics = [];

  // Generate 288 data points per day (every 5 minutes)
  for (let i = 0; i < 288; i++) {
    const timestamp = new Date(date);
    timestamp.setMinutes(timestamp.getMinutes() + (i * 5));
    
    metrics.push({
      timestamp: format(timestamp, "yyyy-MM-dd'T'HH:mm:ss"),
      requests: generateMetricValue(100, 500, variance),
      responseTime: generateMetricValue(50, 200, variance),
      errors: generateMetricValue(0, 10, variance),
      cpuUsage: generateMetricValue(20, 90, variance),
      memoryUsage: generateMetricValue(40, 85, variance),
      diskUsage: generateMetricValue(50, 80, variance),
    });
  }

  return metrics;
}

export function generateHistoricalData() {
  const endDate = new Date();
  const startDate = subWeeks(endDate, 8);
  
  const historicalData = {
    generated: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
    period: "8 weeks",
    servers: {} as Record<string, { metrics: any[] }>,
  };

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  servers.forEach(server => {
    historicalData.servers[server.id] = {
      metrics: days.flatMap(date => generateDailyMetrics(server, new Date(date))),
    };
  });

  return historicalData;
}