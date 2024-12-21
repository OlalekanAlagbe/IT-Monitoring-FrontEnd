import { Activity, Cpu, Database, HardDrive, Network, Server } from 'lucide-react'
import './MetricCard.css'


export const MetricCard = (props) => {

  console.log(props.data[0].server);
  const memoryUsage = props.data[0].memory_usage_percent;

  const getColorByUsage = (usage) => {
    if (usage < 50) return 'green';
    if (usage < 75) return 'yellow';
    return 'red';
  };

  return (
    <div className="metric-card">
          <div className="left">
            <Server color='blue' />
          </div>
          <div className="right">
              <h3 className="text">{props.data[0].server.charAt(0).toUpperCase() + props.data[0].server.slice(1)}</h3>
              <div style={{ color: getColorByUsage(memoryUsage) }} className="percent">{props.data[0].memory_usage_percent}% of memory used </div>
          </div>
    </div>
  );
};