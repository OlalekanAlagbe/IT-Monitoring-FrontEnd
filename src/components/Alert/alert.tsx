import React, { useState } from 'react'
import { AlertCircle, AlertTriangle, Clock } from 'lucide-react'

export default function AlertDashboard() {
  const [selectedAlert, setSelectedAlert] = useState(alerts[0])
  const [resolvedAlerts, setResolvedAlerts] = useState<Record<number, boolean>>({}) // Track resolved state for each alert

  const handleResolve = (alertId: number) => {
    setResolvedAlerts((prev) => ({
      ...prev,
      [alertId]: true, // Mark the alert as resolved
    }))
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Alert List */}
      <div style={{ animation: 'slideInFromTop 0.5s ease-out' }} className="w-[450px] border-r bg-white p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <CustomButton variant="secondary">All</CustomButton>
            <CustomButton variant="outline">Top Alerts</CustomButton>
            <CustomButton variant="outline" className="w-8 p-0">
              <span className="sr-only">Filter</span>
              ≡
            </CustomButton>
          </div>
          <div className="text-sm text-gray-500"></div>
          <CustomScrollArea className="h-[calc(100vh-180px)]">
            <div className="space-y-2">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer transition duration-200 ${
                    selectedAlert?.id === alert.id
                      ? 'bg-gray-100 shadow-md border-gray-300'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedAlert(alert)}
                >
                  {/* Left side: Alert title and severity icon */}
                  <div className="flex items-center space-x-4">
                    <SeverityIcon severity={alert.severity} />
                    <div className="w-full">
                      {/* Title */}
                      <span className="text-sm block mb-2">{alert.title}</span>

                      {/* Alert button and timestamp */}
                      <div className="w-full flex items-center space-x-4 text-sm text-gray-500">
                        <span
                          className={`text-white text-sm font-medium px-3 py-[2px] rounded-full cursor-pointer ${
                            alert.severity === "critical"
                              ? "bg-red-500 hover:bg-red-600"
                              : alert.severity === "warning"
                              ? "bg-yellow-500 hover:bg-yellow-600"
                              : "bg-[#599ED0] hover:bg-[#599ED0]-600"
                          }`}
                        >
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                        </span>
                        <span>{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Checkbox */}
                  <CustomCheckbox />
                </div>
              ))}
            </div>
          </CustomScrollArea>
        </div>
      </div>

      {/* Alert Details */}
      <div style={{ animation: 'slideInFromTop 0.5s ease-out' }} className="flex-1 p-6 transition duration-200">
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="border-b p-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">{selectedAlert.title}</h2>
              <CustomBadge variant={selectedAlert.severity}>
                {selectedAlert.severity.charAt(0).toUpperCase() + selectedAlert.severity.slice(1)}
              </CustomBadge>
              <div className="text-sm text-gray-500">{selectedAlert.timestamp}</div>
            </div>
          </div>
          <div className="space-y-6 p-6">
            {selectedAlert.content}

            <div className="flex space-x-2 pt-4">
              <CustomButton
                variant={resolvedAlerts[selectedAlert.id] ? "default" : "secondary"}
                onClick={() => handleResolve(selectedAlert.id)}
              >
                {resolvedAlerts[selectedAlert.id] ? "Resolved" : "Resolve"}
              </CustomButton>
              {resolvedAlerts[selectedAlert.id] && (
                <div className="text-green-500 text-sm ml-2">
                  Alert resolved successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SeverityIcon({ severity }: { severity: 'critical' | 'warning' | 'pending' }) {
  switch (severity) {
    case 'critical':
      return <AlertCircle className="h-5 w-5 text-red-500" />
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case 'pending':
      return <Clock className="h-5 w-5 text-[#599ED0]" />
  }
}

function CustomBadge({ children, variant }: { children: React.ReactNode, variant: string }) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
  const variantClasses = {
    critical: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    pending: "bg-[#599ED0] text-white"
  }
  return (
    <span className={`${baseClasses} ${variantClasses[variant as keyof typeof variantClasses]}`}>
      {children}
    </span>
  )
}

function CustomButton({ children, variant = "default", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "destructive" | "outline" | "secondary" }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const variantClasses = {
    default: "px-2 py-1 bg-[#85E0A3] text-white hover:bg-green-500",
    destructive: "px-2 py-1 bg-red-500 text-white hover:bg-red-600",
    outline: "border border-slate-200 hover:bg-slate-100",
    secondary: "px-2 py-1 bg-yellow-500 text-white hover:bg-yellow-600"
  }
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function CustomCheckbox() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div
      className={`w-5 h-5 border-2 rounded flex items-center justify-center cursor-pointer ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked && (
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  )
}

function CustomScrollArea({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`overflow-auto ${className}`}>
      {children}
    </div>
  )
}


const alerts = [
    {
      id: 1,
      title: "High CPU Usage on Database Server 01",
      severity: "critical" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            CPU utilization on Database Server 01 has exceeded 90% for the past 10 minutes. 
            This sustained high load may degrade query performance, slow down application 
            responsiveness, or lead to server crashes if unaddressed.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>CPU-intensive process: Process ID: 4567 (query_runner)</li>
            <li>Resource usage metrics: CPU: 95% | Memory: 82%</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Unoptimized queries running in the background.</li>
            <li>Increased user activity or traffic spikes.</li>
            <li>Possible DDoS attack causing resource exhaustion.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Optimize ongoing database queries and processes.</li>
            <li>Notify the database admin to evaluate the load.</li>
            <li>Upgrade server hardware if necessary.</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "Unauthorized Access Attempt on File Server",
      severity: "warning" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            An unauthorized access attempt was detected on the File Server. 
            The system blocked the attempt, but further investigation is required 
            to ensure no data was compromised.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>IP Address: 192.168.1.100</li>
            <li>Attempted access to: /confidential/files/</li>
            <li>Time of attempt: 2024-12-18 09:58 AM</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Brute force attack targeting the server.</li>
            <li>Compromised user credentials.</li>
            <li>Misconfigured access controls.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Review and update access control policies.</li>
            <li>Notify the security team for further investigation.</li>
            <li>Enable multi-factor authentication for all users.</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "ERR-901 on ATM Server",
      severity: "critical" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            Error code ERR-901 was detected on the ATM Server. This error indicates 
            a critical failure in the transaction processing system, which may 
            disrupt ATM services for customers.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Error code: ERR-901</li>
            <li>Affected ATM: ATM-0456</li>
            <li>Transaction ID: TXN-789012</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Network connectivity issues.</li>
            <li>Hardware malfunction in the ATM.</li>
            <li>Software bug in the transaction processing module.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Restart the ATM server and monitor for recurrence.</li>
            <li>Contact the ATM vendor for technical support.</li>
            <li>Notify customers of potential service disruptions.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Disk Space Warning",
      severity: "warning" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            Disk space on the primary storage drive is running low. Only 10% of 
            the total disk space remains, which may impact system performance 
            and data storage capabilities.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Drive: C:\</li>
            <li>Total space: 500 GB</li>
            <li>Free space: 50 GB (10%)</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Large log files or temporary files consuming space.</li>
            <li>Unused applications or data taking up storage.</li>
            <li>Insufficient storage allocation for the system.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Clean up unnecessary files and logs.</li>
            <li>Consider archiving old data to external storage.</li>
            <li>Upgrade the storage drive if necessary.</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Configuration Update",
      severity: "pending" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            A configuration update is pending for the system. This update includes 
            critical security patches and performance improvements.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Update version: v2.3.1</li>
            <li>Release date: 2024-12-15</li>
            <li>Impact: Requires system restart.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Scheduled maintenance window.</li>
            <li>Security vulnerabilities addressed in the update.</li>
            <li>Performance enhancements included in the update.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Schedule the update during off-peak hours.</li>
            <li>Notify users of potential downtime.</li>
            <li>Backup critical data before applying the update.</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: "Failed Login Attempt",
      severity: "warning" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            A failed login attempt was detected on the system. This could indicate 
            a potential security threat or a user error.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Username: admin</li>
            <li>IP Address: 192.168.1.150</li>
            <li>Time of attempt: 2024-12-18 09:55 AM</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Brute force attack targeting the account.</li>
            <li>User forgot their password.</li>
            <li>Misconfigured login credentials.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Reset the password for the affected account.</li>
            <li>Notify the user of the failed attempt.</li>
            <li>Enable account lockout after multiple failed attempts.</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      title: "Failed Login Attempt",
      severity: "pending" as const,
      timestamp: "2024-12-18 10:00 AM",
      content: (
        <div>
          <h3 className="font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            A failed login attempt was detected on the system. This could indicate 
            a potential security threat or a user error.
          </p>
  
          <h3 className="font-semibold mb-2">Logs/Details:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Username: guest</li>
            <li>IP Address: 192.168.1.200</li>
            <li>Time of attempt: 2024-12-18 09:57 AM</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Potential Causes:</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-1">
            <li>Brute force attack targeting the account.</li>
            <li>User forgot their password.</li>
            <li>Misconfigured login credentials.</li>
          </ul>
  
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Reset the password for the affected account.</li>
            <li>Notify the user of the failed attempt.</li>
            <li>Enable account lockout after multiple failed attempts.</li>
          </ul>
        </div>
      )
    }
  ];

