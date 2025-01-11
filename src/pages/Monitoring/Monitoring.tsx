import React from 'react'
import { Dashboard } from '../../components/Dashboard'
import { Toaster } from 'react-hot-toast'

const Monitoring = () => {
  return (
    <div className='text-black'>
      <Dashboard />
      <Toaster position="top-right" />
    </div>
  )
}

export default Monitoring
















































// import {TrendingUp,TrendingDown,Activity,AlertCircle, Cpu, HardDrive, Memory, Server } from 'lucide-react';
// import HomeMetrisTop from '../../components/HomeMetricsTop/HomeMetrisTop';
// // import {serveDataResponseTimeDownTime} from '../../data'
// import {getServerMetrics,computeOverallMetrics,getServerMetrics2,computeOverallMetrics2} from '../../utils/calculations'
// import './Monitoring.css'
// import { useEffect, useState } from 'react';
// import { Area, AreaChart, CartesianGrid, Cell, Label, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const Monitoring = () => {

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

// export default Monitoring