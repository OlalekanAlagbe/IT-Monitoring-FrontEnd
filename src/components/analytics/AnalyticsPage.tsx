// // import React, { useState, useMemo } from 'react';
// // import { DateRangePicker } from './DateRangePicker';
// // import { ServerSelector } from '../ServerSelector';
// // import { MetricsChart } from './MetricsChart';
// // import { MetricsStats } from './MetricsStats';
// // import { MetricsGauges } from './MetricsGauges';
// // import { HeatmapChart } from './HeatmapChart';
// // import { useAnalytics } from '../../hooks/useAnalytics';
// // import { servers } from '../../rawData/servers';
// // import { DateRange } from '../../types/analytics';
// // import { subWeeks } from 'date-fns';

// // const initialDateRange: DateRange = {
// //   startDate: subWeeks(new Date(), 1),
// //   endDate: new Date(),
// // };

// // const requestsColorScale = [
// //   '#f7fbff',
// //   '#deebf7',
// //   '#c6dbef',
// //   '#9ecae1',
// //   '#6baed6',
// //   '#4292c6',
// //   '#2171b5',
// //   '#084594',
// // ];

// // const errorsColorScale = [
// //   '#fff5f5',
// //   '#fed7d7',
// //   '#feb2b2',
// //   '#fc8181',
// //   '#f56565',
// //   '#e53e3e',
// //   '#c53030',
// //   '#9b2c2c',
// // ];

// // export function AnalyticsPage() {
// //   const [selectedServer, setSelectedServer] = useState(servers[0]);
// //   const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);

// //   const filters = useMemo(() => ({
// //     dateRange,
// //     serverId: selectedServer.id,
// //   }), [dateRange, selectedServer.id]);

// //   const { metrics, stats } = useAnalytics(filters);

// //   return (
// //     <div className="p-6 space-y-6">
// //       <div className="flex items-center justify-between">
// //         <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
// //         <div className="flex items-center space-x-4">
// //           <ServerSelector
// //             servers={servers}
// //             selectedServer={selectedServer}
// //             onServerChange={setSelectedServer}
// //           />
// //           <DateRangePicker
// //             dateRange={dateRange}
// //             onChange={setDateRange}
// //           />
// //         </div>
// //       </div>

// //       <MetricsGauges stats={stats} />
      
// //       <MetricsStats stats={stats} />
      
// //       <div className="space-y-6">
// //         <HeatmapChart
// //           title="Requests Heatmap"
// //           data={metrics}
// //           metric="requests"
// //           colorScale={requestsColorScale}
// //         />
        
// //         <HeatmapChart
// //           title="Errors Heatmap"
// //           data={metrics}
// //           metric="errors"
// //           colorScale={errorsColorScale}
// //         />

// //         <MetricsChart
// //           title="Requests"
// //           data={metrics}
// //           dataKey="requests"
// //           color="#3b82f6"
// //           smoothingWindow={50}
// //         />
// //         <MetricsChart
// //           title="Response Time"
// //           data={metrics}
// //           dataKey="responseTime"
// //           color="#10b981"
// //           smoothingWindow={50}
// //         />
// //         <MetricsChart
// //           title="Errors"
// //           data={metrics}
// //           dataKey="errors"
// //           color="#ef4444"
// //           smoothingWindow={50}
// //         />
// //         {/* <MetricsChart
// //           title="CPU Usage"
// //           data={metrics}
// //           dataKey="cpuUsage"
// //           color="#ef4444"
// //           smoothingWindow={50}
// //         />
// //         <MetricsChart
// //           title="Memory Usage"
// //           data={metrics}
// //           dataKey="memoryUsage"
// //           color="#ef4444"
// //           smoothingWindow={50}
// //         />
// //         <MetricsChart
// //           title="Disk Usage"
// //           data={metrics}
// //           dataKey="diskUsage"
// //           color="#ef4444"
// //           smoothingWindow={50}
// //         /> */}
// //         <MetricsChart
// //           title="Resource Usage"
// //           data={metrics}
// //           dataKeys={['cpuUsage', 'memoryUsage', 'diskUsage']}
// //           colors={['#8b5cf6', '#f59e0b', '#6366f1']}
// //           smoothingWindow={0}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useMemo } from 'react';
// import { DateRangePicker } from './DateRangePicker';
// import { ServerSelector } from '../ServerSelector';
// import { MetricsChart } from './MetricsChart';
// import { MetricsStats } from './MetricsStats';
// import { MetricsGauges } from './MetricsGauges';
// import { HeatmapChart } from './HeatmapChart';
// import { useAnalytics } from '../../hooks/useAnalytics';
// import { servers } from '../../rawData/servers';
// import { DateRange } from '../../types/analytics';
// import { subWeeks } from 'date-fns';

// const initialDateRange: DateRange = {
//   startDate: subWeeks(new Date(), 1),
//   endDate: new Date(),
// };

// const requestsColorScale = [
//   '#f7fbff',
//   '#deebf7',
//   '#c6dbef',
//   '#9ecae1',
//   '#6baed6',
//   '#4292c6',
//   '#2171b5',
//   '#084594',
// ];

// const errorsColorScale = [
//   '#fff5f5',
//   '#fed7d7',
//   '#feb2b2',
//   '#fc8181',
//   '#f56565',
//   '#e53e3e',
//   '#c53030',
//   '#9b2c2c',
// ];

// export function AnalyticsPage() {
//   const [selectedServer, setSelectedServer] = useState(servers[0]);
//   const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);

//   const filters = useMemo(
//     () => ({
//       dateRange,
//       serverId: selectedServer.id,
//     }),
//     [dateRange, selectedServer.id]
//   );

//   const { metrics, stats } = useAnalytics(filters);

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <ServerSelector
//             servers={servers}
//             selectedServer={selectedServer}
//             onServerChange={setSelectedServer}
//           />
//           <DateRangePicker
//             dateRange={dateRange}
//             onChange={setDateRange}
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div key={`${selectedServer.id}-${dateRange.startDate}-${dateRange.endDate}`} className="space-y-6">
//         <MetricsGauges stats={stats} />
//         <MetricsStats stats={stats} />

//         <div className="space-y-6">
//           <HeatmapChart
//             title="Requests Heatmap"
//             data={metrics}
//             metric="requests"
//             colorScale={requestsColorScale}
//           />
//           <HeatmapChart
//             title="Errors Heatmap"
//             data={metrics}
//             metric="errors"
//             colorScale={errorsColorScale}
//           />
//           <MetricsChart
//             title="Requests"
//             data={metrics}
//             dataKey="requests"
//             color="#3b82f6"
//             smoothingWindow={50}
//           />
//           <MetricsChart
//             title="Response Time"
//             data={metrics}
//             dataKey="responseTime"
//             color="#10b981"
//             smoothingWindow={50}
//           />
//           <MetricsChart
//             title="Errors"
//             data={metrics}
//             dataKey="errors"
//             color="#ef4444"
//             smoothingWindow={50}
//           />
//           <MetricsChart
//             title="Resource Usage"
//             data={metrics}
//             dataKeys={['cpuUsage', 'memoryUsage', 'diskUsage']}
//             colors={['#8b5cf6', '#f59e0b', '#6366f1']}
//             smoothingWindow={0}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState, useMemo } from 'react';
// import { DateRangePicker } from './DateRangePicker';
// import { ServerSelector } from '../ServerSelector';
// import { MetricsChart } from './MetricsChart';
// import { MetricsStats } from './MetricsStats';
// import { MetricsGauges } from './MetricsGauges';
// import { HeatmapChart } from './HeatmapChart';
// import { useAnalytics } from '../../hooks/useAnalytics';
// import { servers } from '../../rawData/servers';
// import { DateRange } from '../../types/analytics';
// import { subWeeks } from 'date-fns';

// const initialDateRange: DateRange = {
//   startDate: subWeeks(new Date(), 1),
//   endDate: new Date(),
// };

// const requestsColorScale = [
//   '#f7fbff',
//   '#deebf7',
//   '#c6dbef',
//   '#9ecae1',
//   '#6baed6',
//   '#4292c6',
//   '#2171b5',
//   '#084594',
// ];

// const errorsColorScale = [
//   '#fff5f5',
//   '#fed7d7',
//   '#feb2b2',
//   '#fc8181',
//   '#f56565',
//   '#e53e3e',
//   '#c53030',
//   '#9b2c2c',
// ];

// export function AnalyticsPage() {
//   const [selectedServer, setSelectedServer] = useState(servers[0]);
//   const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);

//   const filters = useMemo(() => ({
//     dateRange,
//     serverId: selectedServer.id,
//   }), [dateRange, selectedServer.id]);

//   const { metrics, stats } = useAnalytics(filters);

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <ServerSelector
//             servers={servers}
//             selectedServer={selectedServer}
//             onServerChange={setSelectedServer}
//           />
//           <DateRangePicker
//             dateRange={dateRange}
//             onChange={setDateRange}
//           />
//         </div>
//       </div>

//       <MetricsGauges stats={stats} />
      
//       <MetricsStats stats={stats} />
      
//       <div className="space-y-6">
//         <HeatmapChart
//           title="Requests Heatmap"
//           data={metrics}
//           metric="requests"
//           colorScale={requestsColorScale}
//         />
        
//         <HeatmapChart
//           title="Errors Heatmap"
//           data={metrics}
//           metric="errors"
//           colorScale={errorsColorScale}
//         />

//         <MetricsChart
//           title="Requests"
//           data={metrics}
//           dataKey="requests"
//           color="#3b82f6"
//           smoothingWindow={50}
//         />
//         <MetricsChart
//           title="Response Time"
//           data={metrics}
//           dataKey="responseTime"
//           color="#10b981"
//           smoothingWindow={50}
//         />
//         <MetricsChart
//           title="Errors"
//           data={metrics}
//           dataKey="errors"
//           color="#ef4444"
//           smoothingWindow={50}
//         />
//         {/* <MetricsChart
//           title="CPU Usage"
//           data={metrics}
//           dataKey="cpuUsage"
//           color="#ef4444"
//           smoothingWindow={50}
//         />
//         <MetricsChart
//           title="Memory Usage"
//           data={metrics}
//           dataKey="memoryUsage"
//           color="#ef4444"
//           smoothingWindow={50}
//         />
//         <MetricsChart
//           title="Disk Usage"
//           data={metrics}
//           dataKey="diskUsage"
//           color="#ef4444"
//           smoothingWindow={50}
//         /> */}
//         <MetricsChart
//           title="Resource Usage"
//           data={metrics}
//           dataKeys={['cpuUsage', 'memoryUsage', 'diskUsage']}
//           colors={['#8b5cf6', '#f59e0b', '#6366f1']}
//           smoothingWindow={0}
//         />
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import { DateRangePicker } from './DateRangePicker';
import { ServerSelector } from '../ServerSelector';
import { MetricsChart } from './MetricsChart';
import { MetricsStats } from './MetricsStats';
import { MetricsGauges } from './MetricsGauges';
import { HeatmapChart } from './HeatmapChart';
import { useAnalytics } from '../../hooks/useAnalytics';
import { servers } from '../../rawData/servers';
import { DateRange } from '../../types/analytics';
import { subWeeks } from 'date-fns';

// const initialDateRange: DateRange = {
//   startDate: subWeeks(new Date(), 1),
//   endDate: new Date(),
// };

const initialDateRange: DateRange = {
  startDate: new Date(2024, 11, 22), // December 22, 2023
  endDate: new Date(2024, 11, 28),   // December 28, 2023
};

const requestsColorScale = [
  '#f7fbff',
  '#deebf7',
  '#c6dbef',
  '#9ecae1',
  '#6baed6',
  '#4292c6',
  '#2171b5',
  '#084594',
];

const errorsColorScale = [
  '#fff5f5',
  '#fed7d7',
  '#feb2b2',
  '#fc8181',
  '#f56565',
  '#e53e3e',
  '#c53030',
  '#9b2c2c',
];

const convertToCSV = (metrics) => {
  if (!metrics || metrics.length === 0) return '';

  const headers = Object.keys(metrics[0]).join(',');
  const rows = metrics.map((metric) => Object.values(metric).join(',')).join('\n');

  return `${headers}\n${rows}`;
};

const downloadCSV = (csvContent, fileName) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function AnalyticsPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);

  const filters = useMemo(
    () => ({
      dateRange,
      serverId: selectedServer.id,
    }),
    [dateRange, selectedServer.id]
  );

  const { metrics, stats } = useAnalytics(filters);

  const handleDownload = () => {
    const csvContent = convertToCSV(metrics);
    const fileName = `analytics-report-${selectedServer.name}-${dateRange.startDate.toISOString()}-${dateRange.endDate.toISOString()}.csv`;
    downloadCSV(csvContent, fileName);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Servers Analytics</h1>
        <div className="flex items-center space-x-4">
          <ServerSelector
            servers={servers}
            selectedServer={selectedServer}
            onServerChange={setSelectedServer}
          />
          <DateRangePicker
            dateRange={dateRange}
            onChange={setDateRange}
          />
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-[#DD4F05] text-xs text-white rounded transition-colors duration-300 hover:bg-[#DD4F05]/70"
          >
            Download Report
          </button>
        </div>
      </div>

      <div key={`${selectedServer.id}-${dateRange.startDate}-${dateRange.endDate}`} className="space-y-6">
        <MetricsGauges stats={stats} />
        <MetricsStats stats={stats} />

        <div className="space-y-6">
          <HeatmapChart
            title="Requests Heatmap"
            data={metrics}
            metric="requests"
            colorScale={requestsColorScale}
          />
          <HeatmapChart
            title="Errors Heatmap"
            data={metrics}
            metric="errors"
            colorScale={errorsColorScale}
          />
          <MetricsChart
            title="Requests"
            data={metrics}
            dataKey="requests"
            color="#3b82f6"
            aggregationType="sum"
          />
          <MetricsChart
            title="Response Time"
            data={metrics}
            dataKey="responseTime"
            color="#10b981"
            aggregationType="sum"
          />
          <MetricsChart
            title="Errors"
            data={metrics}
            dataKey="errors"
            color="#ef4444"
            aggregationType="sum"
          />
          <MetricsChart
            title="Resource Usage"
            data={metrics}
            dataKeys={['cpuUsage', 'memoryUsage', 'diskUsage']}
            colors={['#8b5cf6', '#f59e0b', '#6366f1']}
            aggregationType="average"
          />
        </div>
      </div>
    </div>
  );
}
