
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./DoubleLineChart.css"



const DoubleLineChart = (props) => {

    console.log(props.data[0].server);

  return (
    <div className="traffic-chart">
      <div className="traffic-chart__container">
        {/* Header */}
        <div className="traffic-chart__header">
          <h2 className="traffic-chart__title">
            {props.data[0].server}
          </h2>
        </div>

        {/* Chart */}
        <div className="traffic-chart__graph">
            <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={props.data}
                margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 50,
                }}
            >
                {/* Background Grid */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />

                {/* X-Axis */}
                <XAxis
                dataKey="timestamp"
                tick={{ fontSize: 12, fill: '#666' }}
                tickLine={false}
                axisLine={{ stroke: '#ccc' }}
                tickFormatter={(value) => new Date(value).toLocaleTimeString()}
                label={{
                    value: 'Timestamp',
                    position: 'bottom',
                    offset: 20,
                    fontSize: 14,
                    fill: '#333',
                }}
                />

                {/* Y-Axis */}
                <YAxis
                tick={{ fontSize: 12, fill: '#666' }}
                tickLine={false}
                axisLine={{ stroke: '#ccc' }}
                label={{
                    value: 'Memory (GB)',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 10,
                    fontSize: 14,
                    fill: '#333',
                }}
                />

                {/* Tooltip */}
                <Tooltip
                contentStyle={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
                labelStyle={{ fontWeight: 'bold', color: '#333' }}
                formatter={(value) => `${value} GB`}
                />

                {/* Legend */}
                <Legend
                wrapperStyle={{
                    paddingTop: 20,
                    fontSize: 14,
                    color: '#333',
                }}
                iconType="circle"
                align="right"
                verticalAlign="top"
                />

                {/* Lines */}
                <Line
                type="monotone"
                dataKey="used_memory"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2, stroke: '#8884d8' }}
                />
                <Line
                type="monotone"
                dataKey="free_memory"
                stroke="#82ca9d"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2, stroke: '#82ca9d' }}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}


export default DoubleLineChart;

