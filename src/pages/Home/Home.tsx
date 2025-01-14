// import React from 'react'

// import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle } from 'lucide-react'
// import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card'
// import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts'
// import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart'

// const alerts = [
//   {
//     id: "1",
//     title: "High CPU Usage on Database Server 01",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "2",
//     title: "Unauthorized Access Attempt on Payroll DB",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "3",
//     title: "Disk Space Warning on Finnacle Production Server",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "4",
//     title: "High Memory Usage on Sever 3",
//     severity: "Critical",
//     timestamp: "2024-12-18 10:00 AM",
//   },
//   {
//     id: "5",
//     title: "Configuration Update",
//     severity: "Warning",
//     timestamp: "2024-12-18 10:00 AM",
//   },
// ]

// const metrics = [
//   { metric: "Total Activities", value: 45 },
//   { metric: "Failed Attempts", value: 7 },
//   { metric: "Successful Actions", value: 38 },
//   { metric: "Most Active User", value: "MG5/235/Doe" },
//   { metric: "Critical Alerts", value: "2 Unauthorized Access Attempts" },
// ]

// const Home = () => {
//   return (
//     <div className="text-black p-8 space-y-8">
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
//         <MetricCard
//           title="CPU Usage"
//           icon={Cpu}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-red-500"
//         />
//         <MetricCard
//           title="Disk Usage"
//           icon={HardDrive}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-blue-500"
//         />
//         <MetricCard
//           title="Memory Usage"
//           icon={Memory}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-yellow-500"
//         />
//         <MetricCard
//           title="Response Time"
//           icon={Timer}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-green-500"
//         />
//         <MetricCard
//           title="Uptime"
//           icon={ArrowUpCircle}
//           average={78}
//           maximum={98}
//           minimum={45}
//           iconColor="text-purple-500"
//         />
//       </div>
//       <div className="grid gap-4 md:grid-cols-2">
//         <ActiveAlerts alerts={alerts} />
//         <ActivitiesChart metrics={metrics} />
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, MemoryStickIcon as Memory, Timer, ArrowUpCircle, Mail, User, Lock, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { MetricCard } from '../../components/HomeMetricsTop/components_metric-card';
import { ActiveAlerts } from '../../components/HomeMetricsTop/components_active-alerts';
import { ActivitiesChart } from '../../components/HomeMetricsTop/components_activities-chart';

const alerts = [
  {
    id: "1",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:05 AM",
  },
  {
    id: "2",
    title: "Packet Loss Detected on Branch 2 Router",
    severity: "Critical",
    timestamp: "2024-12-18 10:10 AM",
  },
  {
    id: "3",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:15 AM",
  },
  {
    id: "4",
    title: "Server Downtime on Process Maker Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:20 AM",
  },
  {
    id: "5",
    title: "Disk Failure Predicted on GAPS Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:25 AM",
  },
  {
    id: "6",
    title: "Network Latency Spike on MTN ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:05 AM",
  },
  {
    id: "7",
    title: "Packet Loss Detected on Branch 2 Router",
    severity: "Critical",
    timestamp: "2024-12-18 10:10 AM",
  },
  {
    id: "8",
    title: "High Bandwidth Utilization on Airtel ISP",
    severity: "Warning",
    timestamp: "2024-12-18 10:15 AM",
  },
  {
    id: "9",
    title: "Server Downtime on Process Maker Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:20 AM",
  },
  {
    id: "10",
    title: "Disk Failure Predicted on GAPS Server",
    severity: "Critical",
    timestamp: "2024-12-18 10:25 AM",
  },
  {
    id: "11",
    title: "Abnormal Traffic Detected on IBank Server",
    severity: "Warning",
    timestamp: "2024-12-18 10:30 AM",
  },
  {
    id: "12",
    title: "Firewall Breach Attempt Blocked",
    severity: "Critical",
    timestamp: "2024-12-18 10:35 AM",
  },
  {
    id: "13",
    title: "Backup Failed on Finnacle Production Server",
    severity: "Warning",
    timestamp: "2024-12-18 10:40 AM",
  },
  {
    id: "14",
    title: "Service Interruption on Spectranet ISP",
    severity: "Critical",
    timestamp: "2024-12-18 10:45 AM",
  },
  {
    id: "15",
    title: "Scheduled Maintenance: IBank Server",
    severity: "Info",
    timestamp: "2024-12-18 11:00 AM",
  }
];


const metrics = [
  { metric: "Total Activities", value: 45 },
  { metric: "Failed Attempts", value: 7 },
  { metric: "Successful Actions", value: 38 },
  { metric: "Most Active User", value: "MG5/235/Doe" },
  { metric: "Critical Alerts", value: "2 Unauthorized Access Attempts" },
];

const Home = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const BASE_URL = 'http://localhost:3000'; // Ensure 'http://' is present

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
  const handleRowClick = (request) => {
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

  return (
    <div className="text-black p-8 space-y-8">
      {/* Metrics Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="CPU Usage"
          icon={Cpu}
          average={63.5}
          maximum={74.89}
          minimum={43.10}
          iconColor="text-red-500"
        />
        <MetricCard
          title="Disk Usage"
          icon={HardDrive}
          average={60.02}
          maximum={69.91}
          minimum={50.23}
          iconColor="text-blue-500"
        />
        <MetricCard
          title="Memory Usage"
          icon={Memory}
          average={60.73}
          maximum={70.90}
          minimum={50.13}
          iconColor="text-yellow-500"
        />
        <MetricCard
          title="Response Time"
          icon={Timer}
          average={60.73}
          maximum={70.9}
          minimum={50.13}
          iconColor="text-green-500"
        />
        <MetricCard
          title="Uptime"
          icon={ArrowUpCircle}
          average={98}
          maximum={99}
          minimum={97}
          iconColor="text-purple-500"
        />
      </div>

      {/* Alerts and Activities Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <ActiveAlerts alerts={alerts} />
        <ActivitiesChart metrics={metrics} />
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
                    onClick={() => handleRowClick(request)}
                    className="cursor-pointer hover:bg-gray-50"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
};

export default Home;