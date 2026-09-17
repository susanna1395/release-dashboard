export type ReadinessStatus = 'ready' | 'at-risk' | 'blocked'

export type CheckCategory =
  | 'Accessibility'
  | 'API'
  | 'Observability'
  | 'Security'
  | 'Performance'
  | 'UX'
  | 'Testing'
  | 'Delivery'

export interface ReadinessCheck {
  id: string
  category: CheckCategory
  title: string
  owner: string
  status: ReadinessStatus
  note: string
}

export interface Release {
  id: string
  name: string
  version: string
  owner: string
  targetDate: string
  environment: string
  summary: string
  checks: ReadinessCheck[]
}
