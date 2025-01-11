import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'

interface CapacityPlanningProps {
  data: BranchData[]
}

const CapacityPlanning: React.FC<CapacityPlanningProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading capacity planning data...</div>
  }
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Capacity Planning</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="metrics.bandwidth_utilization" name="Bandwidth Usage" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CapacityPlanning

