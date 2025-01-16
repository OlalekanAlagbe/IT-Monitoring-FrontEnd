import React, { useEffect, useState } from 'react'
import AlertDashboard from '../../components/Alert/alert'
import { Loader2 } from 'lucide-react';

const Alert = () => {
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
    <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className='text-black'>
        <AlertDashboard />
    </div>
  )
}

export default Alert