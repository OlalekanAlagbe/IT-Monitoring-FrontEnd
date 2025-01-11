export const RESOURCE_THRESHOLDS = {
  WARNING: 75,
  CRITICAL: 85,
} as const;

export const METRIC_RANGES = {
  production: { min: 0.8, max: 1.2 },
  staging: { min: 0.6, max: 1.4 },
  development: { min: 0.4, max: 1.6 },
} as const;