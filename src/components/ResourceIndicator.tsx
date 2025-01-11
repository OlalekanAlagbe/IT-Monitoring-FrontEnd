import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { RESOURCE_THRESHOLDS } from '../services/metrics/thresholds';

interface ResourceIndicatorProps {
  value: number;
  type: string;
}

export function ResourceIndicator({ value, type }: ResourceIndicatorProps) {
  const getStatusColor = (value: number) => {
    if (value > RESOURCE_THRESHOLDS.CRITICAL) return 'text-red-500';
    if (value > RESOURCE_THRESHOLDS.WARNING) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="flex items-center space-x-2">
      {value > RESOURCE_THRESHOLDS.WARNING ? (
        <AlertTriangle className={`w-5 h-5 ${getStatusColor(value)}`} />
      ) : (
        <CheckCircle className="w-5 h-5 text-green-500" />
      )}
      <span className={`text-sm font-medium ${getStatusColor(value)}`}>
        {type}: {value}%
      </span>
    </div>
  );
}