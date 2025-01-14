import React from 'react';
import { MetricDataPoint } from '../types/metrics';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ResourceIndicator } from './ResourceIndicator';

interface MetricCardProps {
  title: string;
  data: MetricDataPoint[];
  color: string;
  unit?: string;
  showResourceIndicator?: boolean;
}

export function MetricCard({ 
  title, 
  data, 
  color, 
  unit,
  showResourceIndicator 
}: MetricCardProps) {
  const currentValue = data[0]?.value;
  const maxValue = Math.ceil(Math.max(...data.map(d => d.value)) * 1.1); // Add 10% padding

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {showResourceIndicator && currentValue !== undefined && (
          <ResourceIndicator value={currentValue} type={title} />
        )}
      </div>
      <div className="text-2xl font-bold mb-4">
        {currentValue}
        {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[...data].reverse()}>
            <XAxis 
              dataKey="timestamp" 
              tick={{ fontSize: 10, fontWeight:"bold", angle: 45, dy: 10 }}
              interval={20}
              
            />
            <YAxis 
              // domain={[0, maxValue]}
              tick={{ fontSize: 10, fontWeight:"bold" }}
              width={30}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              dot={false}
              strokeWidth={1.2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}