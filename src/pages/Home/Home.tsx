
import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle, Mail, User, Lock, RefreshCw, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card';
import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts';
import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart';

// const alerts = [
//   {
//     id: "1",
//     title: "Network Latency Spike on MTN ISP",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:05 AM",
//   },
//   {
//     id: "2",
//     title: "Packet Loss Detected on Branch 2 Router",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:10 AM",
//   },
//   {
//     id: "3",
//     title: "High Bandwidth Utilization on Airtel ISP",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:15 AM",
//   },
//   {
//     id: "4",
//     title: "Server Downtime on Process Maker Server",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:20 AM",
//   },
//   {
//     id: "5",
//     title: "Disk Failure Predicted on GAPS Server",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:25 AM",
//   },
//   {
//     id: "6",
//     title: "Network Latency Spike on MTN ISP",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:05 AM",
//   },
//   {
//     id: "7",
//     title: "Packet Loss Detected on Branch 2 Router",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:10 AM",
//   },
//   {
//     id: "8",
//     title: "High Bandwidth Utilization on Airtel ISP",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:15 AM",
//   },
//   {
//     id: "9",
//     title: "Server Downtime on Process Maker Server",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:20 AM",
//   },
//   {
//     id: "10",
//     title: "Disk Failure Predicted on GAPS Server",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:25 AM",
//   },
//   {
//     id: "11",
//     title: "Abnormal Traffic Detected on IBank Server",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:30 AM",
//   },
//   {
//     id: "12",
//     title: "Firewall Breach Attempt Blocked",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:35 AM",
//   },
//   {
//     id: "13",
//     title: "Backup Failed on Finnacle Production Server",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:40 AM",
//   },
//   {
//     id: "14",
//     title: "Service Interruption on Spectranet ISP",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:45 AM",
//   },
//   {
//     id: "15",
//     title: "Scheduled Maintenance: IBank Server",
//     severity: "Info",
//     timestamp: "2024-12-18 11:00 AM",
//   }
// ];

// Function to get yesterday's date in the desired format
const getYesterdayTimestamp = () => {
  const today = new Date(); // Get today's date
  const yesterday = new Date(today); // Create a copy of today's date
  yesterday.setDate(today.getDate() - 1); // Subtract 1 day to get yesterday

  // Format the date and time as "YYYY-MM-DD HH:MM AM/PM"
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(yesterday.getDate()).padStart(2, '0');
  const hours = String(yesterday.getHours() % 12 || 12).padStart(2, '0'); // Convert to 12-hour format
  const minutes = String(yesterday.getMinutes()).padStart(2, '0');
  const ampm = yesterday.getHours() >= 12 ? 'PM' : 'AM';

  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
};

// Alerts array with dynamic timestamp
const alerts = [
  {
    id: "1",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "2",
    title: "Packet Loss Detected on Ikeja Branch Router",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "3",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "4",
    title: "Server Downtime on Abuja Central Branch Server",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "5",
    title: "Disk Failure Predicted on Port Harcourt Branch Server",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "6",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "7",
    title: "Packet Loss Detected on Kano Branch Router",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "8",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "9",
    title: "Server Downtime on Ibadan Branch Server",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "10",
    title: "Disk Failure Predicted on Enugu Branch Server",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "11",
    title: "Abnormal Traffic Detected on Benin Branch Server",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "12",
    title: "Firewall Breach Attempt Blocked on Surulere Branch, Lagos",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "13",
    title: "Backup Failed on Warri Branch Server",
    severity: "Warning",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "14",
    title: "Service Interruption on Spectranet ISP",
    severity: "Critical",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
  {
    id: "15",
    title: "Scheduled Maintenance: IBank Server",
    severity: "Info",
    timestamp: getYesterdayTimestamp(), // Dynamic timestamp
  },
];


const metrics = [
  { metric: "Total Activities", value: 45 },
  { metric: "Failed Attempts", value: 7 },
  { metric: "Successful Actions", value: 38 },
  { metric: "Most Active User", value: "Chidi Okafor / 57780" },
  {
    metric: "Critical Alerts",
    value: "8 Critical Alerts: 2 Packet Loss Detected, 2 Server Downtime, 2 Disk Failure Predicted, 1 Firewall Breach Attempt Blocked, 1 Service Interruption"
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

    // Simulate a 400ms delay before rendering the content
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div className="mt-5 flex items-start justify-center h-screen space-x-3">
        <Loader2 className="animate-spin ml-2 h-4 w-4 text-gray-500" />
        <p className="text-gray-500 text-sm font-medium align-middle">Loading...</p>
      </div>
      );
    }

  return (
    <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="text-black p-8 space-y-8">
        <div className="mb-1">
          <h2 className="text-lg font-semibold text-gray-900">
             Summary of key metrics from {new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h2>
       </div>
      {/* Metrics Section */}
      <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
      <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="grid gap-4 md:grid-cols-2">
        <ActiveAlerts alerts={alerts} />
        <ActivitiesChart metrics={metrics} />
      </div>

    </div>
  );
};

export default Home;