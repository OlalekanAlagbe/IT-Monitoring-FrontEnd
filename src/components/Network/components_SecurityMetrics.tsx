// import React from 'react'
// import { BranchData } from '../types/types'

// interface SecurityMetricsProps {
//   data: BranchData[]
// }

// const SecurityMetrics: React.FC<SecurityMetricsProps> = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div className="bg-white p-4 rounded shadow">Loading security metrics...</div>
//   }

//   const latestData = data[data.length - 1]

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Security Metrics</h2>
//       <div className="p-4 bg-red-100 border border-red-400 rounded">
//         <h3 className="font-bold text-red-700">Alerts</h3>
//         <p>Unauthorized access attempts: {latestData.metrics?.unauthorized_access_attempts ?? 'N/A'}</p>
//       </div>
//     </div>
//   )
// }

// export default SecurityMetrics


import React from 'react'
import { BranchData } from '../types/types'
import { AlertCircle, ShieldAlert, Clock } from 'lucide-react' // Import icons

interface SecurityMetricsProps {
  data: BranchData[]
}

const SecurityMetrics: React.FC<SecurityMetricsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded-lg shadow-md">Loading security metrics...</div>
  }

  const latestData = data[data.length - 1]
  const unauthorizedAttempts = latestData.metrics?.unauthorized_access_attempts ?? 0

  // Determine alert severity
  const severity = unauthorizedAttempts > 5 ? 'high' : unauthorizedAttempts > 2 ? 'medium' : 'low'

  // Define colors and icons based on severity
  const severityConfig = {
    high: {
      color: 'bg-red-100 border-red-400 text-red-700',
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      label: 'High Severity',
    },
    medium: {
      color: 'bg-orange-100 border-orange-400 text-orange-700',
      icon: <ShieldAlert className="w-6 h-6 text-orange-500" />,
      label: 'Medium Severity',
    },
    low: {
      color: 'bg-yellow-100 border-yellow-400 text-yellow-700',
      icon: <ShieldAlert className="w-6 h-6 text-yellow-500" />,
      label: 'Low Severity',
    },
  }

  // Get the current severity configuration
  const { color, icon, label } = severityConfig[severity]

  // Generate a list of recent unauthorized access attempts
  const recentAttempts = data
    .filter((item) => item.metrics.unauthorized_access_attempts > 0)
    .map((item) => ({
      timestamp: new Date(item.timestamp).toLocaleTimeString(),
      attempts: item.metrics.unauthorized_access_attempts,
      branch: item.branch_id,
    }))
    .slice(-10) // Show the last 10 attempts

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Security Metrics</h2>

      {/* Alert Card */}
      <div className={`p-6 border rounded-lg ${color} flex items-center space-x-4 mb-6`}>
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="font-bold text-lg">{label}</h3>
          <p className="text-sm">
            Unauthorized access attempts: <span className="font-semibold">{unauthorizedAttempts}</span>
          </p>
        </div>
      </div>

      {/* Recent Alerts Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Recent Alerts</h3>
        {recentAttempts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Timestamp</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Branch</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Attempts</th>
                </tr>
              </thead>
              <tbody>
                {recentAttempts.map((attempt, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{attempt.timestamp}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{attempt.branch}</td>
                    <td className="px-4 py-2 text-sm text-red-500 font-medium">{attempt.attempts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No recent unauthorized access attempts.</p>
        )}
      </div>
    </div>
  )
}

export default SecurityMetrics
