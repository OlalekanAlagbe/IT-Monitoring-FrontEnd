import { useState, useEffect, useMemo } from 'react';
import { AnalyticsFilters, DailyMetrics, MetricStats } from '../types/analytics';
import { calculateMetricStats } from '../utils/analytics';
import historicalData from '../rawData/historicalData.json';

export function useAnalytics(filters: AnalyticsFilters) {
  const filteredMetrics = useMemo(() => {
    try {
      const { dateRange, serverId } = filters;
      const serverData = historicalData.servers[serverId || 'server-1']?.metrics || [];
      
      return serverData.filter(metric => {
        const date = new Date(metric.timestamp);
        return date >= dateRange.startDate && date <= dateRange.endDate;
      });
    } catch (error) {
      console.error('Error filtering metrics:', error);
      return [];
    }
  }, [filters.dateRange.startDate, filters.dateRange.endDate, filters.serverId]);

  const stats = useMemo(() => 
    calculateMetricStats(filteredMetrics), 
    [filteredMetrics]
  );

  return { metrics: filteredMetrics, stats };
}