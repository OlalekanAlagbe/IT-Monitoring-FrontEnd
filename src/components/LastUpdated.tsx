import React from 'react';
import { Clock } from 'lucide-react';

export function LastUpdated() {
  return (
    <div className="flex items-center space-x-2">
      <Clock className="w-5 h-5" />
      <span className="text-sm text-gray-600">
        Last updated: {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
}