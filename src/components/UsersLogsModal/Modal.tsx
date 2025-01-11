import React from 'react';
import { X } from 'lucide-react';
import { AccessLog } from '../../types/AccessLog';
import { format } from 'date-fns';
import './Modal.css'; // Import the external CSS file

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  log: AccessLog;
  userHistory: AccessLog[];
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, log, userHistory }) => {
  if (!isOpen) return null;

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">User Information</h3>
                <p className="text-gray-600">Name: {log.userName}</p>
                <p className="text-gray-600">ID: {log.userId}</p>
                <p className="text-gray-600">Role: {log.role}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Access Details</h3>
                <p className="text-gray-600">Action: {log.action}</p>
                <p className="text-gray-600">Status: 
                  <span className={`ml-2 px-2 py-1 text-sm rounded-full ${
                    log.status === 'Success' ? 'bg-green-100 text-green-800' :
                    log.status === 'Failed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {log.status}
                  </span>
                </p>
                <p className="text-gray-600">Duration: {formatDuration(log.sessionDuration)}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Location & Device</h3>
                <p className="text-gray-600">Location: {log.location}</p>
                <p className="text-gray-600">IP Address: {log.ipAddress}</p>
                <p className="text-gray-600">Device: {log.device}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-gray-600">Failed Attempts: {log.failedAttempts}</p>
                <p className="text-gray-600">Timestamp: {format(new Date(log.timestamp), 'PPpp')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">User Activity History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userHistory.map((historyLog, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(historyLog.timestamp), 'PP p')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {historyLog.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          historyLog.status === 'Success' ? 'bg-green-100 text-green-800' :
                          historyLog.status === 'Failed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {historyLog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {historyLog.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};