import React, { useState } from 'react';
import { Activity, Loader2 } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { LastUpdated } from './LastUpdated';
import { ServerSelector } from './ServerSelector';
import { useMetrics } from '../hooks/useMetrics';
import { servers } from '../rawData/servers';

export function Dashboard() {
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [isLoading, setIsLoading] = useState(false);
  const metrics = useMetrics(selectedServer);

  // Handle server change with loading state
  const handleServerChange = (server) => {
    setIsLoading(true); // Set loading to true
    setSelectedServer(server); // Update the selected server

    // Simulate a loading delay (e.g., fetching new metrics)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after delay
    }, 300); // Adjust the delay as needed
  };

  return (
    <div className="p-6">
      <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Activity className="w-6 h-6 mr-2" />
          <h1 className="text-lg font-bold">Server Monitoring</h1>
        </div>
      </div>
      
      <ServerSelector
        servers={servers}
        selectedServer={selectedServer}
        onServerChange={handleServerChange}
        isLoading={isLoading}
      />
         {/* Conditionally render metrics based on isLoading */}
         {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading metrics...</p>
          <Loader2 className="w-4 h-4 ml-2 animate-spin" />
        </div>
      ) : (
        <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <LastUpdated />
          
          <MetricCard
            title="Requests per Minute"
            data={metrics.requests}
            color="#FFA500"
            unit="rpm"
          />
          
          <MetricCard
            title="Response Time"
            data={metrics.responseTime}
            color="#FF4500"
            unit="ms"
          />
          
          {/* <MetricCard
            title="Errors"
            data={metrics.errors}
            color="#ef4444"
          /> */}
          
          <MetricCard
            title="CPU Usage"
            data={metrics.cpuUsage}
            color="#FF8C00"
            unit="%"
            showResourceIndicator
          />
          
          <MetricCard
            title="Memory Usage"
            data={metrics.memoryUsage}
            color="#FFD700"
            unit="%"
            showResourceIndicator
          />
          
          <MetricCard
            title="Disk Usage"
            data={metrics.diskUsage}
            color="#E9967A"
            unit="%"
            showResourceIndicator
          />
        </div>
      )}
    </div>
  );
}
      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      //   <LastUpdated />
        
      //   <MetricCard
      //     title="Requests per Minute"
      //     data={metrics.requests}
      //     color="#FFA500"
      //     unit="rpm"
      //   />
        
      //   <MetricCard
      //     title="Response Time"
      //     data={metrics.responseTime}
      //     color="#FF4500"
      //     unit="ms"
      //   />
        
      //   {/* <MetricCard
      //     title="Errors"
      //     data={metrics.errors}
      //     color="#ef4444"
      //   /> */}
        
      //   <MetricCard
      //     title="CPU Usage"
      //     data={metrics.cpuUsage}
      //     color="#FF8C00"
      //     unit="%"
      //     showResourceIndicator
      //   />
        
      //   <MetricCard
      //     title="Memory Usage"
      //     data={metrics.memoryUsage}
      //     color="#FFD700"
      //     unit="%"
      //     showResourceIndicator
      //   />
        
      //   <MetricCard
      //     title="Disk Usage"
      //     data={metrics.diskUsage}
      //     color="#E9967A"
      //     unit="%"
      //     showResourceIndicator
      //   />
      // </div>