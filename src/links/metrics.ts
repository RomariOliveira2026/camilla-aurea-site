import type { VisibleAureoLink } from './types'

/**
 * Medição agregada de cliques — desligada até revisão de privacidade.
 * Não usa cookie, pixel, e-mail, telefone nem identificador pessoal.
 */
export const linkMetrics = {
  enabled: false,
}

export function recordLinkActivation(link: Pick<VisibleAureoLink, 'id'>): void {
  if (!linkMetrics.enabled) return
  void link.id
}
