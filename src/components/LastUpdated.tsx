// import React from 'react';
// import { Clock } from 'lucide-react';

// export function LastUpdated() {
//   return (
//     <div className="flex items-center space-x-2">
//       <Clock className="w-5 h-5" />
//       <span className="text-sm text-gray-600">
//         Last updated: {new Date().toLocaleTimeString()}
//       </span>
//     </div>
//   );
// }


import { Clock } from 'lucide-react';
import React, { useState, useEffect } from 'react';
// import { Clock } from 'lucide-react';

export function LastUpdated() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds() * 6; // 360 degrees / 60 seconds = 6 degrees per second
  const minutes = time.getMinutes() * 6 + seconds / 60; // 6 degrees per minute + partial degrees from seconds
  const hours = time.getHours() % 12 * 30 + minutes / 12; // 360 degrees / 12 hours = 30 degrees per hour + partial degrees from minutes

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Clock face */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-600 bg-white shadow-2xl">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-3 bg-gray-600 transform -translate-x-1/2"
              style={{
                top: '6px',
                left: '50%',
                transformOrigin: '50% 72px',
                rotate: `${i * 30}deg`,
              }}
            />
          ))}
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1 rounded-full bg-gray-600 z-50" />
          
          {/* Hour hand */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-12 -mt-12 -ml-0.5 rounded-full bg-gray-600 origin-bottom transform"
            style={{ rotate: `${hours}deg` }}
          />
          
          {/* Minute hand */}
          <div
            className="absolute top-1/2 left-1/2 w-0.5 h-16 -mt-16 -ml-0.5 rounded-full bg-gray-600 origin-bottom transform"
            style={{ rotate: `${minutes}deg` }}
          />
          
          {/* Second hand */}
          <div
            className="absolute top-1/2 left-1/2 w-0.5 h-18 -mt-18 -ml-[0.5px] rounded-full bg-gray-600 origin-bottom transform"
            style={{ rotate: `${seconds}deg` }}
          />
        </div>
        
        
      </div>
      <div className="ml-4 flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

