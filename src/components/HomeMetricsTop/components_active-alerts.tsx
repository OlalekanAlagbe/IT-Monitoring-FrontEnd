interface Alert {
  id: string
  title: string
  severity: "Critical" | "Warning"
  timestamp: string
}

interface ActiveAlertsProps {
  alerts: Alert[]
}

export function ActiveAlerts({ alerts }: ActiveAlertsProps) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm max-h-96 lg:max-h-[670px] overflow-y-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Active Alerts</h2>
      </div>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-gray-100 p-3 rounded-lg mb-2">
            <p className="text-sm font-medium mb-2">{alert.title}</p>
            <div className="flex justify-between items-center">
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  alert.severity === "Critical"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {alert.severity}
              </span>
              <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}