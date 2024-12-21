import './CpuServerBarChart.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const CpuServerBarChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Resource Usage History</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => new Date(value).toLocaleTimeString()}
            stroke="#6b7280"
          />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
            labelFormatter={(value) => new Date(value).toLocaleString()}
          />
          <Legend />
          <Bar dataKey="cpuUsage" fill="#3b82f6" name="CPU Usage" />
          <Bar dataKey="diskUsage" fill="#10b981" name="Disk Usage" />
          <Bar dataKey="memoryUsage" fill="#f59e0b" name="Memory Usage" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuServerBarChart;