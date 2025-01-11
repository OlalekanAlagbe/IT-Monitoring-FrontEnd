
// import React, { useEffect, useState } from 'react';
// import './ServerMemory.css';
// import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { MetricCard } from '../../components/MetricCard/MetricCard';
// import DoubleLineChart from '../../components/DoubleLineChart/DoubleLineChart';


// const ServerMemory = () => {
//   const [serversData, setServersData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Individual server states for raw data
//   const [server1, setServer1] = useState([]);
//   const [server2, setServer2] = useState([]);
//   const [server3, setServer3] = useState([]);
//   const [server4, setServer4] = useState([]);
//   const [server5, setServer5] = useState([]);

//   // Individual server states for display data
//   const [displayDataServer1, setDisplayDataServer1] = useState([]);
//   const [displayDataServer2, setDisplayDataServer2] = useState([]);
//   const [displayDataServer3, setDisplayDataServer3] = useState([]);
//   const [displayDataServer4, setDisplayDataServer4] = useState([]);
//   const [displayDataServer5, setDisplayDataServer5] = useState([]);

//   const [currentIndex, setCurrentIndex] = useState({
//     server1: 5,
//     server2: 5,
//     server3: 5,
//     server4: 5,
//     server5: 5,
//   });

//   // Fetch and process data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/server-memory-usage');
//         if (!response.ok) {
//           throw new Error('Failed to fetch server memory data.');
//         }
//         const rawData = await response.json();

//         // Sort data by timestamp
//         const sortedData = rawData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

//         // Group data by server
//         const groupedData = sortedData.reduce((acc, entry) => {
//           acc[entry.server] = acc[entry.server] || [];
//           acc[entry.server].push(entry);
//           return acc;
//         }, {});

//         setServersData(groupedData);

//         // Populate individual server states
//         setServer1(groupedData['server-1'] || []);
//         setServer2(groupedData['server-2'] || []);
//         setServer3(groupedData['server-3'] || []);
//         setServer4(groupedData['server-4'] || []);
//         setServer5(groupedData['server-5'] || []);

//         // Initialize display data with the first 5 entries for each server
//         setDisplayDataServer1(groupedData['server-1']?.slice(0, 5) || []);
//         setDisplayDataServer2(groupedData['server-2']?.slice(0, 5) || []);
//         setDisplayDataServer3(groupedData['server-3']?.slice(0, 5) || []);
//         setDisplayDataServer4(groupedData['server-4']?.slice(0, 5) || []);
//         setDisplayDataServer5(groupedData['server-5']?.slice(0, 5) || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Update display data for each server every minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Function to update display data for a specific server
//       const updateDisplayData = (server, setDisplayData, currentIndexKey) => {
//         const currentData = serversData[server] || [];
//         const currentIdx = currentIndex[currentIndexKey];

//         if (currentIdx < currentData.length) {
//           // Add the next data point and remove the first one
//           setDisplayData((prevData) => [...prevData.slice(1), currentData[currentIdx]]);
//           setCurrentIndex((prev) => ({
//             ...prev,
//             [currentIndexKey]: prev[currentIndexKey] + 1,
//           }));
//         } else {
//           // Reset to the first 5 items if we reach the end
//           setDisplayData(currentData.slice(0, 5));
//           setCurrentIndex((prev) => ({
//             ...prev,
//             [currentIndexKey]: 5,
//           }));
//         }
//       };

//       // Call the function for each server
//       updateDisplayData('server-1', setDisplayDataServer1, 'server1');
//       updateDisplayData('server-2', setDisplayDataServer2, 'server2');
//       updateDisplayData('server-3', setDisplayDataServer3, 'server3');
//       updateDisplayData('server-4', setDisplayDataServer4, 'server4');
//       updateDisplayData('server-5', setDisplayDataServer5, 'server5');


//       console.log('Display Data Server 1:', displayDataServer1);
//       // console.log('Display Data Server 2:', displayDataServer2);
//       // console.log('Display Data Server 3:', displayDataServer3);
//       // console.log('Display Data Server 4:', displayDataServer4);
//       // console.log('Display Data Server 5:', displayDataServer5);
//     }, 10000); // Update every minute

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [currentIndex, serversData]);

  

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Log individual server display data for testing
//  console.log("Component remounting")

//   return (
//     <div className="server-memory-container">
//       <h1>Server Memory Data</h1>
//       <div className="metricCard-container metricCard">
//         <MetricCard data={displayDataServer1} />
//         <MetricCard data={displayDataServer2} />
//         <MetricCard data={displayDataServer3} />
//         <MetricCard data={displayDataServer4} />
//         <MetricCard data={displayDataServer5} />
//       </div>
//       <div className='double-line-chart'>
//         <DoubleLineChart data={displayDataServer1} />
//         <DoubleLineChart data={displayDataServer2} />
//         <DoubleLineChart data={displayDataServer3} />
//         <DoubleLineChart data={displayDataServer4} />
//         <DoubleLineChart data={displayDataServer5} />
//       </div>
      
      
//     </div>
//   );
// };

// export default ServerMemory;

import React, { useEffect, useState } from 'react';
import './ServerMemory.css';
import { MetricCard } from '../../components/MetricCard/MetricCard';
import DoubleLineChart from '../../components/DoubleLineChart/DoubleLineChart';
import emailjs from 'emailjs-com'; // Import EmailJS

const ServerMemory = () => {
  const [serversData, setServersData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Individual server states for raw data
  const [server1, setServer1] = useState([]);
  const [server2, setServer2] = useState([]);
  const [server3, setServer3] = useState([]);
  const [server4, setServer4] = useState([]);
  const [server5, setServer5] = useState([]);

  // Individual server states for display data
  const [displayDataServer1, setDisplayDataServer1] = useState([]);
  const [displayDataServer2, setDisplayDataServer2] = useState([]);
  const [displayDataServer3, setDisplayDataServer3] = useState([]);
  const [displayDataServer4, setDisplayDataServer4] = useState([]);
  const [displayDataServer5, setDisplayDataServer5] = useState([]);

  const [currentIndex, setCurrentIndex] = useState({
    server1: 5,
    server2: 5,
    server3: 5,
    server4: 5,
    server5: 5,
  });

  // Fetch and process data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/server-memory-usage');
        if (!response.ok) {
          throw new Error('Failed to fetch server memory data.');
        }
        const rawData = await response.json();

        // Sort data by timestamp
        const sortedData = rawData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

        // Group data by server
        const groupedData = sortedData.reduce((acc, entry) => {
          acc[entry.server] = acc[entry.server] || [];
          acc[entry.server].push(entry);
          return acc;
        }, {});

        setServersData(groupedData);

        // Populate individual server states
        setServer1(groupedData['server-1'] || []);
        setServer2(groupedData['server-2'] || []);
        setServer3(groupedData['server-3'] || []);
        setServer4(groupedData['server-4'] || []);
        setServer5(groupedData['server-5'] || []);

        // Initialize display data with the first 5 entries for each server
        setDisplayDataServer1(groupedData['server-1']?.slice(0, 5) || []);
        setDisplayDataServer2(groupedData['server-2']?.slice(0, 5) || []);
        setDisplayDataServer3(groupedData['server-3']?.slice(0, 5) || []);
        setDisplayDataServer4(groupedData['server-4']?.slice(0, 5) || []);
        setDisplayDataServer5(groupedData['server-5']?.slice(0, 5) || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update display data for each server every minute
  useEffect(() => {
    const interval = setInterval(() => {
      // Function to update display data for a specific server
      const updateDisplayData = (server, setDisplayData, currentIndexKey) => {
        const currentData = serversData[server] || [];
        const currentIdx = currentIndex[currentIndexKey];

        if (currentIdx < currentData.length) {
          // Add the next data point and remove the first one
          setDisplayData((prevData) => [...prevData.slice(1), currentData[currentIdx]]);
          setCurrentIndex((prev) => ({
            ...prev,
            [currentIndexKey]: prev[currentIndexKey] + 1,
          }));
        } else {
          // Reset to the first 5 items if we reach the end
          setDisplayData(currentData.slice(0, 5));
          setCurrentIndex((prev) => ({
            ...prev,
            [currentIndexKey]: 5,
          }));
        }
      };

      // Call the function for each server
      updateDisplayData('server-1', setDisplayDataServer1, 'server1');
      updateDisplayData('server-2', setDisplayDataServer2, 'server2');
      updateDisplayData('server-3', setDisplayDataServer3, 'server3');
      updateDisplayData('server-4', setDisplayDataServer4, 'server4');
      updateDisplayData('server-5', setDisplayDataServer5, 'server5');

      // Check memory usage and send alert email
      checkMemoryUsageAndSendAlert();
    }, 10000000); // Update every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex, serversData]);

  // Function to check memory usage and send alert email
  const checkMemoryUsageAndSendAlert = async () => {
    const servers = [
      { name: 'server-1', data: displayDataServer1 },
      { name: 'server-2', data: displayDataServer2 },
      { name: 'server-3', data: displayDataServer3 },
      { name: 'server-4', data: displayDataServer4 },
      { name: 'server-5', data: displayDataServer5 },
    ];

    for (const server of servers) {
      const latestData = server.data[server.data.length - 1];
      if (latestData && latestData.memory_usage_percent > 60) {
        // Send alert email using EmailJS
        try {
          await emailjs.send('service_1e4bkve', 'template_fks25an', {
            from_name: 'IT Monitor Server', // Sender name
            to_name: 'Admin', // Recipient name
            server_name: server.name, // Server name
            memory_usage: latestData.memory_usage_percent, // Memory usage percentage
            threshold: 60, // Threshold value
            timestamp: latestData.timestamp, // Timestamp
            reply_to: 'alagbeolalekan1000@gmail.com', // Reply-to email
          }, '6ncHIVPL78-9GFdX9');
          console.log(`Alert email sent for ${server.name}`);
        } catch (error) {
          console.error(`Failed to send alert email for ${server.name}:`, error);
        }
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="server-memory-container">
      <h1>Server Memory Data</h1>
      <div className="metricCard-container metricCard">
        <MetricCard data={displayDataServer1} />
        <MetricCard data={displayDataServer2} />
        <MetricCard data={displayDataServer3} />
        <MetricCard data={displayDataServer4} />
        <MetricCard data={displayDataServer5} />
      </div>
      <div className='double-line-chart'>
        <DoubleLineChart data={displayDataServer1} />
        <DoubleLineChart data={displayDataServer2} />
        <DoubleLineChart data={displayDataServer3} />
        <DoubleLineChart data={displayDataServer4} />
        <DoubleLineChart data={displayDataServer5} />
      </div>
    </div>
  );
};

export default ServerMemory;