import React from 'react'
import { AnalyticsPage } from '../../components/analytics/AnalyticsPage'

const Products = () => {
  return (
    <div className=''>
        <AnalyticsPage />
    </div>
  )
}

export default Products







































































// import { Cpu, HardDrive, Server } from "lucide-react";
// import HomeMetrisTop from "../../components/HomeMetricsTop/HomeMetrisTop";
// import { getServerMetrics, computeOverallMetrics } from "../../utils/calculations";
// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   CartesianGrid,
//   Legend,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
//   PieChart,
//   Cell,
//   Pie,
//   Label,
// } from "recharts";
// import { ResponsiveHeatMap } from "@nivo/heatmap";

// const Products = () => {
//   const [responseTimeUpTimeData, setResponseTimeUpTimeData] = useState([]);
//   const [summary, setSummary] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:3000/api/serve-health-responsetime-uptime"
//         );
//         const data = await response.json();
//         setResponseTimeUpTimeData(data);

//         // Compute summary statistics
//         const computedSummary = computeSummary(data);
//         setSummary(computedSummary);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const computeSummary = (data) => {
//     const servers = [...new Set(data.map((d) => d.serverName))];
//     return servers.map((serverName) => {
//       const serverData = data.filter((d) => d.serverName === serverName);
//       const responseTimes = serverData.map((d) => d.network_response_time);
//       const validTimes = responseTimes.filter((time) => typeof time === "number");

//       const total = validTimes.reduce((sum, val) => sum + val, 0);
//       const average = validTimes.length ? (total / validTimes.length).toFixed(2) : "N/A";
//       const max = validTimes.length ? Math.max(...validTimes) : "N/A";
//       const min = validTimes.length ? Math.min(...validTimes) : "N/A";
//       const uptimePercentage = validTimes.length
//         ? (((validTimes.length - validTimes.filter((val) => val === 0).length) /
//             validTimes.length) *
//             100).toFixed(2)
//         : "N/A";

//       return {
//         serverName,
//         averageResponseTime: average,
//         maxResponseTime: max,
//         minResponseTime: min,
//         uptimePercentage: `${uptimePercentage}%`,
//       };
//     });
//   };

  
//   const data = [
//     { value: 70 },
//     { value: 100 - 70 },
//   ];

//   const COLORS = ['orange', 'gray']; // Gauge color and background color

//   return (
//     <div className="text-center">
//       <p  className="text-black">Average CPU Usage</p>
//       <div className="text-center h-[200px]">
//         <ResponsiveContainer width="100%" height="80%">
//           <PieChart>
//               <Pie
//                 data={data}
//                 startAngle={180}
//                 endAngle={0}
//                 innerRadius={60}
//                 outerRadius={80}
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//                 <Label
//                   value={`70%`}
//                   position="center"
//                   style={{ fontSize: '18px', fontWeight: 'bold' }}
//                 />
//               </Pie>
//             </PieChart>

//         </ResponsiveContainer>
//     </div>
      
//     </div>
//   );
// };

// export default Products;
