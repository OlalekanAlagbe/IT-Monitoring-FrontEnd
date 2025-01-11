import { ArrowUpIcon, TypeIcon as type, LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  icon: LucideIcon
  average: number
  maximum: number
  minimum: number
  iconColor?: string
}

export function MetricCard({
  title,
  icon: Icon,
  average,
  maximum,
  minimum,
  iconColor = "text-foreground",
}: MetricCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Average</span>
          <span className="font-medium">{average}%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Maximum</span>
          <div className="flex items-center gap-1">
            <span className="font-medium">{maximum}%</span>
            <ArrowUpIcon className="h-3 w-3 text-green-500" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Minimum</span>
          <div className="flex items-center gap-1">
            <span className="font-medium">{minimum}%</span>
            <ArrowUpIcon className="h-3 w-3 text-green-500 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  )
}

