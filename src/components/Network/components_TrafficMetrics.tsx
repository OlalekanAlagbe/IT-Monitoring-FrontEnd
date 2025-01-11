import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { BranchData } from '../types/types'
import { Activity } from 'lucide-react'

interface TrafficMetricsProps {
  data: BranchData[]
}

const TrafficMetrics: React.FC<TrafficMetricsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-4 rounded shadow">Loading traffic metrics...</div>
  }

  const latestData = data[data.length - 1]
  const topTalkers = latestData.metrics?.top_talkers ?? []

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-sm font-semibold mb-4 flex items-center"><Activity className="w-5 h-5 text-teal-500 mr-2" />Traffic Metrics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topTalkers}>
         
          <XAxis dataKey="source_ip" tick={{ fontSize: 12, fontWeight: 'bold'}} angle={-40} textAnchor="end" interval={0} />
          <YAxis tick={{ fontSize: 12, fontWeight: 'bold'}} />
          <Tooltip />
          <Legend />
          <Bar dataKey="bytes_sent" fill="#DD4F05"  barSize={60} radius={[5, 5, 0, 0]} activeBar={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrafficMetrics

