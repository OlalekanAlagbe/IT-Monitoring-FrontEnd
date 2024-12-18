import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from 'recharts';
import './BarChartBox.css';

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1 className="text-sm font-semibold mb-2">{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer className='resp' width="99%" height={200}>
          <BarChart 
            data={props.chartData}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 40, // Increased bottom margin more significantly
            }}
          >
            {/* Grid lines */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* X-Axis for Days */}
            <XAxis 
              dataKey="name" 
              stroke="#555" 
              tick={{fontSize: 10}}
              interval={0} // Show all labels
            >
              <Label 
                value="Day of the Week" 
                position="bottom" 
                offset={-5} 
                style={{ 
                  textAnchor: 'middle', 
                  fontSize: '10px', 
                  fill: '#555' 
                }} 
              />
            </XAxis>

            {/* Y-Axis for Values */}
            <YAxis 
              stroke="#555" 
              tick={{fontSize: 10}}
              tickFormatter={(value) => `${value/1000}k`} // Convert to thousands
              width={40}
            />

            {/* Tooltip for Interaction */}
            <Tooltip
              contentStyle={{ 
                background: "#2a3447", 
                borderRadius: "5px", 
                color: "#fff",
                fontSize: 12
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />

            {/* Bars */}
            <Bar 
              dataKey={props.dataKey} 
              fill={props.color} 
              barSize={20} // Reduced bar size
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;