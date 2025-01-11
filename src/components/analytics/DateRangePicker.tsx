import React from 'react';
import { Calendar } from 'lucide-react';
import { DateRange } from '../../types/analytics';
import { format } from 'date-fns';

interface DateRangePickerProps {
  dateRange: DateRange;
  onChange: (range: DateRange) => void;
}

export function DateRangePicker({ dateRange, onChange }: DateRangePickerProps) {
  return (
    <div className="text-black flex items-center space-x-2">
      <Calendar color='black' className="w-5 h-5" />
      <input
        type="date"
        value={format(dateRange.startDate, 'yyyy-MM-dd')}
        onChange={(e) => onChange({
          ...dateRange,
          startDate: new Date(e.target.value),
        })}
        className="px-2 py-1 border rounded"
      />
      <span>to</span>
      <input
        type="date"
        value={format(dateRange.endDate, 'yyyy-MM-dd')}
        onChange={(e) => onChange({
          ...dateRange,
          endDate: new Date(e.target.value),
        })}
        className="px-2 py-1 border rounded"
      />
    </div>
  );
}