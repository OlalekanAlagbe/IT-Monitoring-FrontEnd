import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'
import { AlertCircle, CheckCircle, Timer } from 'lucide-react'

interface LatencyChartProps {
  data: BranchData[]
}

const LatencyChart: React.FC<LatencyChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading latency data...</div>
  }

  const latestData = data[data.length - 1]
  const latency = latestData.metrics.latency_ms;

  // Threshold: Latency ≥ 100ms is high
  const isHighLatency = latency >= 100;
  const statusColor = isHighLatency ? 'text-red-500' : 'text-green-500';
  const StatusIcon = isHighLatency ? AlertCircle : CheckCircle;
  const statusText = isHighLatency ? 'High Latency' : 'Normal Latency';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center"><Timer className="w-5 h-5 text-teal-500 mr-2" />Latency</h3>
          <div className={`flex items-center space-x-1 ${statusColor}`}>
            <StatusIcon className="w-5 h-5" />
            <span className="text-sm">
              {statusText}: {latency.toFixed(2)} ms
            </span>
          </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
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
            dataKey="metrics.latency_ms"
            name="Latency"
            stroke="#FF8C42"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LatencyChart