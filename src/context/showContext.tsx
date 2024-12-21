import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const ServerMemoryContext = createContext();

// Create the provider component
export const ServerMemoryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/server-memory-usage');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const rawData = await response.json();
        setData(rawData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Provide context value
  return (
    <ServerMemoryContext.Provider value={{ data, loading, error }}>
      {children}
    </ServerMemoryContext.Provider>
  );
};
