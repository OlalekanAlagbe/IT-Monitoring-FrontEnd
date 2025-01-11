import React from 'react'

import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle } from 'lucide-react'
import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card'
import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts'
import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart'

const alerts = [
  {
    id: "1",
    title: "High CPU Usage on Database Server 01",
    severity: "Critical",
    timestamp: "2024-12-18 10:00 AM",
  },
  {
    id: "2",
    title: "Unauthorized Access Attempt on Payroll DB",
    severity: "Warning",
    timestamp: "2024-12-18 10:00 AM",
  },
  {
    id: "3",
    title: "Disk Space Warning on Finnacle Production Server",
    severity: "Warning",
    timestamp: "2024-12-18 10:00 AM",
  },
  {
    id: "4",
    title: "High Memory Usage on Sever 3",
    severity: "Critical",
    timestamp: "2024-12-18 10:00 AM",
  },
  {
    id: "5",
    title: "Configuration Update",
    severity: "Warning",
    timestamp: "2024-12-18 10:00 AM",
  },
]

const metrics = [
  { metric: "Total Activities", value: 45 },
  { metric: "Failed Attempts", value: 7 },
  { metric: "Successful Actions", value: 38 },
  { metric: "Most Active User", value: "MG5/235/Doe" },
  { metric: "Critical Alerts", value: "2 Unauthorized Access Attempts" },
]

const Home = () => {
  return (
    <div className="text-black p-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="CPU Usage"
          icon={Cpu}
          average={78}
          maximum={98}
          minimum={45}
          iconColor="text-red-500"
        />
        <MetricCard
          title="Disk Usage"
          icon={HardDrive}
          average={78}
          maximum={98}
          minimum={45}
          iconColor="text-blue-500"
        />
        <MetricCard
          title="Memory Usage"
          icon={Memory}
          average={78}
          maximum={98}
          minimum={45}
          iconColor="text-yellow-500"
        />
        <MetricCard
          title="Response Time"
          icon={Timer}
          average={78}
          maximum={98}
          minimum={45}
          iconColor="text-green-500"
        />
        <MetricCard
          title="Uptime"
          icon={ArrowUpCircle}
          average={78}
          maximum={98}
          minimum={45}
          iconColor="text-purple-500"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ActiveAlerts alerts={alerts} />
        <ActivitiesChart metrics={metrics} />
      </div>
    </div>
  )
}

export default Home






























































































// import {TrendingUp,TrendingDown,Activity,AlertCircle, Cpu, HardDrive, Memory, Server } from 'lucide-react';
// import HomeMetrisTop from '../../components/HomeMetricsTop/HomeMetrisTop';
// // import {serveDataResponseTimeDownTime} from '../../data'
// import {getServerMetrics,computeOverallMetrics,getServerMetrics2,computeOverallMetrics2} from '../../utils/calculations'
// import './Home.css'
// import { useEffect, useState } from 'react';
// import { Area, AreaChart, CartesianGrid, Cell, Label, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const Home = () => {

//   // State variables to store the fetched data
//   const [responseTimeUpTimeData, setResponseTimeUpTimeData] = useState([]);
//   const [serverHealthData, setServerHealthData] = useState([]);

//   // Fetch data from the endpoints using async/await
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch response time and uptime data
//         const responseTimeUpTimeResponse = await fetch('http://localhost:3000/api/serve-health-responsetime-uptime');
//         const responseTimeUpTimeData = await responseTimeUpTimeResponse.json();
//         setResponseTimeUpTimeData(responseTimeUpTimeData);

//         // Fetch server health data
//         const serverHealthResponse = await fetch('http://localhost:3000/api/server-health');
//         const serverHealthData = await serverHealthResponse.json();
//         setServerHealthData(serverHealthData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);


// const server1Metrics = getServerMetrics(responseTimeUpTimeData,"Server-1")
// const server2Metrics = getServerMetrics(responseTimeUpTimeData,"Server-2")
// const server3Metrics = getServerMetrics(responseTimeUpTimeData,"Server-3")
// const server4Metrics = getServerMetrics(responseTimeUpTimeData,"Server-4")
// const server5Metrics = getServerMetrics(responseTimeUpTimeData,"Server-5")
// const server1Metrics2 = getServerMetrics2(serverHealthData,"Server-1")
// const server2Metrics2 = getServerMetrics2(serverHealthData,"Server-2")
// const server3Metrics2 = getServerMetrics2(serverHealthData,"Server-3")
// const server4Metrics2 = getServerMetrics2(serverHealthData,"Server-4")
// const server5Metrics2 = getServerMetrics2(serverHealthData,"Server-5")
// const computeOverallMetricsRU = computeOverallMetrics(responseTimeUpTimeData)
// const computeOverallMetricsDCM = computeOverallMetrics2(serverHealthData)

// // Destructure the object to extract only the required properties
// const { avgResponseTime, maxResponseTime, minResponseTime,avgUptime,maxUptime,minUptime } = computeOverallMetricsRU;


// //Extraction of Averages for CPU,Disk Usage and Memory
// const cpu = [
//   { value: computeOverallMetricsDCM?.stats?.cpuUsage?.average ?? 0 },
//   { value: 100 - (computeOverallMetricsDCM?.stats?.cpuUsage?.average ?? 0) },
// ];

// const disk = [
//   { value: computeOverallMetricsDCM?.stats?.diskUsage?.average ?? 0 },
//   { value: 100 - (computeOverallMetricsDCM?.stats?.diskUsage?.average ?? 0) },
// ];
// const memory = [
//   { value: computeOverallMetricsDCM?.stats?.memoryUsage?.average ?? 0 },
//   { value: 100 - (computeOverallMetricsDCM?.stats?.memoryUsage?.average ?? 0) },
// ];

// const COLORS = ['orange', 'gray']; // Gauge color and background color

// console.log(cpu)
//   return (
//     <div className='home'>
//         <div className="first-container box">
//           <div className="top-info">
//             <div className="server-count card">
//               <h1 className='text-black'>Total Server Monitored</h1>
//               <h1 className='text-orange-600 font text-xl'>5</h1>
//             </div>
//             <div className="cpu card">
//               <h1 className='text-black'>Average CPU Usage (%)</h1>
//               <h1 className='text-orange-600 font text-xl'>64.20</h1>
//             </div>
//             <div className="critical-alert card">
//               <h1 className='text-black'>Critical Alert Count</h1>
//               <h1 className='text-orange-600 font text-xl'>2</h1>
//             </div>
//           </div>
//           <div className="left-side-charts">
//             <div className="cpu text-black">
//               <h2 className="text-xs font-bold mb-4">CPU Usage Trend</h2>
//               <ResponsiveContainer width="100%" height="80%">
//               <AreaChart
//                 data={serverHealthData}
//                 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis
//                   dataKey="timestamp"
//                   tickFormatter={(value) => new Date(value).toLocaleTimeString()}
//                   name="Timestamp"
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <YAxis
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <Tooltip
//                   contentStyle={{
//                     fontSize: 12,
//                     backgroundColor: "#000",
//                     borderRadius: "8px",
//                   }}
//                   labelFormatter={(value) => new Date(value).toLocaleString()}
//                 />
//                 <Legend />
//                 <Area
//                   type="monotone"
//                   dataKey="cpuUsage"
//                   stroke="#3b82f6"
//                   fill="#bfdbfe"
//                   name="CPU Usage"
//                 />
//               </AreaChart>
//               </ResponsiveContainer>

//             </div>
//             <div className="three-combined text-black">
//               <h2 className="text-sm font-bold mb-4">Server Response Time and Uptime</h2>
//               <ResponsiveContainer width="100%" height="92%">
//                 <AreaChart
//                   data={serverHealthData}
//                   margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis
//                     dataKey="timestamp"
//                     tickFormatter={(value) => new Date(value).toLocaleTimeString()}
//                     name="Timestamp"
//                     stroke="#6b7280"
//                     tick={{ fontSize: 12 }}
//                   />
//                   <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
//                   <Tooltip
//                     contentStyle={{
//                       fontSize: 10,
//                       backgroundColor: "#000",
//                       borderRadius: "8px",
//                     }}
//                     labelFormatter={(value) => new Date(value).toLocaleString()}
//                   />
//                   <Legend />
//                   <Area
//                     type="monotone"
//                     dataKey="cpuUsage"
//                     stroke="#3b82f6" /* Distinct dark blue */
//                     fill="#3b82f6" /* Light blue */
//                     fillOpacity={0.6} /* Semi-transparent */
//                     name="CPU Usage"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="diskUsage"
//                     stroke="#10b981" /* Distinct dark green */
//                     fill="#10b981" /* Light green */
//                     fillOpacity={0.6} /* Semi-transparent */
//                     name="Disk Usage"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="memoryUsage"
//                     stroke="#f59e0b" /* Distinct dark orange */
//                     fill="#f59e0b" /* Light orange */
//                     fillOpacity={0.6} /* Semi-transparent */
//                     name="Memory Usage"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>

//             </div>
//             <div className="disk text-black">
//             <h2 className="text-xs font-bold mb-4">Disk Usage Trend</h2>
//               <ResponsiveContainer width="100%" height="80%">
//               <AreaChart
//                 data={serverHealthData}
//                 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis
//                   dataKey="timestamp"
//                   tickFormatter={(value) => new Date(value).toLocaleTimeString()}
//                   name="Timestamp"
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <YAxis
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <Tooltip
//                   contentStyle={{
//                     fontSize: 12,
//                     backgroundColor: "#000",
//                     borderRadius: "8px",
//                   }}
//                   labelFormatter={(value) => new Date(value).toLocaleString()}
//                 />
//                 <Legend />
//                 <Area
//                   type="monotone"
//                   dataKey="diskUsage"
//                   stroke="#10b981"
//                   fill="#10b981"
//                   name="Disk Usage"
//                 />
//               </AreaChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="memory text-black">
//             <h2 className="text-xs font-bold mb-4">Memory Usage Trend</h2>
//               <ResponsiveContainer width="100%" height="80%">
//               <AreaChart
//                 data={serverHealthData}
//                 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis
//                   dataKey="timestamp"
//                   tickFormatter={(value) => new Date(value).toLocaleTimeString()}
//                   name="Timestamp"
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <YAxis
//                   stroke="#6b7280"
//                   tick={{ fontSize: 12 }}
//                 />
//                 <Tooltip
//                   contentStyle={{
//                     fontSize: 12,
//                     backgroundColor: "#000",
//                     borderRadius: "8px",
//                   }}
//                   labelFormatter={(value) => new Date(value).toLocaleString()}
//                 />
//                 <Legend />
//                 <Area
//                   type="monotone"
//                   dataKey="memoryUsage"
//                   stroke="#f59e0b"
//                   fill="#f59e0b"
//                   name="Memory Usage"
//                 />
//               </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//         <div className="second-container box">
//           <div className="cpu bg-[rgb(245,237,237)] h-full rounded-[5px] shadow text-center">
//                 <p className="text-black text-sm py-2 text-xs mb-5">Average CPU Usage</p>
//                 <div className="text-center h-full">
//                   <ResponsiveContainer width="100%" height="70%">
//                     <PieChart>
//                         <Pie
//                           data={cpu}
//                           startAngle={180}
//                           endAngle={0}
//                           innerRadius={40}
//                           outerRadius={60}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {cpu.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                           ))}
//                           <Label
//                             value={`${computeOverallMetricsDCM?.stats?.cpuUsage?.average ?? 0}`}
//                             position="center"
//                             style={{ fontSize: '15px', fontWeight: 'bold' }}
//                           />
//                         </Pie>
//                       </PieChart>
          
//                   </ResponsiveContainer>
//               </div>
                
//           </div>
//           <div className="disk bg-[rgb(245,237,237)] h-full rounded-[5px] shadow text-center">
//                 <p className="text-black py-2 text-xs mb-5">Average Disk Usage</p>
//                 <div className="text-center h-full">
//                   <ResponsiveContainer width="100%" height="70%">
//                     <PieChart>
//                         <Pie
//                           data={disk}
//                           startAngle={180}
//                           endAngle={0}
//                           innerRadius={40}
//                           outerRadius={60}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {disk.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                           ))}
//                           <Label
//                             value={`${computeOverallMetricsDCM?.stats?.diskUsage?.average ?? 0}`}
//                             position="center"
//                             style={{ fontSize: '15px', fontWeight: 'bold' }}
//                           />
//                         </Pie>
//                       </PieChart>
          
//                   </ResponsiveContainer>
//               </div>
                
//           </div>
//           <div className="memory bg-[rgb(245,237,237)] h-full rounded-[5px] shadow text-center ">
//                 <p className="text-black py-2 text-xs mb-5">Average Memory Usage</p>
//                 <div className="text-center h-full">
//                   <ResponsiveContainer width="100%" height="70%">
//                     <PieChart>
//                         <Pie
//                           data={memory}
//                           startAngle={180}
//                           endAngle={0}
//                           innerRadius={40}
//                           outerRadius={60}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {memory.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                           ))}
//                           <Label
//                             value={`${computeOverallMetricsDCM?.stats?.memoryUsage?.average ?? 0}`}
//                             position="center"
//                             style={{ fontSize: '15px', fontWeight: 'bold' }}
//                           />
//                         </Pie>
//                       </PieChart>
          
//                   </ResponsiveContainer>
//               </div>
                
//           </div>
//         </div>
        
//     </div>
//   )
// }

// export default Home


















// // import ChartBox from '../../components/ChartBox/ChartBox'
// // import BarChartBox from '../../components/BarChartBox/BarChartBox'
// // import TopBox from '../../components/TopBox/TopBox'
// // import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, data } from '../../data'
// // import './Home.css'
// // import PieChartBox from '../../components/PieChartBox/PieChartBox'
// // import BigChartBox from '../../components/BigChartBox/BigChartBox'
// /* <div className="box box1">
//   <TopBox />
// </div>
// <div className="box box2"><ChartBox {...chartBoxUser} /></div>
// <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
// <div className="box box4"><PieChartBox data={data} /></div>
// <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
// <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
// <div className="box box7"><BigChartBox /></div>
// <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
// <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div> */