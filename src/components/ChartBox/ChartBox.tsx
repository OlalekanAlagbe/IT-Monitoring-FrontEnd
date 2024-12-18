import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import './ChartBox.css'
type Props = {
  color:string;
  icons:string;
  title:string;
  dataKey:string;
  number:number | string;
  percentage:number;
  chartData:object[];
}
const ChartBox = (props) => {
  return (
    <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <img src="/user.svg" alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='' style={{color:props.color}} >View all</Link>
        </div>
        <div className="chartInfo">
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart width={300} height={100} data={props.chartData}>
                        <Tooltip 
                        contentStyle={{background:"transparent",border:"none"}}
                        labelStyle={{display:"none"}}
                        position={{x:10,y:60}}
                         />
                        <Line 
                        type="monotone" 
                        dataKey={props.dataKey} 
                        stroke={props.color}
                        dot={false} 
                        strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage"
                style={{color:props.percentage < 0 ? "tomato" : "limegreen"}}
                >{props.percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox