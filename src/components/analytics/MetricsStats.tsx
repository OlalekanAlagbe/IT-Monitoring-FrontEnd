import React from 'react';
import { MetricStats } from '../../types/analytics';

interface MetricsStatsProps {
  stats: Record<string, MetricStats>;
}

export function MetricsStats({ stats }: MetricsStatsProps) {
  if (!stats) return null;

  const metricLabels = {
    requests: 'Requests',
    responseTime: 'Response Time',
    errors: 'Errors',
    cpuUsage: 'CPU Usage',
    memoryUsage: 'Memory Usage',
    diskUsage: 'Disk Usage',
  };

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(stats).map(([metric, values]) => (
        <div key={metric} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">
            {metricLabels[metric as keyof typeof metricLabels]}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-gray-600">Average</p>
              <p className="font-semibold">{values.average.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Maximum</p>
              <p className="font-semibold">{values.maximum}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Minimum</p>
              <p className="font-semibold">{values.minimum}</p>
            </div>
            {/* <div>
              <p className="text-sm text-gray-600">Median</p>
              <p className="font-semibold">{values.median.toFixed(2)}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}