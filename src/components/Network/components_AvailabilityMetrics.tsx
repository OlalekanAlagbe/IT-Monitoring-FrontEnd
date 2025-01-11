// import React from 'react'
// import { BranchData } from '../../types/network'

// interface AvailabilityMetricsProps {
//   data: BranchData[]
// }

// const AvailabilityMetrics: React.FC<AvailabilityMetricsProps> = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div className="bg-white p-4 rounded shadow">Loading availability metrics...</div>
//   }

//   const latestData = data[data.length - 1]

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-sm font-bold mb-4">Availability Metrics</h2>
//       <div className="flex justify-around">
//         <div>
//           <h3 className="">Uptime</h3>
//           <p className="text-sm">{latestData.metrics?.uptime_percentage?.toFixed(2) ?? 'N/A'}%</p>
//         </div>
//         <div>
//           <h3 className="font-bold">SLA Compliance</h3>
//           <div
//             className={`w-6 h-6 rounded-full ${
//               (latestData.metrics?.uptime_percentage ?? 0) >= 99.9 ? 'bg-green-500' : 'bg-red-500'
//             }`}
//           ></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AvailabilityMetrics


import React from 'react';
import { BranchData } from '../../types/network';
import { Clock, AlertTriangle } from 'lucide-react';

interface AvailabilityMetricsProps {
  data: BranchData[];
}

const AvailabilityMetrics: React.FC<AvailabilityMetricsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-gray-600 flex items-center space-x-2">
        <Clock className="w-5 h-5 animate-spin text-blue-500" />
        <span>Loading availability metrics...</span>
      </div>
    );
  }

  const latestData = data[data.length - 1];
  const uptime = latestData.metrics?.uptime_percentage ?? 0;
  const downtime = (100 - uptime).toFixed(2); // Calculate downtime percentage

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-sm font-semibold text-gray-800 mb-4 flex items-center space-x-2">
        {/* <Clock className="w-5 h-5 text-blue-600" /> */}
        <span>Availability Metrics</span>
      </h2>

      <div className="flex justify-between items-center">
        {/* Uptime Section */}
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="text-gray-700">Uptime</h3>
            <p className="text-gray-900 text-md font-semibold">
              {uptime.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Downtime Section */}
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-yellow-500" />
          <div>
            <h3 className="text-gray-700">Downtime</h3>
            <p className="text-yellow-600 text-md font-semibold">
              {downtime}% 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityMetrics;
