export interface MetricStats {
  average: number;
  maximum: number;
  minimum: number;
  median: number;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface AnalyticsFilters {
  dateRange: DateRange;
  serverId?: string;
}

export interface DailyMetrics {
  timestamp: string;
  requests: number;
  responseTime: number;
  errors: number;
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
}