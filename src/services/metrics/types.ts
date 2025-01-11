export interface MetricThresholds {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
}

export interface MetricAlert {
  metric: string;
  value: number;
}