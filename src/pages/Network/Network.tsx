
import React, { useState, useEffect } from 'react'
import Dashboard from '../../components/Network/components_Dashboard'
import { generateSyntheticData } from '../../utils/network_dataGenerator'
import { BranchData } from '../../types/network'
import { BarChart2 } from 'lucide-react'

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

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center"> <BarChart2 className="w-8 h-8 text-black mr-2" /> Network Monitoring</h1>
      <Dashboard data={data} />
    </main>
  )
}

