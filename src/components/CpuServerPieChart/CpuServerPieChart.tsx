import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';





const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

const CpuServerPieChart = ({ data }) => {

  if (!data || data.length === 0) {
    return <div>No data available</div>; // Or any fallback UI
  }
  const currentData = data[data.length - 1];
  const chartData = [
    { name: 'CPU Usage', value: currentData.cpuUsage },
    { name: 'Disk Usage', value: currentData.diskUsage },
    { name: 'Memory Usage', value: currentData.memoryUsage },
  ];

  return (
    <div className="chart-container">
      <h2 className="chart-title">Resource Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuServerPieChart;