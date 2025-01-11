
 //Calculates server metrics for a specific server//Working with data that.
 //Structure expected is
 /* {
      "_id": "676674a5a121b1945a8b74af",
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-1",
      "network_response_time": 125,
      "uptime": 99.98,
      "status": "online"
    }*/

export const getServerMetrics = (data, serverName) => {
  // Filter data for the specified server
  const serverData = data.filter(item => item.serverName === serverName);

  if (serverData.length === 0) {
    return {
      serverData: [],
      averageUptime: 0,
      averageResponseTime: 0,
      onlineCount: 0,
      offlineCount: 0,
      maxUptime: 0,
      minUptime: 0,
      maxResponseTime: 0,
      minResponseTime: 0,
    };
  }

  const totalEntries = serverData.length;

  // Calculate averages
  const averageUptime =
    serverData.reduce((sum, item) => sum + item.uptime, 0) / totalEntries;
  const averageResponseTime =
    serverData.reduce((sum, item) => sum + item.network_response_time, 0) /
    totalEntries;

  // Count online and offline statuses
  const onlineCount = serverData.filter(item => item.status === "online").length;
  const offlineCount = serverData.filter(item => item.status === "offline").length;

  // Find max and min values
  const maxUptime = Math.max(...serverData.map(item => item.uptime));
  const minUptime = Math.min(...serverData.map(item => item.uptime));
  const maxResponseTime = Math.max(
    ...serverData.map(item => item.network_response_time)
  );
  const minResponseTime = Math.min(
    ...serverData.map(item => item.network_response_time)
  );

  // Return the metrics
  return {
    serverData,
    averageUptime: averageUptime.toFixed(2), // Rounded to 2 decimal places
    averageResponseTime: averageResponseTime.toFixed(2), // Rounded to 2 decimal places
    onlineCount,
    offlineCount,
    maxUptime,
    minUptime,
    maxResponseTime,
    minResponseTime,
  };
};



export function computeOverallMetrics(data) {
  if (!data || data.length === 0) {
    return {
      avgResponseTime: 0,
      avgUptime: 0,
      totalOnlineCount: 0,
      totalOfflineCount: 0,
      maxResponseTime: 0,
      minResponseTime: 0,
      maxUptime: 0,
      minUptime: 0,
    };
  }

  let totalResponseTime = 0;
  let totalUptime = 0;
  let totalOnlineCount = 0;
  let totalOfflineCount = 0;
  let maxResponseTime = -Infinity;
  let minResponseTime = Infinity;
  let maxUptime = -Infinity;
  let minUptime = Infinity;

  data.forEach(({ network_response_time, uptime, status }) => {
    totalResponseTime += network_response_time;
    totalUptime += uptime;
    totalOnlineCount += status === "online" ? 1 : 0;
    totalOfflineCount += status === "offline" ? 1 : 0;

    maxResponseTime = Math.max(maxResponseTime, network_response_time);
    minResponseTime = Math.min(minResponseTime, network_response_time);

    maxUptime = Math.max(maxUptime, uptime);
    minUptime = Math.min(minUptime, uptime);
  });

  const avgResponseTime = (totalResponseTime / data.length).toFixed(2);
  const avgUptime = (totalUptime / data.length).toFixed(2);

  return {
    avgResponseTime,
    avgUptime,
    totalOnlineCount,
    totalOfflineCount,
    maxResponseTime,
    minResponseTime,
    maxUptime,
    minUptime,
  };
}









 //Calculates server metrics for a specific server//Working with data that.
 //Structure expected is
//  {
//   "_id": "676674a5a121b1945a8b74af",
//   "timestamp": "2024-06-17 10:30:00",
//   "serverName": "Server-1",
//   "cpuUsage": 53,
//   "diskUsage": 63,
//   "memoryUsage": 73
//   }


export  function getServerMetrics2(data, serverName) {
  // Filter the data for the specified server
  const serverData = data.filter((entry) => entry.serverName === serverName);

  if (serverData.length === 0) {
    return { message: `No data found for server: ${serverName}` };
  }

  // Helper function to calculate average
  const calculateAverage = (values) =>
    values.reduce((sum, val) => sum + val, 0) / values.length;

  // Extract metrics for cpuUsage, diskUsage, and memoryUsage
  const cpuUsageValues = serverData.map((entry) => entry.cpuUsage);
  const diskUsageValues = serverData.map((entry) => entry.diskUsage);
  const memoryUsageValues = serverData.map((entry) => entry.memoryUsage);

  // Calculate averages, max, and min
  return {
    serverData,
    cpuUsage: {
      average: calculateAverage(cpuUsageValues),
      max: Math.max(...cpuUsageValues),
      min: Math.min(...cpuUsageValues),
    },
    diskUsage: {
      average: calculateAverage(diskUsageValues),
      max: Math.max(...diskUsageValues),
      min: Math.min(...diskUsageValues),
    },
    memoryUsage: {
      average: calculateAverage(memoryUsageValues),
      max: Math.max(...memoryUsageValues),
      min: Math.min(...memoryUsageValues),
    },
  };
}




//Get all the statistics of the data

export function computeOverallMetrics2(data) {
  if (data.length === 0) {
    return { message: "No data provided", data: [] };
  }

  // Helper function to calculate average
  const calculateAverage = (values) =>
    values.reduce((sum, val) => sum + val, 0) / values.length;

  // Extract metrics for cpuUsage, diskUsage, and memoryUsage
  const cpuUsageValues = data.map((entry) => entry.cpuUsage);
  const diskUsageValues = data.map((entry) => entry.diskUsage);
  const memoryUsageValues = data.map((entry) => entry.memoryUsage);

  // Calculate averages, max, and min
  return {
    stats: {
      cpuUsage: {
        average: calculateAverage(cpuUsageValues),
        max: Math.max(...cpuUsageValues),
        min: Math.min(...cpuUsageValues),
      },
      diskUsage: {
        average: calculateAverage(diskUsageValues),
        max: Math.max(...diskUsageValues),
        min: Math.min(...diskUsageValues),
      },
      memoryUsage: {
        average: calculateAverage(memoryUsageValues),
        max: Math.max(...memoryUsageValues),
        min: Math.min(...memoryUsageValues),
      },
    },
    data, // Include the original data
  };
}












































// export const calculateStats = (data, metric: 'cpuUsage' | 'diskUsage' | 'memoryUsage') => {
//   const values = data.map(item => item[metric]);
//   const avg = values.reduce((a, b) => a + b, 0) / values.length;
//   const max = Math.max(...values);
//   const min = Math.min(...values);
  

//   return {
//     average: Number(avg.toFixed(2)),
//     maximum: max,
//     minimum: min,
//   };
// };

// export const calculateServerStats = (data) => {
//   const servers = [...new Set(data.map(item => item.serverName))];
  
//   return servers.map(server => {
//     const serverData = data.filter(item => item.serverName === server);
//     return {
//       serverName: server,
//       cpu: calculateStats(serverData, 'cpuUsage'),
//       disk: calculateStats(serverData, 'diskUsage'),
//       memory: calculateStats(serverData, 'memoryUsage')
//     };
//   });
// };

// export const getLatestMetrics = (data) => {
//   const latestTimestamp = Math.max(...data.map(item => new Date(item.timestamp).getTime()));
//   return data.filter(item => new Date(item.timestamp).getTime() === latestTimestamp);
// };