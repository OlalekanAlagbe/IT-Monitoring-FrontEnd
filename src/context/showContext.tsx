import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockData, mockMetrics } from '../rawData/mockData'; // Adjust the path if necessary
import { AccessLog } from '../types/AccessLog';
import { SystemMetrics } from '../types/metrics';

// Define the shape of the context value
interface DataContextProps {
  accessLogs: AccessLog[];
  systemMetrics: SystemMetrics;
  setAccessLogs: React.Dispatch<React.SetStateAction<AccessLog[]>>;
  setSystemMetrics: React.Dispatch<React.SetStateAction<SystemMetrics>>;
}

// Create the context with an undefined initial value
const DataContext = createContext<DataContextProps | undefined>(undefined);

// Provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessLogs, setAccessLogs] = useState<AccessLog[]>(mockData);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>(mockMetrics);

  // Debugging logs to verify the data is loaded correctly
  // React.useEffect(() => {
  //   console.log('Access Logs:', accessLogs);
  //   console.log('System Metrics:', systemMetrics);
  // }, [accessLogs, systemMetrics]);

  return (
    <DataContext.Provider value={{ accessLogs, systemMetrics, setAccessLogs, setSystemMetrics }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context
export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      'useData must be used within a DataProvider. Ensure that your component is wrapped in the DataProvider.'
    );
  }
  return context;
};
