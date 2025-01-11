import React, { useMemo } from 'react';
import { format, parseISO, startOfDay, eachDayOfInterval } from 'date-fns';
import { DailyMetrics } from '../../types/analytics';

interface HeatmapChartProps {
  data: DailyMetrics[];
  metric: keyof DailyMetrics;
  title: string;
  colorScale: string[];
}

export function HeatmapChart({ data, metric, title, colorScale }: HeatmapChartProps) {
  const heatmapData = useMemo(() => {
    if (!data.length) return [];

    // Group data by day and hour
    const groupedData = data.reduce((acc, entry) => {
      const date = parseISO(entry.timestamp);
      const day = format(date, 'yyyy-MM-dd');
      const hour = date.getHours();
      
      if (!acc[day]) {
        acc[day] = Array(24).fill(0);
      }
      acc[day][hour] = Math.max(acc[day][hour], entry[metric]);
      return acc;
    }, {} as Record<string, number[]>);

    return Object.entries(groupedData).map(([date, hours]) => ({
      date,
      hours,
    }));
  }, [data, metric]);

  const maxValue = useMemo(() => {
    return Math.max(...data.map(d => d[metric] as number));
  }, [data, metric]);

  const getColor = (value: number) => {
    const normalizedValue = value / maxValue;
    const index = Math.min(
      Math.floor(normalizedValue * (colorScale.length - 1)),
      colorScale.length - 1
    );
    return colorScale[index];
  };

  return (
    <div className="text-black bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <div className="flex mb-2">
          <div className="w-24" /> {/* Space for dates */}
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="w-8 text-center text-xs text-gray-600">
              {i}h
            </div>
          ))}
        </div>
        {heatmapData.map(({ date, hours }) => (
          <div key={date} className="flex mb-1">
            <div className="w-24 text-xs text-gray-600 pr-2">
              {format(parseISO(date), 'MMM dd')}
            </div>
            {hours.map((value, hour) => (
              <div
                key={hour}
                className="w-8 h-8"
                style={{
                  backgroundColor: getColor(value),
                }}
                title={`${format(parseISO(date), 'MMM dd')} ${hour}:00 - ${value}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-end">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-600">Low</span>
          <div className="flex">
            {colorScale.map((color, i) => (
              <div
                key={i}
                className="w-6 h-4"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">High</span>
        </div>
      </div>
    </div>
  );
}