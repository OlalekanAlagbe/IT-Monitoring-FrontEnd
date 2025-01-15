// import React from 'react'

// import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle } from 'lucide-react'
// import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card'
// import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts'
// import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart'

// const alerts = [
//   {
//     id: "1",
//     title: "High CPU Usage on Database Server 01",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "2",
//     title: "Unauthorized Access Attempt on Payroll DB",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "3",
//     title: "Disk Space Warning on Finnacle Production Server",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "4",
//     title: "High Memory Usage on Sever 3",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "5",
//     title: "Configuration Update",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
// ]

// const metrics = [
//   { metric: "Total Activities", value: 45 },
//   { metric: "Failed Attempts", value: 7 },
//   { metric: "Successful Actions", value: 38 },
//   { metric: "Most Active User", value: "MG5/235/Doe" },
//   { metric: "Critical Alerts", value: "2 Unauthorized Access Attempts" },
// ]

// const Home = () => {
//   return (
//     <div className="text-black p-8 space-y-8">
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
//         <MetricCard
//           title="CPU Usage"
//           icon={Cpu}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-red-500"
//         />
//         <MetricCard
//           title="Disk Usage"
//           icon={HardDrive}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-blue-500"
//         />
//         <MetricCard
//           title="Memory Usage"
//           icon={Memory}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-yellow-500"
//         />
//         <MetricCard
//           title="Response Time"
//           icon={Timer}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-green-500"
//         />
//         <MetricCard
//           title="Uptime"
//           icon={ArrowUpCircle}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-purple-500"
//         />
//       </div>
//       <div className="grid gap-4 md:grid-cols-2">
//         <ActiveAlerts alerts={alerts} />
//         <ActivitiesChart metrics={metrics} />
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle, Mail, User, Lock, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card';
import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts';
import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart';

const alerts = [
  {
    id: "1",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:05 AM",
  },
  {
    id: "2",
    title: "Packet Loss Detected on Branch 2 Router",
    severity: "Critical",
    timestamp: "2024-12-18 10:10 AM",
  },
  {
    id: "3",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:15 AM",
  },
  {
    id: "4",
    title: "Server Downtime on Process Maker Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:20 AM",
  },
  {
    id: "5",
    title: "Disk Failure Predicted on GAPS Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:25 AM",
  },
  {
    id: "6",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:05 AM",
  },
  {
    id: "7",
    title: "Packet Loss Detected on Branch 2 Router",
    severity: "Critical",
    timestamp: "2024-12-18 10:10 AM",
  },
  {
    id: "8",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:15 AM",
  },
  {
    id: "9",
    title: "Server Downtime on Process Maker Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:20 AM",
  },
  {
    id: "10",
    title: "Disk Failure Predicted on GAPS Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:25 AM",
  },
  {
    id: "11",
    title: "Abnormal Traffic Detected on IBank Server",
    severity: "Warning",
    timestamp: "2024-12-18 10:30 AM",
  },
  {
    id: "12",
    title: "Firewall Breach Attempt Blocked",
    severity: "Critical",
    timestamp: "2024-12-18 10:35 AM",
  },
  {
    id: "13",
    title: "Backup Failed on Finnacle Production Server",
    severity: "Warning",
    timestamp: "2024-12-18 10:40 AM",
  },
  {
    id: "14",
    title: "Service Interruption on Spectranet ISP",
    severity: "Critical",
    timestamp: "2024-12-18 10:45 AM",
  },
  {
    id: "15",
    title: "Scheduled Maintenance: IBank Server",
    severity: "Info",
    timestamp: "2024-12-18 11:00 AM",
  }
];


const metrics = [
  { metric: "Total Activities", value: 45 },
  { metric: "Failed Attempts", value: 7 },
  { metric: "Successful Actions", value: 38 },
  { metric: "Most Active User", value: "MG5/235/Doe" },
  { metric: "Critical Alerts", value: "2 Unauthorized Access Attempts" },
];

const Home = () => {

  return (
    <div className="text-black p-8 space-y-8">
      {/* Metrics Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="CPU Usage"
          icon={Cpu}
          average={63.5}
          maximum={74.89}
          minimum={43.10}
          iconColor="text-red-500"
        />
        <MetricCard
          title="Disk Usage"
          icon={HardDrive}
          average={60.02}
          maximum={69.91}
          minimum={50.23}
          iconColor="text-blue-500"
        />
        <MetricCard
          title="Memory Usage"
          icon={Memory}
          average={60.73}
          maximum={70.90}
          minimum={50.13}
          iconColor="text-yellow-500"
        />
        <MetricCard
          title="Response Time"
          icon={Timer}
          average={60.73}
          maximum={70.9}
          minimum={50.13}
          iconColor="text-green-500"
        />
        <MetricCard
          title="Uptime"
          icon={ArrowUpCircle}
          average={98}
          maximum={99}
          minimum={97}
          iconColor="text-purple-500"
        />
      </div>

      {/* Alerts and Activities Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <ActiveAlerts alerts={alerts} />
        <ActivitiesChart metrics={metrics} />
      </div>

    </div>
  );
};

export default Home;