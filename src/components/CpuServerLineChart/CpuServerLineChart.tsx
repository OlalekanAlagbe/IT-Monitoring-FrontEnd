
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CpuServerLineChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Server Usage Trends</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <Line
            type="monotone"
            dataKey="cpuUsage"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
            name="CPU Usage"
          />
          <Line
            type="monotone"
            dataKey="diskUsage"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981' }}
            name="Disk Usage"
          />
          <Line
            type="monotone"
            dataKey="memoryUsage"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b' }}
            name="Memory Usage"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuServerLineChart;