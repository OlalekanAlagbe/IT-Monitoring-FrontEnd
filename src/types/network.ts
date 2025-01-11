export interface TopTalker {
  source_ip: string
  bytes_sent: number
}

export interface Metrics {
  bandwidth_utilization: number
  latency_ms: number
  packet_loss_percentage: number
  cpu_usage_percentage: number
  memory_usage_percentage: number
  interface_status: string
  top_talkers: TopTalker[]
  unauthorized_access_attempts: number
  response_time_ms: number
  uptime_percentage: number
}

export interface BranchData {
  branch_id: string
  router_id: string
  timestamp: string
  metrics: Metrics
}

