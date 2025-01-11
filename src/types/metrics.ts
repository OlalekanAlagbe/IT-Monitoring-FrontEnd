export interface MetricDataPoint {
  timestamp: string;
  value: number;
}

export interface SystemMetrics {
  requests: MetricDataPoint[];
  responseTime: MetricDataPoint[];
  errors: MetricDataPoint[];
  cpuUsage: MetricDataPoint[];
  memoryUsage: MetricDataPoint[];
  diskUsage: MetricDataPoint[];
}