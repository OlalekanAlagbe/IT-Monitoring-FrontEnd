import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../../types/network'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

interface PacketLossChartProps {
  data: BranchData[]
}

const PacketLossChart: React.FC<PacketLossChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading packet loss data...</div>
  }

  const latestData = data[data.length - 1]
  const packetLoss = latestData.metrics.packet_loss_percentage;

  // Threshold: Packet Loss ≥ 1% is high
  const isHighPacketLoss = packetLoss >= 1;
  const statusColor = isHighPacketLoss ? 'text-red-500' : 'text-green-500';
  const StatusIcon = isHighPacketLoss ? AlertCircle : CheckCircle;
  const statusText = isHighPacketLoss ? 'High Packet Loss' : 'Normal Packet Loss';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
       <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold flex items-center"> <XCircle className="w-5 h-5 text-red-500 mr-2" />Packet Loss</h3>
        <div className={`flex items-center space-x-1 ${statusColor}`}>
          <StatusIcon className="w-5 h-5" />
          <span className="text-sm">
            {statusText}: {packetLoss.toFixed(2)}%
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
            dataKey="metrics.packet_loss_percentage"
            name="Packet Loss"
            stroke="#FF3C38"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PacketLossChart