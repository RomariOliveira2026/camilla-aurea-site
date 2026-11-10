import type { CaptureMode, CaptureResult, LeadPayload } from './types'

/**
 * Integração de envio ainda não homologada.
 * `live` só deve ser ligado com um provedor real e credenciais de produção —
 * nunca com chaves fictícias.
 */
export const captureConfig = {
  mode: 'demo' as CaptureMode,
  providerName: null as string | null,
}

const DEMO_SUCCESS =
  'Demonstração: nenhum dado foi enviado nem armazenado. A captação real ainda não está homologada.'
const DEMO_ERROR =
  'Demonstração de erro: o envio não foi concluído. Nenhum dado foi transmitido.'
const UNAVAILABLE =
  'O envio do guia ainda não está disponível. Nenhum dado foi coletado.'

/** E-mail reservado só para revisar o estado de erro da interface. */
export const DEMO_ERROR_EMAIL = 'erro@demonstracao.local'

export function isCaptureLive(): boolean {
  return captureConfig.mode === 'live' && Boolean(captureConfig.providerName)
}

export async function submitLead(payload: LeadPayload): Promise<CaptureResult> {
  if (!isCaptureLive()) {
    await wait(preferReducedMotion() ? 0 : 700)
    if (payload.email.trim().toLowerCase() === DEMO_ERROR_EMAIL) {
      return { status: 'error', message: DEMO_ERROR }
    }
    return { status: 'demo', message: DEMO_SUCCESS }
  }

  return { status: 'unavailable', message: UNAVAILABLE }
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function preferReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
