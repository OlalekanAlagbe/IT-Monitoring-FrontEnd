// import React from 'react';
// import { GaugeChart } from './GaugeChart';
// import { MetricStats } from '../../types/analytics';

// interface MetricsGaugesProps {
//   stats: Record<string, MetricStats>;
// }

// const GAUGE_CONFIG = {
//   requests: { maxValue: 500, color: '#3b82f6', unit: '/min' },
//   responseTime: { maxValue: 200, color: '#10b981', unit: 'ms' },
//   errors: { maxValue: 10, color: '#ef4444', unit: '' },
//   cpuUsage: { maxValue: 100, color: '#8b5cf6', unit: '%' },
//   memoryUsage: { maxValue: 100, color: '#f59e0b', unit: '%' },
//   diskUsage: { maxValue: 100, color: '#6366f1', unit: '%' },
// };

// export function MetricsGauges({ stats }: MetricsGaugesProps) {
//   if (!stats) return null;

//   const metricLabels = {
//     requests: 'Avg Requests',
//     responseTime: 'Avg Response Time',
//     errors: 'Avg Errors',
//     cpuUsage: 'Avg CPU Usage',
//     memoryUsage: 'Avg Memory Usage',
//     diskUsage: 'Avg Disk Usage',
//   };

//   return (
//     <div className="text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//       {Object.entries(stats).map(([metric, values]) => (
//         <GaugeChart
//           key={metric}
//           value={values.average}
//           maxValue={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].maxValue}
//           color={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].color}
//           label={metricLabels[metric as keyof typeof metricLabels]}
//           unit={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].unit}
          
//         />
//       ))}
//     </div>
//   );
// }




import React from 'react';
import { GaugeChart } from './GaugeChart';
import { MetricStats } from '../../types/analytics';

interface MetricsGaugesProps {
  stats: Record<string, MetricStats>;
}

const GAUGE_CONFIG = {
  requests: { maxValue: 500, color: '#FFBF00', unit: '/min', targetValue: 750 },
  responseTime: { maxValue: 200, color: '#FF8C00', unit: 'ms', targetValue: 85 },
  errors: { maxValue: 10, color: '#ef4444', unit: '', targetValue: 2 },
  cpuUsage: { maxValue: 100, color: '#FFDAB9', unit: '%', targetValue: 70 },
  memoryUsage: { maxValue: 100, color: '#CC5500', unit: '%', targetValue: 80 },
  diskUsage: { maxValue: 100, color: '#FF9500', unit: '%', targetValue: 65 },
};

export function MetricsGauges({ stats }: MetricsGaugesProps) {
  if (!stats) return null;

  const metricLabels = {
    requests: 'Avg Requests',
    responseTime: 'Avg Response Time',
    errors: 'Avg Errors',
    cpuUsage: 'Avg CPU Usage',
    memoryUsage: 'Avg Memory Usage',
    diskUsage: 'Avg Disk Usage',
  };

  return (
    <div className="text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {Object.entries(stats).map(([metric, values]) => (
        <GaugeChart
          key={metric}
          value={values.average}
          maxValue={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].maxValue}
          targetValue={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].targetValue}
          color={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].color}
          label={metricLabels[metric as keyof typeof metricLabels]}
          unit={GAUGE_CONFIG[metric as keyof typeof GAUGE_CONFIG].unit}
        />
      ))}
    </div>
  );
}
