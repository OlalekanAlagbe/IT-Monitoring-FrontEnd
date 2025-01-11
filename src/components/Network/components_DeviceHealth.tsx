// import React from 'react'
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
// import { BranchData } from '../types/types'

// interface DeviceHealthProps {
//   data: BranchData[]
// }

// const DeviceHealth: React.FC<DeviceHealthProps> = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div className="bg-white p-4 rounded shadow">Loading device health data...</div>
//   }

//   const latestData = data[data.length - 1]

//   const cpuData = [
//     { name: 'Used', value: latestData.metrics?.cpu_usage_percentage ?? 0 },
//     { name: 'Free', value: 100 - (latestData.metrics?.cpu_usage_percentage ?? 0) },
//   ]

//   const memoryData = [
//     { name: 'Used', value: latestData.metrics?.memory_usage_percentage ?? 0 },
//     { name: 'Free', value: 100 - (latestData.metrics?.memory_usage_percentage ?? 0) },
//   ]

//   const COLORS = ['#0088FE', '#00C49F']

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Device Health</h2>
//       <div className="flex justify-around">
//         <div>
//           <h3 className="text-center">CPU Usage</h3>
//           <ResponsiveContainer width={100} height={100}>
//             <PieChart>
//               <Pie data={cpuData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
//                 {cpuData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <p className="text-center">{latestData.metrics?.cpu_usage_percentage?.toFixed(2) ?? 'N/A'}%</p>
//         </div>
//         <div>
//           <h3 className="text-center">Memory Usage</h3>
//           <ResponsiveContainer width={100} height={100}>
//             <PieChart>
//               <Pie data={memoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#82ca9d">
//                 {memoryData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <p className="text-center">{latestData.metrics?.memory_usage_percentage?.toFixed(2) ?? 'N/A'}%</p>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h3 className="font-bold">Interface Status</h3>
//         <p>{latestData.metrics?.interface_status ?? 'Unknown'}</p>
//       </div>
//     </div>
//   )
// }

// export default DeviceHealth

import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'
import { FaMicrochip, FaMemory, FaNetworkWired } from 'react-icons/fa'
import AvailabilityMetrics from './components_AvailabilityMetrics'
import { generateSyntheticData } from '../../utils/network_dataGenerator'

interface DeviceHealthProps {
  data: BranchData[]
}

const DeviceHealth: React.FC<DeviceHealthProps> = ({  }) => {

    const [data, setData] = useState<BranchData[]>([])
  
    useEffect(() => {
      // Initial data load
      setData(generateSyntheticData())
  
      // Simulate real-time updates
      const interval = setInterval(() => {
        setData(generateSyntheticData())
      }, 5000) // Update every 5 seconds
  
      return () => clearInterval(interval)
    }, [])
    
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading device health data...</div>
  }

  const latestData = data[data.length - 1]

  const cpuData = [
    { name: 'Used', value: latestData.metrics?.cpu_usage_percentage ?? 0 },
    { name: 'Free', value: 100 - (latestData.metrics?.cpu_usage_percentage ?? 0) },
  ]

  const memoryData = [
    { name: 'Used', value: latestData.metrics?.memory_usage_percentage ?? 0 },
    { name: 'Free', value: 100 - (latestData.metrics?.memory_usage_percentage ?? 0) },
  ]

  const COLORS = ['#DD4F05', '#00C49F'] // #DD4F05 for Used, #00C49F for Free

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FaNetworkWired className="mr-2 text-teal-500" /> Device Health
      </h3>
      <div className="flex justify-around">
        {/* CPU Usage */}
        <div className="text-center">
          <h3 className="text-xs font-semibold flex items-center justify-center mb-2">
            <FaMicrochip className="mr-2" /> CPU Usage
          </h3>
          <div className="flex items-center">
            <ResponsiveContainer width={200} height={150}>
              <PieChart>
                <Pie
                  data={cpuData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  innerRadius={20}
                  fill="#8884d8"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {cpuData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-black ml-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-[#DD4F05] mr-2"></div>
                <span className="text-xs">Used</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00C49F] mr-2"></div>
                <span className="text-xs">Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="text-center">
          <h3 className="text-xs font-semibold flex items-center justify-center mb-2">
            <FaMemory className="mr-2" /> Memory Usage
          </h3>
          <div className="flex items-center">
            <ResponsiveContainer width={200} height={150}>
              <PieChart>
                <Pie
                  data={memoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  innerRadius={20}
                  fill="#82ca9d"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {memoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="ml-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-[#DD4F05] mr-2"></div>
                <span className="text-xs">Used</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00C49F] mr-2"></div>
                <span className="text-xs">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Status */}
      <AvailabilityMetrics data={data}/>
    </div>
  )
}

export default DeviceHealth