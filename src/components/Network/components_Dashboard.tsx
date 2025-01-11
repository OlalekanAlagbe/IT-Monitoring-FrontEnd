// import React, { useState } from 'react'
// // import NetworkPerformance from './components_NetworkPerformance'
// import DeviceHealth from './components_DeviceHealth'
// import TrafficMetrics from './components_TrafficMetrics'
// import { BranchData } from '../../types/network'
// import BandwidthChart from './BandwidthChart'
// import LatencyChart from './LatencyChart'
// import PacketLossChart from './PacketLossChart'

// interface DashboardProps {
//   data: BranchData[]
// }

// const Dashboard: React.FC<DashboardProps> = ({ data }) => {
//   const [selectedBranch, setSelectedBranch] = useState<string>('branch 1')

//   const filteredData = data.filter(
//     (item) => item.branch_id === selectedBranch
//   )

//   return (
//     <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div className="col-span-full">
//         <select
//           value={selectedBranch}
//           onChange={(e) => setSelectedBranch(e.target.value)}
//           className="mr-2 p-2 border rounded"
//         >
//           {/* <option value="all">All Branches</option> */}
//           {Array.from(new Set(data.map((item) => item.branch_id))).map((branch) => (
//             <option key={branch} value={branch}>
//               {branch.charAt(0).toUpperCase() + branch.slice(1).toLowerCase()}
//             </option>
//           ))}
//         </select>
//         {/* <select
//           value={selectedRouter}
//           onChange={(e) => setSelectedRouter(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="all">All Routers</option>
//           {Array.from(new Set(data.map((item) => item.router_id))).map((router) => (
//             <option key={router} value={router}>
//               {router}
//             </option>
//           ))}
//         </select> */}
//       </div>
//       <BandwidthChart data={filteredData} />
//       <DeviceHealth data={filteredData} />
//       <LatencyChart data={filteredData} />
//       <PacketLossChart data={filteredData} />
//       <TrafficMetrics data={filteredData} />
//     </div>
//   )
// }

// export default Dashboard



import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import DeviceHealth from './components_DeviceHealth';
import TrafficMetrics from './components_TrafficMetrics';
import { BranchData } from '../../types/network';
import BandwidthChart from './BandwidthChart';
import LatencyChart from './LatencyChart';
import PacketLossChart from './PacketLossChart';

interface DashboardProps {
  data: BranchData[];
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('branch 1');
  const [isLoading, setIsLoading] = useState(false);

  const filteredData = data.filter((item) => item.branch_id === selectedBranch);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true); // Set loading to true
    setSelectedBranch(e.target.value);

    // Simulate a loading delay (e.g., fetching new data)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after delay
    }, 300); // Adjust the delay as needed
  };

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-full">
        <select
          value={selectedBranch}
          onChange={handleBranchChange}
          className="mr-2 p-2 border rounded"
          disabled={isLoading} // Disable dropdown while loading
        >
          {Array.from(new Set(data.map((item) => item.branch_id))).map((branch) => (
            <option key={branch} value={branch}>
              {branch.charAt(0).toUpperCase() + branch.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
        {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />} {/* Show spinner */}
      </div>

      {isLoading ? (
        <div className="col-span-full flex justify-center items-center h-64">
          <p>Loading data...</p>
          <Loader2 className="w-4 h-4 ml-2 animate-spin" />
        </div>
      ) : (
        <>
          <BandwidthChart data={filteredData} />
          <DeviceHealth data={filteredData} />
          <LatencyChart data={filteredData} />
          <PacketLossChart data={filteredData} />
          <TrafficMetrics data={filteredData} />
        </>
      )}
    </div>
  );
};

export default Dashboard;