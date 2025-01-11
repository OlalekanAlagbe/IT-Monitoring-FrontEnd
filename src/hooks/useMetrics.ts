import { useState, useEffect } from 'react';
import { SystemMetrics } from '../types/metrics';
import { Server } from '../types/server';
import { generateNewMetrics } from '../services/metrics/generator';
import { checkResourceAlerts } from '../services/alerts/alertService';
import { mockMetrics } from '../rawData/mockData';

const MAX_HISTORY = 200;
const REFRESH_INTERVAL = 5  * 1000; // 5 minutes in milliseconds

export function useMetrics(server: Server) {
  const [metrics, setMetrics] = useState<SystemMetrics>(mockMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMetricPoints = generateNewMetrics(server);
      
      checkResourceAlerts(server, {
        cpuUsage: newMetricPoints.cpuUsage[0].value,
        memoryUsage: newMetricPoints.memoryUsage[0].value,
        diskUsage: newMetricPoints.diskUsage[0].value,
      });

      setMetrics(current => ({
        requests: [...newMetricPoints.requests, ...current.requests].slice(0, MAX_HISTORY),
        responseTime: [...newMetricPoints.responseTime, ...current.responseTime].slice(0, MAX_HISTORY),
        errors: [...newMetricPoints.errors, ...current.errors].slice(0, MAX_HISTORY),
        cpuUsage: [...newMetricPoints.cpuUsage, ...current.cpuUsage].slice(0, MAX_HISTORY),
        memoryUsage: [...newMetricPoints.memoryUsage, ...current.memoryUsage].slice(0, MAX_HISTORY),
        diskUsage: [...newMetricPoints.diskUsage, ...current.diskUsage].slice(0, MAX_HISTORY),
      }));
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [server]);

  return metrics;
}