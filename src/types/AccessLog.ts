export interface AccessLog {
  timestamp: string;
  userId: string;
  userName: string;
  role: string;
  action: string;
  status: string;
  ipAddress: string;
  device: string;
  location: string;
  sessionDuration: number;
  failedAttempts: number;
}