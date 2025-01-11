import React, { useEffect, useState } from "react";
import { Activity, Database, HardDrive, Network, Server } from 'lucide-react';
import "./Cpu.css";
import CpuServerBarChart from "../../components/CpuServerBarChart/CpuServerBarChart";
import CpuServerLineChart from "../../components/CpuServerLineChart/CpuServerLineChart";
import CpuServerPieChart from "../../components/CpuServerPieChart/CpuServerPieChart";

const Cpu = () => {
  const [data, setData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [currentServerIndex, setCurrentServerIndex] = useState(0);
  const [dataAvg, setDataAvg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });

  // Function to calculate averages
  const calculateAverages = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      return { cpuUsage: 0, diskUsage: 0, memoryUsage: 0 };
    }

    let totalCpu = 0;
    let totalDisk = 0;
    let totalMemory = 0;

    data.forEach((record) => {
      totalCpu += record.cpuUsage;
      totalDisk += record.diskUsage;
      totalMemory += record.memoryUsage;
    });

    const count = data.length;

    return {
      cpuUsage: (totalCpu / count).toFixed(2),
      diskUsage: (totalDisk / count).toFixed(2),
      memoryUsage: (totalMemory / count).toFixed(2),
    };
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/server-health");
        const result = await response.json();
        setData(result);

        // Filter data for each server
        const servers = ["Server-1", "Server-2", "Server-3", "Server-4", "Server-5"];
        const serverData = servers.map((serverName) =>
          result.filter((item) => item.serverName === serverName)
        );
        setServerData(serverData);

        // Calculate overall averages
        setDataAvg(calculateAverages(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleNextServer = () => {
    setCurrentServerIndex((prevIndex) =>
      prevIndex < serverData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousServer = () => {
    setCurrentServerIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : serverData.length - 1
    );
  };

  const currentServer = serverData[currentServerIndex];
  const currentServerAvg = calculateAverages(currentServer);

  return (
    <div className="cpu-dashboard">
      <h1 className="dashboard-title">CPU Monitoring Dashboard</h1>

      {/* Overall Averages Section */}
      <div className="dashboard-container">
        <div className="section overall-averages">
          <h2 className="section-title">
            <Server className="icon" /> Overall Averages
          </h2>
          <p>CPU Usage: {dataAvg.cpuUsage}%</p>
          <p>Disk Usage: {dataAvg.diskUsage}%</p>
          <p>Memory Usage: {dataAvg.memoryUsage}%</p>
        </div>

        {/* Current Server Section */}
        <div className="section current-server">
          <h2 className="section-title">
            <Server className="icon" /> Server-{currentServerIndex + 1} Averages
          </h2>
          <p>CPU Usage: {currentServerAvg.cpuUsage}%</p>
          <p>Disk Usage: {currentServerAvg.diskUsage}%</p>
          <p>Memory Usage: {currentServerAvg.memoryUsage}%</p>
        </div>
      </div>

      {/* Charts for Current Server */}
      <div className="">
        <h1>Server {currentServerIndex + 1} Analytics</h1>
        <div className="charts-grid">
          <div className="line">
            <CpuServerLineChart data={currentServer} />
          </div>
          <div className="bar">
            <CpuServerBarChart data={currentServer} />
          </div>
          <div className="pie">
            <CpuServerPieChart data={currentServer} />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-back" onClick={handlePreviousServer}>Back</button>
        <button className="btn btn-next" onClick={handleNextServer}>Next</button>
      </div>
    </div>
  );
};

export default Cpu;













// import React, { useEffect, useState } from "react";
// import { Activity, Database, HardDrive, Network, Server } from 'lucide-react'
// import "./Cpu.css";
// import CpuServerBarChart from "../../components/CpuServerBarChart/CpuServerBarChart";
// import CpuServerLineChart from "../../components/CpuServerLineChart/CpuServerLineChart";
// import CpuServerPieChart from "../../components/CpuServerPieChart/CpuServerPieChart";

// const Cpu = () => {
//   const [data, setData] = useState([]);
//   const [server1, setServer1] = useState([]);
//   const [server2, setServer2] = useState([]);
//   const [server3, setServer3] = useState([]);
//   const [server4, setServer4] = useState([]);
//   const [server5, setServer5] = useState([]);
//   const [dataAvg, setDataAvg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });
//   const [server1Avg, setServer1Avg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });
//   const [server2Avg, setServer2Avg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });
//   const [server3Avg, setServer3Avg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });
//   const [server4Avg, setServer4Avg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });
//   const [server5Avg, setServer5Avg] = useState({ cpuUsage: 0, diskUsage: 0, memoryUsage: 0 });

//   // Function to calculate averages
//   const calculateAverages = (data) => {
//     if (!Array.isArray(data) || data.length === 0) {
//       return { cpuUsage: 0, diskUsage: 0, memoryUsage: 0 };
//     }

//     let totalCpu = 0;
//     let totalDisk = 0;
//     let totalMemory = 0;

//     data.forEach((record) => {
//       totalCpu += record.cpuUsage;
//       totalDisk += record.diskUsage;
//       totalMemory += record.memoryUsage;
//     });

//     const count = data.length;

//     return {
//       cpuUsage: (totalCpu / count).toFixed(2),
//       diskUsage: (totalDisk / count).toFixed(2),
//       memoryUsage: (totalMemory / count).toFixed(2),
//     };
//   };

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/server-health");
//         const result = await response.json();
//         setData(result);

//         // Filter data for each server
//         const server1Data = result.filter((item) => item.serverName === "Server-1");
//         const server2Data = result.filter((item) => item.serverName === "Server-2");
//         const server3Data = result.filter((item) => item.serverName === "Server-3");
//         const server4Data = result.filter((item) => item.serverName === "Server-4");
//         const server5Data = result.filter((item) => item.serverName === "Server-5");

//         setServer1(server1Data);
//         setServer2(server2Data);
//         setServer3(server3Data);
//         setServer4(server4Data);
//         setServer5(server5Data);

//         // Calculate averages for each server
//         setServer1Avg(calculateAverages(server1Data));
//         setServer2Avg(calculateAverages(server2Data));
//         setServer3Avg(calculateAverages(server3Data));
//         setServer4Avg(calculateAverages(server4Data));
//         setServer5Avg(calculateAverages(server5Data));

//         // Calculate overall averages
//         setDataAvg(calculateAverages(result));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this runs only once on mount

//    return (
//     <div className="cpu-dashboard">
//       <h1 className="dashboard-title">CPU Monitoring Dashboard</h1>

//       {/* //Overall Averages Section  */}
//       <div className="dashboard-container">
//         <div className="section overall-averages">
//           <h2 className="section-title">
//             <Server className="icon" /> Overall Averages
//           </h2>
//           <p>CPU Usage: {dataAvg.cpuUsage}%</p>
//           <p>Disk Usage: {dataAvg.diskUsage}%</p>
//           <p>Memory Usage: {dataAvg.memoryUsage}%</p>
//         </div>

//         {/* Server-1 Section */}
//         <div className="section server-1">
//           <h2 className="section-title">
//             <Server className="icon" /> Server-1 Averages
//           </h2>
//           <p>CPU Usage: {server1Avg.cpuUsage}%</p>
//           <p>Disk Usage: {server1Avg.diskUsage}%</p>
//           <p>Memory Usage: {server1Avg.memoryUsage}%</p>
//         </div>

//         {/* Server-2 Section */}
//         <div className="section server-2">
//           <h2 className="section-title">
//             <HardDrive className="icon" /> Server-2 Averages
//           </h2>
//           <p>CPU Usage: {server2Avg.cpuUsage}%</p>
//           <p>Disk Usage: {server2Avg.diskUsage}%</p>
//           <p>Memory Usage: {server2Avg.memoryUsage}%</p>
//         </div>

//         {/* Server-3 Section */}
//         <div className="section server-3">
//           <h2 className="section-title">
//             <Server className="icon" /> Server-3 Averages
//           </h2>
//           <p>CPU Usage: {server3Avg.cpuUsage}%</p>
//           <p>Disk Usage: {server3Avg.diskUsage}%</p>
//           <p>Memory Usage: {server3Avg.memoryUsage}%</p>
//         </div>

//         {/* Server-4 Section */}
//         <div className="section server-4">
//           <h2 className="section-title">
//             <Server className="icon" /> Server-4 Averages
//           </h2>
//           <p>CPU Usage: {server4Avg.cpuUsage}%</p>
//           <p>Disk Usage: {server4Avg.diskUsage}%</p>
//           <p>Memory Usage: {server4Avg.memoryUsage}%</p>
//         </div>

//         {/* Server-5 Section */}
//         <div className="section server-5">
//           <h2 className="section-title">
//             <Server className="icon" /> Server-5 Averages
//           </h2>
//           <p>CPU Usage: {server5Avg.cpuUsage}%</p>
//           <p>Disk Usage: {server5Avg.diskUsage}%</p>
//           <p>Memory Usage: {server5Avg.memoryUsage}%</p>
//         </div>
//       </div>
//       <div className="charts-grid server1-grid">
//         <h1>Server 1 Analytics</h1>
//         <div className="line"><CpuServerLineChart data={server1} /></div>
//         <div className="bar"><CpuServerBarChart data={server1} /></div>
//         <div className="pie"><CpuServerPieChart data={server1} /></div>
//       </div>
//       <div className="charts-grid server1-grid">
//         <h1>Server 2 Analytics</h1>
//         <div className="line"><CpuServerLineChart data={server2} /></div>
//         <div className="bar"><CpuServerBarChart data={server2} /></div>
//         <div className="pie"><CpuServerPieChart data={server2} /></div>
//       </div>
//       <div className="charts-grid server1-grid">
//         <h1>Server 3 Analytics</h1>
//         <div className="line"><CpuServerLineChart data={server3} /></div>
//         <div className="bar"><CpuServerBarChart data={server3} /></div>
//         <div className="pie"><CpuServerPieChart data={server3} /></div>
//       </div>
//       <div className="charts-grid server1-grid">
//         <h1>Server 4 Analytics</h1>
//         <div className="line"><CpuServerLineChart data={server4} /></div>
//         <div className="bar"><CpuServerBarChart data={server4} /></div>
//         <div className="pie"><CpuServerPieChart data={server4} /></div>
//       </div>
//       <div className="charts-grid server1-grid">
//         <h1>Server 5 Analytics</h1>
//         <div className="line"><CpuServerLineChart data={server5 } /></div>
//         <div className="bar"><CpuServerBarChart data={server5 } /></div>
//         <div className="pie"><CpuServerPieChart data={server5 } /></div>
//       </div>
//             {/* Navigation Buttons */}

//       <div className="navigation-buttons">
//         <button onClick={handlePreviousServer}>Back</button>
//         <button onClick={handleNextServer}>Next</button>
//       </div>  
//     </div>
//   );
// };

// export default Cpu;
