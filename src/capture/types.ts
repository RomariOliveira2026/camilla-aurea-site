export type CaptureSource = 'home-hero' | 'minerar-landing'

export type CaptureMode = 'demo' | 'live'

export type LeadPayload = {
  firstName: string
  email: string
  marketingOptIn: boolean
  source: CaptureSource
}

export type CaptureResult =
  | { status: 'demo'; message: string }
  | { status: 'error'; message: string }
  | { status: 'unavailable'; message: string }
