// // // import { BranchData } from '../types/types'
// // import { BranchData } from "../types/network"

// // export function generateSyntheticData(): BranchData[] {
// //   const data: BranchData[] = []
// //   const now = new Date()

// //   for (let i = 1; i <= 10; i++) {
// //     for (let j = 1; j <= 10; j++) {
// //       const timestamp = new Date(now.getTime() + i * 5 * 60 * 1000).toISOString()
// //       data.push({
// //         branch_id: `branch${i}`,
// //         router_id: `router${j}`,
// //         timestamp: timestamp,
// //         metrics: {
// //           bandwidth_utilization: parseFloat((60 + Math.random() * 20).toFixed(2)),
// //           latency_ms: parseFloat((5 + Math.random() * 10).toFixed(2)),
// //           packet_loss_percentage: parseFloat((5 + Math.random() * 10).toFixed(2)),
// //           cpu_usage_percentage: parseFloat((20 + Math.random() * 20).toFixed(2)), // 20-40%
// //           memory_usage_percentage: parseFloat((40 + Math.random() * 40).toFixed(2)), // 20-40%,
// //           interface_status: Math.random() > 0.5 ? 'up' : 'down',
// //           top_talkers: [
// //             { source_ip: '192.168.1.10', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
// //             { source_ip: '192.168.1.20', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
// //             { source_ip: '192.168.1.30', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
// //             { source_ip: '192.168.1.40', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
// //             { source_ip: '192.168.1.50', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
// //           ],
// //           unauthorized_access_attempts: Math.floor(Math.random() * 10),
// //           response_time_ms: Math.random() * 500,
// //           uptime_percentage: 99 + Math.random(),
// //         },
// //       })
// //     }
// //   }

// //   return data
// // }




// export function generateSyntheticData(): BranchData[] {
//   const data: BranchData[] = []
//   const now = new Date()

//   for (let i = 1; i <= 10; i++) { // Generate 10 data points for a single branch
//     const timestamp = new Date(now.getTime() + i * 5 * 60 * 1000).toISOString() // 5-minute intervals
//     data.push({
//       branch_id: `branch${i}`, // Unique branch ID
//       router_id: `router1`, // Add router_id
//       timestamp: timestamp,
//       metrics: {
//         bandwidth_utilization: parseFloat((60 + Math.random() * 20).toFixed(2)), // 60-80%
//         latency_ms: parseFloat((5 + Math.random() * 10).toFixed(2)), // 5-15ms
//         packet_loss_percentage: parseFloat((5 + Math.random() * 10).toFixed(2)), // 5-15%
//         cpu_usage_percentage: parseFloat((20 + Math.random() * 20).toFixed(2)), // 20-40%
//         memory_usage_percentage: parseFloat((40 + Math.random() * 40).toFixed(2)), // 40-80%
//         interface_status: Math.random() > 0.5 ? 'up' : 'down',
//         top_talkers: [
//           { source_ip: '192.168.1.10', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
//           { source_ip: '192.168.1.20', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
//           { source_ip: '192.168.1.30', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
//           { source_ip: '192.168.1.40', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
//           { source_ip: '192.168.1.50', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
//         ],
//         unauthorized_access_attempts: Math.floor(Math.random() * 10), // 0-9 attempts
//         response_time_ms: Math.random() * 500, // 0-500ms
//         uptime_percentage: 99 + Math.random(), // 99-100%
//       },
//     })
//   }

//   return data
// }


import { BranchData } from "../types/network"

export function generateSyntheticData(): BranchData[] {
  const data: BranchData[] = []
  const now = new Date()

  // Generate data for 10 branches
  for (let branchIndex = 1; branchIndex <= 10; branchIndex++) {
    // Generate 10 data points for each branch
    for (let dataIndex = 0; dataIndex < 10; dataIndex++) {
      const timestamp = new Date(now.getTime() + dataIndex * 60 * 60 * 1000).toISOString() // 1-hour intervals
      data.push({
        branch_id: `branch ${branchIndex}`, // Unique branch ID
        timestamp: timestamp, // Unique timestamp for each data point
        metrics: {
          bandwidth_utilization: parseFloat((60 + Math.random() * 20).toFixed(2)), // 60-80%
          latency_ms: parseFloat((5 + Math.random() * 10).toFixed(2)), // 5-15ms
          packet_loss_percentage: parseFloat((5 + Math.random() * 10).toFixed(2)), // 5-15%
          cpu_usage_percentage: parseFloat((20 + Math.random() * 20).toFixed(2)), // 20-40%
          memory_usage_percentage: parseFloat((40 + Math.random() * 40).toFixed(2)), // 40-80%
          interface_status: Math.random() > 0.5 ? 'up' : 'down',
          top_talkers: [
            { source_ip: 'Router one', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
            { source_ip: 'Router two', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
            { source_ip: 'Router three', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
            { source_ip: 'Router four', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
            { source_ip: 'Router five', bytes_sent: parseFloat((Math.random() * 1000000).toFixed(2)) },
          ],
          unauthorized_access_attempts: Math.floor(Math.random() * 10), // 0-9 attempts
          response_time_ms: Math.random() * 500, // 0-500ms
          uptime_percentage: 99 + Math.random(), // 99-100%
        },
        router_id: ""
      })
    }
  }

  return data
}