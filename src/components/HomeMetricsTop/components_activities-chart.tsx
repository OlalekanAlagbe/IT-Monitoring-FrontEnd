import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ActivityMetric {
  metric: string
  value: string | number
}

interface ActivitiesChartProps {
  metrics: ActivityMetric[]
}
const barData = [  
  { metric: 'Logout', value: 29 },
  { metric: 'Configuration Update', value: 39 },
  { metric: 'System Backup', value: 24 },
  { metric: 'Error Log Review', value: 22 },
  { metric: 'Configuration Update', value: 41 },
  { metric: 'Data Upload', value: 28 },
  { metric: 'Data Retrieval', value: 35 }
]

export function ActivitiesChart({ metrics }: ActivitiesChartProps) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Total Activities</h2>
      </div>
      <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 7 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#dd4f05" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
      <table className="w-full border border-gray-300 bg-white shadow-sm">
        <thead>
          <tr className="bg-[#dd4f05] text-white">
            <th className="py-2 px-4 text-left font-medium border border-gray-300">Metric</th>
            <th className="py-2 px-4 text-right font-medium border border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((item, index) => (
            <tr
              key={item.metric}
              className={`border border-gray-300 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-100`}
              // style={{ height: '48px' }}
            >
              <td className="py-2 px-4 text-sm text-gray-800 border border-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.metric}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800 text-right border border-gray-300 whitespace-wrap overflow-hidden text-ellipsis">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

