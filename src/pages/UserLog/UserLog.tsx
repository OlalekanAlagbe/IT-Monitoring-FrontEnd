import './UserLog.css'
import React, { useState, useMemo, useEffect } from 'react';
import { DataTable } from '../../components/UsersLogsDataTable/DataTable';
import { FilterBar } from '../../components/UsersLogsFilterBar/FilterBar';
import { Analytics } from '../../components/UsersLogsAnalytics/Analytics';
import { Modal } from '../../components/UsersLogsModal/Modal';
import { useData } from '../../context/showContext';

// import { mockData } from '../../rawData/mockData';
import { Activity, AlertCircle, CheckCircle, Loader2, Lock, Mail, RefreshCw, User } from 'lucide-react';
import { AccessLog } from '../../types/AccessLog';


const UserLog = () => {

    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);
    const BASE_URL = 'https://it-monitoingbackend.onrender.com'; // Ensure 'http://' is present
  
    // Fetch user data to determine if the user is an admin
    useEffect(() => {
      const fetchUser = async () => {
        const tokenObjectString = localStorage.getItem('token');
        if (!tokenObjectString) {
          throw new Error('No token found. Please log in again.');
        }
        const tokenObject = JSON.parse(tokenObjectString);
        const token = tokenObject.token;
  
        try {
          const response = await fetch(`${BASE_URL}/api/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            console.log(userData);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUser();
    }, []);
  
    // Fetch all "Forgot Password" requests if the user is an admin
    useEffect(() => {
      const fetchRequests = async () => {
        const tokenObjectString = localStorage.getItem('token');
        if (!tokenObjectString) {
          throw new Error('No token found. Please log in again.');
        }
        const tokenObject = JSON.parse(tokenObjectString);
        const token = tokenObject.token;
  
        try {
          const response = await fetch(`${BASE_URL}/api/forgot-password`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch requests');
          }
          const data = await response.json();
          setRequests(data);
        } catch (err) {
          setError(err.message);
        }
      };
  
      if (user && user.role === 'admin') {
        fetchRequests();
      }
    }, [user]);
  
    // Open modal and set selected request
    const handleRowClicks = (request) => {
      setSelectedRequest(request);
      setIsModalOpen(true);
    };
  
    // Reset password
    const handleResetPassword = async () => {
      const tokenObjectString = localStorage.getItem('token');
      if (!tokenObjectString) {
        throw new Error('No token found. Please log in again.');
      }
      const tokenObject = JSON.parse(tokenObjectString);
      const token = tokenObject.token;
      console.log(token);
  
      setIsLoading(true);
      setError('');
      setSuccess('');
  
      try {
        const response = await fetch(`${BASE_URL}/api/reset-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: selectedRequest.email,
            newPassword,
            requestId: selectedRequest._id,
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to reset password');
        }
  
        setSuccess('Password reset successfully');
        setIsModalOpen(false);
        setNewPassword('');
        setRequests((prev) =>
          prev.map((req) =>
            req._id === selectedRequest._id ? { ...req, status: 'treated' } : req
          )
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    const getStatusColor = (status) => {
      switch (status) {
        case 'pending':
          return 'bg-orange-500';
        case 'treated':
          return 'bg-green-500';
        default:
          return 'bg-gray-500';
      }
    };
  

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

  const [isLoadings, setIsLoadings] = useState(true);

    // Simulate a 400ms delay before rendering the content
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoadings(false);
      }, 300);

      return () => clearTimeout(timer);
    }, []);

    if (isLoadings) {
      return (
        <div className="mt-5 flex items-start justify-center h-screen space-x-3">
        <Loader2 className="animate-spin ml-2 h-4 w-4 text-gray-500" />
        <p className="text-gray-500 text-sm font-medium align-middle">Loading...</p>
      </div>
      );
    }

  return (
    <div style={{animation: 'slideInFromTop 0.5s ease-out',}} className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-4">
          <Activity className="h-6 w-6 text-black mr-2" />
          <h1 className="text-lg font-bold text-gray-900">User Access Log</h1>
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

      {/* Forgot Password Requests Section (Only for Admins) */}
      {user && user.role === 'admin' && (
        <div className="mt-8">
          <h1 className="text-lg font-bold mb-6">Forgot Password Requests</h1>

          {error && (
            <div className="flex items-center gap-2 bg-red-100 p-3 rounded-md mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 bg-green-100 p-3 rounded-md mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-500">{success}</p>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#DD4F05]">
                  <th className="py-3 px-4 text-left text-sm text-white">Name</th>
                  <th className="py-3 px-4 text-left text-sm text-white">Email</th>
                  <th className="py-3 px-4 text-left text-sm text-white">Subject</th>
                  <th className="py-3 px-4 text-left text-sm text-white">Date</th>
                  <th className="py-3 px-4 text-left text-sm text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request._id}
                    onClick={() => handleRowClicks(request)}
                    className="text-black cursor-pointer hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 border-b border-gray-200 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        {request.name}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        {request.email}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-gray-500" />
                        {request.subject}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm">
                      {new Date(request.createdAt).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-sm">
                      <div className={`px-2 py-1 rounded-full text-sm text-white ${getStatusColor(request.status)}`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Custom Modal for resetting password */}
      {isModalOpen && (
        <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Reset Password</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Name:</p>
                <p>{selectedRequest?.name}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{selectedRequest?.email}</p>
              </div>
              <div>
                <p className="font-semibold">Subject:</p>
                <p>{selectedRequest?.subject}</p>
              </div>
            </div>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md my-4"
              disabled={selectedRequest?.status === 'treated'}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#DD4F05] text-white rounded-md hover:bg-[#C54600]"
              >
                Cancel
              </button>
              <button
                onClick={handleResetPassword}
                disabled={isLoading || selectedRequest?.status === 'treated'}
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center gap-2"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  'Reset Password'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserLog