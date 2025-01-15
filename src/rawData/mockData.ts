import { AccessLog } from '../types/AccessLog';
import { addHours } from 'date-fns';
import { firstNames, lastNames } from './nigerianNames';
import { nigerianStates } from './nigerianStates';
import { addMinutes, format } from 'date-fns';
import { SystemMetrics } from '../types/metrics';

const actions = ['Login', 'Logout', 'System Backup', 'Error Log Review', 'Configuration Update', 'Data Upload', 'Data Retrieval'];
const roles = ['Database Manager', 'Application Support Analyst', 'Q.A Engineer', 'Business Analyst', 'IT Support'];
const devices = ['Windows PC', 'MacBook', 'IOS', 'Linux Server'];
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