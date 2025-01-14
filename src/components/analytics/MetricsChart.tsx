// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
// import { format, startOfDay } from 'date-fns';
// import { DailyMetrics } from '../../types/analytics';

// interface MetricsChartProps {
//   title: string;
//   data: DailyMetrics[];
//   dataKey?: keyof DailyMetrics;
//   dataKeys?: (keyof DailyMetrics)[];
//   colors: string | string[];
// }

// // Helper function to aggregate data by day and calculate averages
// const aggregateDataByDay = (data: DailyMetrics[]): DailyMetrics[] => {
//   const aggregatedData: { [key: string]: { sum: DailyMetrics; count: number } } = {};

//   data.forEach((entry) => {
//     const dateKey = startOfDay(new Date(entry.timestamp)).toISOString();

//     if (!aggregatedData[dateKey]) {
//       aggregatedData[dateKey] = {
//         sum: {
//           timestamp: dateKey,
//           ...Object.keys(entry).reduce((acc, key) => {
//             if (key !== 'timestamp') {
//               acc[key] = 0;
//             }
//             return acc;
//           }, {} as Partial<DailyMetrics>),
//         },
//         count: 0,
//       };
//     }

//     Object.keys(entry).forEach((key) => {
//       if (key !== 'timestamp' && typeof entry[key] === 'number') {
//         aggregatedData[dateKey].sum[key] += entry[key];
//       }
//     });

//     aggregatedData[dateKey].count += 1;
//   });

//   // Calculate averages
//   return Object.values(aggregatedData).map(({ sum, count }) => ({
//     ...sum,
//     ...Object.keys(sum).reduce((acc, key) => {
//       if (key !== 'timestamp' && typeof sum[key] === 'number') {
//         acc[key] = (sum[key] / count).toFixed(2); // Calculate average
//       }
//       return acc;
//     }, {} as Partial<DailyMetrics>),
//   }));
// };

// export function MetricsChart({ title, data, dataKey, dataKeys, colors }: MetricsChartProps) {
//   // Aggregate data by day and calculate averages
//   const aggregatedData = aggregateDataByDay(data);

//   return (
//     <div className="text-black bg-white p-6 rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-4">{title}</h2>
//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={aggregatedData}>
//             <XAxis
//               dataKey="timestamp"
//               tickFormatter={(value) => format(new Date(value), 'MM/dd')}
//               tick={{ fontSize: 10, fontWeight: "bold", angle: 45, dy: 10 }}
//             />
//             <YAxis />
//             <Tooltip
//               labelFormatter={(value) => format(new Date(value), 'MM/dd/yyyy')}
//             />
//             <Legend />
//             {dataKey && (
//               <Line
//                 type="monotone"
//                 dataKey={dataKey}
//                 stroke={colors as string}
//                 dot={false}
//               />
//             )}
//             {dataKeys && dataKeys.map((key, index) => (
//               <Line
//                 key={key}
//                 type="monotone"
//                 dataKey={key}
//                 stroke={(colors as string[])[index]}
//                 dot={false}
//               />
//             ))}
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { format, startOfDay } from 'date-fns';
import { DailyMetrics } from '../../types/analytics';

interface MetricsChartProps {
  title: string;
  data: DailyMetrics[];
  dataKey?: keyof DailyMetrics;
  dataKeys?: (keyof DailyMetrics)[];
  colors: string | string[];
  aggregationType?: 'sum' | 'average'; // New prop to specify aggregation type
}



// Helper function to aggregate data by day and calculate sums or averages
const aggregateDataByDay = (data: DailyMetrics[], aggregationType: 'sum' | 'average'): DailyMetrics[] => {
  const aggregatedData: { [key: string]: { sum: DailyMetrics; count: number } } = {};

  data.forEach((entry) => {
    const dateKey = startOfDay(new Date(entry.timestamp)).toISOString();

    if (!aggregatedData[dateKey]) {
      aggregatedData[dateKey] = {
        sum: {
          timestamp: dateKey,
          ...Object.keys(entry).reduce((acc, key) => {
            if (key !== 'timestamp') {
              acc[key] = 0;
            }
            return acc;
          }, {} as Partial<DailyMetrics>),
        },
        count: 0,
      };
    }

    Object.keys(entry).forEach((key) => {
      if (key !== 'timestamp' && typeof entry[key] === 'number') {
        aggregatedData[dateKey].sum[key] += entry[key];
      }
    });

    aggregatedData[dateKey].count += 1;
  });

  // Calculate sums or averages
  return Object.values(aggregatedData).map(({ sum, count }) => ({
    ...sum,
    ...Object.keys(sum).reduce((acc, key) => {
      if (key !== 'timestamp' && typeof sum[key] === 'number') {
        acc[key] = aggregationType === 'average' ? (sum[key] / count).toFixed(2) : sum[key];
      }
      return acc;
    }, {} as Partial<DailyMetrics>),
  }));
};

export function MetricsChart({ title, data, dataKey, dataKeys, colors, aggregationType = 'average' }: MetricsChartProps) {
  // Aggregate data by day and calculate sums or averages
  const aggregatedData = aggregateDataByDay(data, aggregationType);
   // Helper function to round up the maximum value to the nearest specified base
  const roundUpToNearest = (value: number, base: number): number => {
  return Math.ceil(value / base) * base;
};
   // Calculate the maximum value for the y-axis
   const maxValue = Math.max(
    ...aggregatedData.map((entry) => entry[dataKey as keyof DailyMetrics] || 0)
  );

  // Round up the maximum value to the nearest 10, 100, or 1000 (you can adjust the base as needed)
  const roundedMaxValue = roundUpToNearest(maxValue, 10);

  // Set the y-axis domain
  const yAxisDomain = [0, roundedMaxValue];

  return (
    <div className="text-black bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={aggregatedData}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value) => format(new Date(value), 'MM/dd')}
              tick={{ fontSize: 10, fontWeight: "bold", angle: 45, dy: 10 }}
            />
            <YAxis  />
            <Tooltip
              labelFormatter={(value) => format(new Date(value), 'MM/dd/yyyy')}
            />
            <Legend />
            {dataKey && (
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={colors as string}
                dot={false}
              />
            )}
            {dataKeys && dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={(colors as string[])[index]}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}