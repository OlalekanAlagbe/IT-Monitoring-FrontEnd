
import React, { useState, useEffect } from 'react'
import Dashboard from '../../components/Network/components_Dashboard'
import { generateSyntheticData } from '../../utils/network_dataGenerator'
import { BranchData } from '../../types/network'
import { BarChart2, Loader2 } from 'lucide-react'

export default function Network() {
  const [data, setData] = useState<BranchData[]>([])

  useEffect(() => {
    // Initial data load
    setData(generateSyntheticData())

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(generateSyntheticData())
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])
  
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 400ms delay before rendering the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-5 flex items-start justify-center h-screen space-x-3">
      <Loader2 className="animate-spin ml-2 h-4 w-4 text-gray-500" />
      <p className="text-gray-500 text-sm font-medium align-middle">Loading...</p>
    </div>
    );
  }

  return (
    <main style={{animation: 'slideInFromTop 0.5s ease-out',}} className="min-h-screen p-4">
      <h1 className="text-lg font-bold mb-4 flex items-center"> <BarChart2 className="w-8 h-8 text-black mr-2" /> Network Monitoring</h1>
      <Dashboard data={data} />
    </main>
  )
}

