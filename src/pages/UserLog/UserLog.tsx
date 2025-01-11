import './UserLog.css'
import React, { useState, useMemo } from 'react';
import { DataTable } from '../../components/UsersLogsDataTable/DataTable';
import { FilterBar } from '../../components/UsersLogsFilterBar/FilterBar';
import { Analytics } from '../../components/UsersLogsAnalytics/Analytics';
import { Modal } from '../../components/UsersLogsModal/Modal';
import { useData } from '../../context/showContext';

// import { mockData } from '../../rawData/mockData';
import { Activity } from 'lucide-react';
import { AccessLog } from '../../types/AccessLog';


const UserLog = () => {

  const {accessLogs} = useData()
  const mockData = accessLogs || [];
  console.log(`mockData is`,mockData)
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLog, setSelectedLog] = useState<AccessLog | null>(null);
  const [filters, setFilters] = useState({
    role: '',
    status: '',
    action: '',
    search: '',
  });
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return mockData.filter(log => {
      const matchesRole = !filters.role || log.role === filters.role;
      const matchesStatus = !filters.status || log.status === filters.status;
      const matchesAction = !filters.action || log.action === filters.action;
      const matchesSearch = !filters.search || 
        log.userName.toLowerCase().includes(filters.search.toLowerCase());

      return matchesRole && matchesStatus && matchesAction && matchesSearch;
    });
  }, [filters]);

  const handleRowClick = (log: AccessLog) => {
    setSelectedLog(log);
  };

  const getUserHistory = (userId: string) => {
    return mockData
      .filter(log => log.userId === userId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  };

  const handleFilterChange = (newFilters: { [key: string]: string }) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-4">
          <Activity className="h-6 w-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">User Access Log</h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Analytics data={filteredData} />
          
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          <DataTable
            data={filteredData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onRowClick={handleRowClick}
          />

          {selectedLog && (
            <Modal
              isOpen={!!selectedLog}
              onClose={() => setSelectedLog(null)}
              log={selectedLog}
              userHistory={getUserHistory(selectedLog.userId)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserLog