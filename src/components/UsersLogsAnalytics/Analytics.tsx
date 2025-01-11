import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AccessLog } from '../../types/AccessLog';

interface AnalyticsProps {
  data: AccessLog[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const Analytics: React.FC<AnalyticsProps> = ({ data }) => {
  // Calculate role distribution
  const roleStats = data.reduce((acc: { [key: string]: number }, log) => {
    acc[log.role] = (acc[log.role] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(roleStats).map(([name, value]) => ({
    name,
    value,
  }));

  // Calculate action distribution
  const actionStats = data.reduce((acc: { [key: string]: number }, log) => {
    acc[log.action] = (acc[log.action] || 0) + 1;
    return acc;
  }, {});

  const barData = Object.entries(actionStats).map(([name, value]) => ({
    name,
    count: value,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded-lg shadow">
        <h3 className="text-sm font-semibold mb-2">User Role Distribution</h3>
        <div className="h-[180px]"> {/* Reduced height */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-3 rounded-lg shadow">
        <h3 className="text-sm font-semibold mb-2">Action Distribution</h3>
        <div className="h-[180px]"> {/* Reduced height */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 7 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#dd4f05" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};