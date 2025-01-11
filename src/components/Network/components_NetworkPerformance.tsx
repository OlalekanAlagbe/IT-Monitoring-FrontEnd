import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'

interface NetworkPerformanceProps {
  data: BranchData[]
}

const NetworkPerformance: React.FC<NetworkPerformanceProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading network performance data...</div>
  }
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Network Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp"
            tickFormatter={(timestamp) => {
              // Example: Shorten the timestamp to display only hours and minutes
              const date = new Date(timestamp);
              return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
            }}
            angle={-45} // Rotate labels by 45 degrees
            textAnchor="end"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="metrics.bandwidth_utilization" name="Bandwidth" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="metrics.latency_ms" name="Latency" stroke="#82ca9d" dot={false}  />
          <Line type="monotone" dataKey="metrics.packet_loss_percentage" name="Packet Loss" stroke="#ffc658" dot={false}  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NetworkPerformance

