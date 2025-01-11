import { AccessLog } from '../types/AccessLog';
import { addHours } from 'date-fns';
import { firstNames, lastNames } from './nigerianNames';
import { nigerianStates } from './nigerianStates';
import { addMinutes, format } from 'date-fns';
import { SystemMetrics } from '../types/metrics';

const actions = ['Login', 'Logout', 'Access Financial Server', 'Access HR Database', 'Access Payroll DB', 'Download Report', 'VPN Settings adjusted'];
const roles = ['Admin', 'Manager', 'Funds Transfer', 'Data Analyst', 'IT Support'];
const devices = ['Windows PC', 'MacBook', 'iPhone', 'Linux Server'];
const statuses = ['Success', 'Failed', 'Pending'];

// Generate fixed set of users with consistent roles
const users = Array.from({ length: 20 }, () => ({
  firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
  lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
  userId: `user${Math.floor(10000 + Math.random() * 90000)}`,
  role: roles[Math.floor(Math.random() * roles.length)], // Assign a fixed role per user
}));

const generateRandomLog = (index: number): AccessLog => {
  const baseDate = new Date(2024, 11, 21);
  const timestamp = addHours(baseDate, -Math.floor(Math.random() * 24 * 7)).toISOString();
  const user = users[Math.floor(Math.random() * users.length)];
  
  return {
    timestamp,
    userId: user.userId,
    userName: `${user.firstName} ${user.lastName}`,
    role: user.role, // Use the user's fixed role
    action: actions[Math.floor(Math.random() * actions.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    ipAddress: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    device: devices[Math.floor(Math.random() * devices.length)],
    location: nigerianStates[Math.floor(Math.random() * nigerianStates.length)],
    sessionDuration: Math.floor(Math.random() * 7200),
    failedAttempts: Math.floor(Math.random() * 5),
  };
};

// Generate more logs per user to ensure multiple activities
export const mockData: AccessLog[] = Array.from({ length: 200 }, (_, i) => generateRandomLog(i));



export const serveDataResponseTimeDownTime = [
  {
    "_id": "676674a5a121b1945a8b74af",
    "timestamp": "2024-06-17 10:30:00",
    "serverName": "Server-1",
    "network_response_time": 125,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b0",
    "timestamp": "2024-06-17 10:30:00",
    "serverName": "Server-2",
    "network_response_time": 138,
    "uptime": 99.95,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b1",
    "timestamp": "2024-06-17 10:30:00",
    "serverName": "Server-3",
    "network_response_time": 142,
    "uptime": 99.92,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b2",
    "timestamp": "2024-06-17 10:30:00",
    "serverName": "Server-4",
    "network_response_time": 131,
    "uptime": 99.97,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b3",
    "timestamp": "2024-06-17 10:30:00",
    "serverName": "Server-5",
    "network_response_time": 128,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b4",
    "timestamp": "2024-06-17 10:35:00",
    "serverName": "Server-1",
    "network_response_time": 135,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b5",
    "timestamp": "2024-06-17 10:35:00",
    "serverName": "Server-2",
    "network_response_time": 145,
    "uptime": 99.95,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b6",
    "timestamp": "2024-06-17 10:35:00",
    "serverName": "Server-3",
    "network_response_time": 155,
    "uptime": 89.45,
    "status": "offline"
  },
  {
    "_id": "676674a5a121b1945a8b74b7",
    "timestamp": "2024-06-17 10:35:00",
    "serverName": "Server-4",
    "network_response_time": 128,
    "uptime": 99.97,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b8",
    "timestamp": "2024-06-17 10:35:00",
    "serverName": "Server-5",
    "network_response_time": 132,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74b9",
    "timestamp": "2024-06-17 10:40:00",
    "serverName": "Server-1",
    "network_response_time": 142,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74ba",
    "timestamp": "2024-06-17 10:40:00",
    "serverName": "Server-2",
    "network_response_time": 156,
    "uptime": 99.95,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74bb",
    "timestamp": "2024-06-17 10:40:00",
    "serverName": "Server-3",
    "network_response_time": 168,
    "uptime": 92.34,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74bc",
    "timestamp": "2024-06-17 10:40:00",
    "serverName": "Server-4",
    "network_response_time": 134,
    "uptime": 99.97,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74bd",
    "timestamp": "2024-06-17 10:40:00",
    "serverName": "Server-5",
    "network_response_time": 138,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74be",
    "timestamp": "2024-06-17 10:45:00",
    "serverName": "Server-1",
    "network_response_time": 148,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74bf",
    "timestamp": "2024-06-17 10:45:00",
    "serverName": "Server-2",
    "network_response_time": 165,
    "uptime": 88.76,
    "status": "offline"
  },
  {
    "_id": "676674a5a121b1945a8b74c0",
    "timestamp": "2024-06-17 10:45:00",
    "serverName": "Server-3",
    "network_response_time": 175,
    "uptime": 95.67,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c1",
    "timestamp": "2024-06-17 10:45:00",
    "serverName": "Server-4",
    "network_response_time": 142,
    "uptime": 99.97,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c2",
    "timestamp": "2024-06-17 10:45:00",
    "serverName": "Server-5",
    "network_response_time": 145,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c3",
    "timestamp": "2024-06-17 10:50:00",
    "serverName": "Server-1",
    "network_response_time": 155,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c4",
    "timestamp": "2024-06-17 10:50:00",
    "serverName": "Server-2",
    "network_response_time": 178,
    "uptime": 92.45,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c5",
    "timestamp": "2024-06-17 10:50:00",
    "serverName": "Server-3",
    "network_response_time": 182,
    "uptime": 97.89,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c6",
    "timestamp": "2024-06-17 10:50:00",
    "serverName": "Server-4",
    "network_response_time": 148,
    "uptime": 99.97,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c7",
    "timestamp": "2024-06-17 10:50:00",
    "serverName": "Server-5",
    "network_response_time": 152,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c8",
    "timestamp": "2024-06-17 10:55:00",
    "serverName": "Server-1",
    "network_response_time": 162,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74c9",
    "timestamp": "2024-06-17 10:55:00",
    "serverName": "Server-2",
    "network_response_time": 185,
    "uptime": 95.67,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74ca",
    "timestamp": "2024-06-17 10:55:00",
    "serverName": "Server-3",
    "network_response_time": 188,
    "uptime": 98.92,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74cb",
    "timestamp": "2024-06-17 10:55:00",
    "serverName": "Server-4",
    "network_response_time": 155,
    "uptime": 87.65,
    "status": "offline"
  },
  {
    "_id": "676674a5a121b1945a8b74cc",
    "timestamp": "2024-06-17 10:55:00",
    "serverName": "Server-5",
    "network_response_time": 158,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74cd",
    "timestamp": "2024-06-17 11:00:00",
    "serverName": "Server-1",
    "network_response_time": 168,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74ce",
    "timestamp": "2024-06-17 11:00:00",
    "serverName": "Server-2",
    "network_response_time": 192,
    "uptime": 97.85,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74cf",
    "timestamp": "2024-06-17 11:00:00",
    "serverName": "Server-3",
    "network_response_time": 195,
    "uptime": 99.34,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d0",
    "timestamp": "2024-06-17 11:00:00",
    "serverName": "Server-4",
    "network_response_time": 162,
    "uptime": 92.45,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d1",
    "timestamp": "2024-06-17 11:00:00",
    "serverName": "Server-5",
    "network_response_time": 165,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d2",
    "timestamp": "2024-06-17 11:05:00",
    "serverName": "Server-1",
    "network_response_time": 175,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d3",
    "timestamp": "2024-06-17 11:05:00",
    "serverName": "Server-2",
    "network_response_time": 198,
    "uptime": 98.92,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d4",
    "timestamp": "2024-06-17 11:05:00",
    "serverName": "Server-3",
    "network_response_time": 202,
    "uptime": 99.67,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d5",
    "timestamp": "2024-06-17 11:05:00",
    "serverName": "Server-4",
    "network_response_time": 168,
    "uptime": 95.78,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d6",
    "timestamp": "2024-06-17 11:05:00",
    "serverName": "Server-5",
    "network_response_time": 172,
    "uptime": 99.96,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d7",
    "timestamp": "2024-06-17 11:10:00",
    "serverName": "Server-1",
    "network_response_time": 182,
    "uptime": 99.98,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d8",
    "timestamp": "2024-06-17 11:10:00",
    "serverName": "Server-2",
    "network_response_time": 205,
    "uptime": 99.45,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74d9",
    "timestamp": "2024-06-17 11:10:00",
    "serverName": "Server-3",
    "network_response_time": 208,
    "uptime": 99.82,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74da",
    "timestamp": "2024-06-17 11:10:00",
    "serverName": "Server-4",
    "network_response_time": 175,
    "uptime": 97.89,
    "status": "online"
  },
  {
    "_id": "676674a5a121b1945a8b74db",
    "timestamp": "2024-06-17 11:10:00",
    "serverName": "Server-5",
    "network_response_time": 178,
    "uptime": 88.45,
    "status": "offline"
  },
  ]


function generateDataPoints(count: number, minValue: number, maxValue: number) {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => ({
    timestamp: format(addMinutes(now, -i * 5), 'HH:mm'),
    value: Math.floor(Math.random() * (maxValue - minValue) + minValue),
  }));
}

export const mockMetrics: SystemMetrics = {
  requests: generateDataPoints(200, 100, 500),
  responseTime: generateDataPoints(200, 50, 200),
  errors: generateDataPoints(200, 0, 10),
  cpuUsage: generateDataPoints(200, 20, 90),
  memoryUsage: generateDataPoints(200, 40, 85),
  diskUsage: generateDataPoints(200, 50, 80),
};