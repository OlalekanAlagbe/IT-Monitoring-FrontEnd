import React from 'react';
import { format } from 'date-fns';
import { AccessLog } from '../../types/AccessLog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DataTable.css'; // Import the external CSS file

interface DataTableProps {
  data: AccessLog[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onRowClick: (log: AccessLog) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  onRowClick,
}) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="overflow-x-auto" style={{ maxHeight: '400px' }}>
        <table className="min-w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((log, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 cursor-pointer" 
                onClick={() => onRowClick(log)}
              >
                <td className="px-4 py-2 text-sm text-gray-500">
                  {format(new Date(log.timestamp), 'HH:mm:ss')}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {log.userName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {log.role}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {log.action}
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    log.status === 'Success' ? 'bg-green-100 text-green-800' :
                    log.status === 'Failed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {log.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-gray-800 mx-4 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};