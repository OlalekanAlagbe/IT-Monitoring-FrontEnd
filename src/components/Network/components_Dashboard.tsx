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



// import React, { useState } from 'react';
// import { Loader2 } from 'lucide-react';
// import DeviceHealth from './components_DeviceHealth';
// import TrafficMetrics from './components_TrafficMetrics';
// import { BranchData } from '../../types/network';
// import BandwidthChart from './BandwidthChart';
// import LatencyChart from './LatencyChart';
// import PacketLossChart from './PacketLossChart';

// interface DashboardProps {
//   data: BranchData[];
// }

// interface ISP {
//   name: string;
//   uptime: string;
//   downtime: string;
// }

// const Dashboard: React.FC<DashboardProps> = ({ data }) => {
//   const [selectedBranch, setSelectedBranch] = useState<string>('branch 1');
//   const [selectedISP, setSelectedISP] = useState<string>('MTN');
//   const [isLoading, setIsLoading] = useState(false);

//   const isps: ISP[] = [
//     { name: 'MTN', uptime: '99.9%', downtime: '0.1%' },
//     { name: 'Airtel', uptime: '99.8%', downtime: '0.2%' },
//     { name: 'Spectranet', uptime: '99.7%', downtime: '0.3%' },
//   ];
//   const filteredData = data.filter((item) => item.branch_id === selectedBranch);

//   const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setIsLoading(true); // Set loading to true
//     setSelectedBranch(e.target.value);

//     // Simulate a loading delay (e.g., fetching new data)
//     setTimeout(() => {
//       setIsLoading(false); // Set loading to false after delay
//     }, 300); // Adjust the delay as needed
//   };
//   const handleISPChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedISP(e.target.value);
//   };

//   return (
//     <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">

      
//       <div className="col-span-full">
//         <select
//           value={selectedBranch}
//           onChange={handleBranchChange}
//           className="mr-2 p-2 border rounded"
//           disabled={isLoading} // Disable dropdown while loading
//         >
//           {Array.from(new Set(data.map((item) => item.branch_id))).map((branch) => (
//             <option key={branch} value={branch}>
//               {branch.charAt(0).toUpperCase() + branch.slice(1).toLowerCase()}
//             </option>
//           ))}
//         </select>
//         {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />} {/* Show spinner */}
//       </div>

//       {isLoading ? (
//         <div className="col-span-full flex justify-center items-center h-64">
//           <p>Loading data...</p>
//           <Loader2 className="w-4 h-4 ml-2 animate-spin" />
//         </div>
//       ) : (
//         <>
//           <BandwidthChart data={filteredData} />
//           <DeviceHealth data={filteredData} />
//           <LatencyChart data={filteredData} />
//           <PacketLossChart data={filteredData} />
//           <TrafficMetrics data={filteredData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useState } from 'react';
// import { Loader2, Wifi, WifiOff, Clock, AlertCircle } from 'lucide-react';
// import DeviceHealth from './components_DeviceHealth';
// import TrafficMetrics from './components_TrafficMetrics';
// import { BranchData } from '../../types/network';
// import BandwidthChart from './BandwidthChart';
// import LatencyChart from './LatencyChart';
// import PacketLossChart from './PacketLossChart';
// import AvailabilityMetrics from './components_AvailabilityMetrics';

// interface DashboardProps {
//   data: BranchData[];
// }

// interface ISP {
//   name: string;
//   uptime: string;
//   downtime: string;
// }

// const Dashboard: React.FC<DashboardProps> = ({ data }) => {
//   const [selectedBranch, setSelectedBranch] = useState<string>('branch 1');
//   const [selectedISP, setSelectedISP] = useState<string>('MTN');
//   const [isLoading, setIsLoading] = useState(false);

//   const isps: ISP[] = [
//     { name: 'MTN', uptime: '99.9%', downtime: '0.1%' },
//     { name: 'Airtel', uptime: '99.8%', downtime: '0.2%' },
//     { name: 'Spectranet', uptime: '99.7%', downtime: '0.3%' },
//   ];

//   const filteredData = data.filter((item) => item.branch_id === selectedBranch);
//   const selectedISPData = isps.find((isp) => isp.name === selectedISP);

//   const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setIsLoading(true);
//     setSelectedBranch(e.target.value);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleISPChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedISP(e.target.value);
//   };

//   return (
//     <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div className="col-span-full flex space-x-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Select ISP</label>
//           <select
//             value={selectedISP}
//             onChange={handleISPChange}
//             className="mr-2 p-2 border rounded"
//             disabled={isLoading}
//           >
//             {isps.map((isp) => (
//               <option key={isp.name} value={isp.name}>
//                 {isp.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Select Branch</label>
//           <select
//             value={selectedBranch}
//             onChange={handleBranchChange}
//             className="mr-2 p-2 border rounded"
//             disabled={isLoading}
//           >
//             {Array.from(new Set(data.map((item) => item.branch_id))).map((branch) => (
//               <option key={branch} value={branch}>
//                 {branch.charAt(0).toUpperCase() + branch.slice(1).toLowerCase()}
//               </option>
//             ))}
//           </select>
//           {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
//         </div>
//       </div>

//       <div className="col-span-full flex space-x-4">
//         <div className="flex items-center space-x-2">
//           <Wifi className="w-5 h-5 text-green-500" />
//           <span>Uptime: {selectedISPData?.uptime}</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <WifiOff className="w-5 h-5 text-red-500" />
//           <span>Downtime: {selectedISPData?.downtime}</span>
//         </div>
//       </div>

//       {isLoading ? (
//         <div className="col-span-full flex justify-center items-center h-64">
//           <p>Loading data...</p>
//           <Loader2 className="w-4 h-4 ml-2 animate-spin" />
//         </div>
//       ) : (
//         <>
//           <BandwidthChart data={filteredData} />
//           <div className="flex flex-col gap-5">
//             <AvailabilityMetrics data={data} />
//             <DeviceHealth data={filteredData} />
//           </div>
//           <LatencyChart data={filteredData} />
//           <PacketLossChart data={filteredData} />
//           <TrafficMetrics data={filteredData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

































// import React, { useState } from 'react';
// import { Loader2, Wifi, WifiOff, Clock, AlertCircle } from 'lucide-react';
// import DeviceHealth from './components_DeviceHealth';
// import TrafficMetrics from './components_TrafficMetrics';
// import { BranchData } from '../../types/network';
// import BandwidthChart from './BandwidthChart';
// import LatencyChart from './LatencyChart';
// import PacketLossChart from './PacketLossChart';
// import AvailabilityMetrics from './components_AvailabilityMetrics';

// interface DashboardProps {
//   data: BranchData[];
// }

// interface ISP {
//   name: string;
//   uptime: string;
//   downtime: string;
// }

// const Dashboard: React.FC<DashboardProps> = ({ data }) => {
//   const [selectedBranchIndex, setSelectedBranchIndex] = useState<number>(0); // Use index instead of branch name
//   const [selectedISP, setSelectedISP] = useState<string>('MTN');
//   const [isLoading, setIsLoading] = useState(false);

//   const isps: ISP[] = [
//     { name: 'MTN', uptime: '99.9%', downtime: '0.1%' },
//     { name: 'Airtel', uptime: '99.8%', downtime: '0.2%' },
//     { name: 'Spectranet', uptime: '99.7%', downtime: '0.3%' },
//   ];

//   // Static array of GTB branches
//   const gtbBranches: string[] = [
//     'GTB Victoria Island Branch, Lagos',
//     'GTB Ikeja Branch, Lagos',
//     'GTB Abuja Central Branch, Abuja',
//     'GTB Port Harcourt Branch, Rivers',
//     'GTB Kano Branch, Kano',
//     'GTB Ibadan Branch, Oyo',
//     'GTB Enugu Branch, Enugu',
//     'GTB Benin Branch, Edo',
//     'GTB Surulere Branch, Lagos',
//     'GTB Warri Branch, Delta',
//   ];

//   // Map the selected branch index to the corresponding branch_id in the data
//   const selectedBranchId = data[selectedBranchIndex]?.branch_id || '';
//   const filteredData = data.filter((item) => item.branch_id === selectedBranchId);
//   const selectedISPData = isps.find((isp) => isp.name === selectedISP);

//   const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setIsLoading(true);
//     const selectedIndex = Number(e.target.value); // Get the selected index
//     setSelectedBranchIndex(selectedIndex);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleISPChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedISP(e.target.value);
//   };

//   return (
//     <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div className="col-span-full flex space-x-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Select ISP</label>
//           <select
//             value={selectedISP}
//             onChange={handleISPChange}
//             className="mr-2 p-2 border rounded"
//             disabled={isLoading}
//           >
//             {isps.map((isp) => (
//               <option key={isp.name} value={isp.name}>
//                 {isp.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Select Branch</label>
//           <select
//             value={selectedBranchIndex}
//             onChange={handleBranchChange}
//             className="mr-2 p-2 border rounded"
//             disabled={isLoading}
//           >
//             {gtbBranches.map((branch, index) => (
//               <option key={index} value={index}>
//                 {branch}
//               </option>
//             ))}
//           </select>
//           {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
//         </div>
//       </div>

//       <div className="col-span-full flex space-x-4">
//         <div className="flex items-center space-x-2">
//           <Wifi className="w-5 h-5 text-green-500" />
//           <span>Uptime: {selectedISPData?.uptime}</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <WifiOff className="w-5 h-5 text-red-500" />
//           <span>Downtime: {selectedISPData?.downtime}</span>
//         </div>
//       </div>

//       {isLoading ? (
//         <div className="col-span-full flex justify-center items-center h-64">
//           <p>Loading data...</p>
//           <Loader2 className="w-4 h-4 ml-2 animate-spin" />
//         </div>
//       ) : (
//         <>
//           <BandwidthChart data={filteredData} />
//           <div className="flex flex-col gap-5">
//             <AvailabilityMetrics data={data} />
//             <DeviceHealth data={filteredData} />
//           </div>
//           <LatencyChart data={filteredData} />
//           <PacketLossChart data={filteredData} />
//           <TrafficMetrics data={filteredData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { Loader2, Wifi, WifiOff } from 'lucide-react';
import DeviceHealth from './components_DeviceHealth';
import TrafficMetrics from './components_TrafficMetrics';
import { BranchData } from '../../types/network';
import BandwidthChart from './BandwidthChart';
import LatencyChart from './LatencyChart';
import PacketLossChart from './PacketLossChart';
import AvailabilityMetrics from './components_AvailabilityMetrics';

interface DashboardProps {
  data: BranchData[];
}

interface ISP {
  name: string;
  uptime: string;
  downtime: string;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState<number>(0); // Use index instead of branch name
  const [selectedISP, setSelectedISP] = useState<string>('MTN');
  const [isLoading, setIsLoading] = useState(false);

  const isps: ISP[] = [
    { name: 'MTN', uptime: '99.9%', downtime: '0.1%' },
    { name: 'Airtel', uptime: '99.8%', downtime: '0.2%' },
    { name: 'Spectranet', uptime: '99.7%', downtime: '0.3%' },
  ];

  // Static array of GTB branches
  const gtbBranches: string[] = [
    'GTB Victoria Island Branch, Lagos',
    'GTB Ikeja Branch, Lagos',
    'GTB Abuja Central Branch, Abuja',
    'GTB Port Harcourt Branch, Rivers',
    'GTB Kano Branch, Kano',
    'GTB Ibadan Branch, Oyo',
    'GTB Enugu Branch, Enugu',
    'GTB Benin Branch, Edo',
    'GTB Surulere Branch, Lagos',
    'GTB Warri Branch, Delta',
  ];

  // Map branches to ISPs
  const branchToISP: { [key: number]: string } = {
    0: 'MTN',
    1: 'MTN',
    2: 'MTN',
    3: 'Airtel',
    4: 'Airtel',
    5: 'Airtel',
    6: 'Spectranet',
    7: 'Spectranet',
    8: 'Spectranet',
    9: 'Spectranet',
  };

  // Filter branches based on selected ISP
  const filteredBranches = gtbBranches.filter((_, index) => branchToISP[index] === selectedISP);

  // Map the selected branch index to the corresponding branch_id in the data
  const selectedBranchId = data[selectedBranchIndex]?.branch_id || '';
  const filteredData = data.filter((item) => item.branch_id === selectedBranchId);
  const selectedISPData = isps.find((isp) => isp.name === selectedISP);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const selectedIndex = Number(e.target.value); // Get the selected index
    setSelectedBranchIndex(selectedIndex);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleISPChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedISP(e.target.value);
    setSelectedBranchIndex(0); // Reset branch selection when ISP changes
  };

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-full flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select ISP</label>
          <select
            value={selectedISP}
            onChange={handleISPChange}
            className="mr-2 p-2 border rounded"
            disabled={isLoading}
          >
            {isps.map((isp) => (
              <option key={isp.name} value={isp.name}>
                {isp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Branch</label>
          <select
            value={selectedBranchIndex}
            onChange={handleBranchChange}
            className="mr-2 p-2 border rounded"
            disabled={isLoading}
          >
            {filteredBranches.map((branch, index) => (
              <option key={index} value={gtbBranches.indexOf(branch)}>
                {branch}
              </option>
            ))}
          </select>
          {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
        </div>
      </div>

      <div className="col-span-full flex space-x-4">
        <div className="flex items-center space-x-2">
          <Wifi className="w-5 h-5 text-green-500" />
          <span>Uptime: {selectedISPData?.uptime}</span>
        </div>
        <div className="flex items-center space-x-2">
          <WifiOff className="w-5 h-5 text-red-500" />
          <span>Downtime: {selectedISPData?.downtime}</span>
        </div>
      </div>

      {isLoading ? (
        <div className="col-span-full flex justify-center items-center h-64">
          <p>Loading data...</p>
          <Loader2 className="w-4 h-4 ml-2 animate-spin" />
        </div>
      ) : (
        <>
          <BandwidthChart data={filteredData} />
          <div className="flex flex-col gap-5">
            <AvailabilityMetrics data={data} />
            <DeviceHealth data={filteredData} />
          </div>
          <LatencyChart data={filteredData} />
          <PacketLossChart data={filteredData} />
          <TrafficMetrics data={filteredData} />
        </>
      )}

      {/* ISP-Branch Summary Table */}
      <div className="col-span-full">
        <h2 className="text-sm font-semibold mb-4">ISP-Branch Summary</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#DD4F05] text-white">
              <th className="p-2 border border-gray-300">ISP</th>
              <th className="p-2 border border-gray-300">Branches</th>
            </tr>
          </thead>
          <tbody>
            {isps.map((isp) => (
              <tr key={isp.name}>
                <td className="p-2 border border-gray-300">{isp.name}</td>
                <td className="p-2 border border-gray-300">
                  {gtbBranches
                    .filter((_, index) => branchToISP[index] === isp.name)
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;