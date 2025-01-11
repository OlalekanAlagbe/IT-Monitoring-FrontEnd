// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// interface GaugeChartProps {
//   value: number;
//   maxValue: number;
//   color: string;
//   label: string;
//   unit?: string;
// }

// export function GaugeChart({ value, maxValue, color, label, unit }: GaugeChartProps) {
//   const normalizedValue = Math.min(Math.max(value, 0), maxValue);
//   const data = [
//     { value: normalizedValue },
//     { value: maxValue - normalizedValue },
//   ];

//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <h3 className="text-lg font-semibold text-center mb-2">{label}</h3>
//       <div className="h-40">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="80%"
//               startAngle={180}
//               endAngle={0}
//               innerRadius="60%"
//               outerRadius="100%"
//               dataKey="value"
//             >
//               <Cell fill={color} />
//               <Cell fill="#f3f4f6" />
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//       <p className="text-center text-2xl font-bold mt-2">
//         {value.toFixed(1)}{unit}
//       </p>
//     </div>
//   );
// }



import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
  value: number;
  targetValue: number;
  maxValue: number;
  color: string;
  label: string;
  unit?: string;
}

export function GaugeChart({ value, targetValue, maxValue, color, label, unit }: GaugeChartProps) {
  const normalizedValue = Math.min(Math.max(value, 0), maxValue);
  const normalizedTarget = Math.min(Math.max(targetValue, 0), maxValue);
  const data = [
    { value: normalizedValue },
    { value: maxValue - normalizedValue },
  ];

  return (
    <div className="bg-white p-3 rounded shadow text-center">
      <h3 className="text-sm font-medium mb-2 truncate">{label}</h3>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius="60%"
              outerRadius="90%"
              dataKey="value"
            >
              <Cell fill={color} />
              <Cell fill="#f3f4f6" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs mt-2 bg-gray-100 rounded-lg p-2 text-gray-700 shadow-sm">
        <span className="font-semibold">Current:</span> {value.toFixed(1)}{unit} <br />
        <span className="font-semibold">Target:</span> {targetValue.toFixed(1)}{unit}
      </p>

    </div>
  );
}
