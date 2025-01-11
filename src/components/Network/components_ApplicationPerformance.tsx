import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'

interface ApplicationPerformanceProps {
  data: BranchData[]
}

const ApplicationPerformance: React.FC<ApplicationPerformanceProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading application performance data...</div>
  }
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Application Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="metrics.response_time_ms" name="Response Time" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ApplicationPerformance

