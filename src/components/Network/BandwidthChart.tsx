import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CheckCircle, AlertCircle, Wifi } from 'lucide-react';
import { BranchData } from '../../types/network'

interface BandwidthChartProps {
  data: BranchData[]
}

const BandwidthChart: React.FC<BandwidthChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading bandwidth data...</div>
  }

  const latestData = data[data.length - 1]
  const utilization = latestData.metrics.bandwidth_utilization;

  // Dynamic color and icon based on bandwidth utilization
  const isHighUsage = utilization >= 80;
  const statusColor = isHighUsage ? 'text-red-500' : 'text-green-500';
  const StatusIcon = isHighUsage ? AlertCircle : CheckCircle;
  const statusText = isHighUsage ? 'High Usage' : 'Normal Usage';


  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold mb-2 flex items-center">  <Wifi className="w-5 h-5 text-teal-500 mr-2" /> Bandwidth Utilization</h3>
        <div className={`flex items-center space-x-1 ${statusColor}`}>
            <StatusIcon className="w-5 h-5" />
            <span className="text-sm">
              {statusText}: {utilization.toFixed(2)}%
            </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300} style={{ zIndex: 1, position: 'relative' }}>
        <LineChart data={data}>
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) => {
              const date = new Date(timestamp)
              return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
            }}
            textAnchor="end"
            tick={{ fontSize: 10, fontWeight:"bold", angle: 45, dy: 10 }}
          />
          <YAxis />
          <Tooltip />
      
          <Line
            type="monotone"
            dataKey="metrics.bandwidth_utilization"
            name="Bandwidth"
            stroke="#DD4F05"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BandwidthChart