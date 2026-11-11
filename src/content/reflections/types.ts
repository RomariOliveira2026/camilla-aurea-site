import type { SiteImage } from '../site'

export const reflectionStatuses = ['draft', 'approved', 'published'] as const

export type ReflectionStatus = (typeof reflectionStatuses)[number]

export const reflectionTerritories = ['poder', 'valor', 'presenca', 'expressao'] as const

export type ReflectionTerritory = (typeof reflectionTerritories)[number]

export const reflectionStages = ['minerar', 'lapidar', 'brilhar'] as const

export type ReflectionStage = (typeof reflectionStages)[number]

export type ReflectionBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }

export type ReflectionArticle = {
  id: string
  slug: string
  title: string
  subtitle: string
  author: string
  category: string
  territory: ReflectionTerritory
  stage: ReflectionStage
  excerpt: string
  /** Data real de publicação no site, ISO `YYYY-MM-DD`. */
  publishedAt: string
  /** Data real de atualização, quando houver. */
  updatedAt?: string
  cover?: SiteImage
  blocks: ReflectionBlock[]
  status: ReflectionStatus
  order: number
}

export const territoryLabel: Record<ReflectionTerritory, string> = {
  poder: 'Poder',
  valor: 'Valor',
  presenca: 'Presença',
  expressao: 'Expressão',
}

export const stageLabel: Record<ReflectionStage, string> = {
  minerar: 'Minerar',
  lapidar: 'Lapidar',
  brilhar: 'Brilhar',
}

export const statusLabel: Record<ReflectionStatus, string> = {
  draft: 'Rascunho',
  approved: 'Aprovado',
  published: 'Publicado',
}

export const reflectionsIndex = {
  path: '/reflexoes',
  eyebrow: 'Reflexões',
  title: 'Reflexões e artigos',
  intro: 'Textos sobre os temas do Método Áurea.',
  metaTitle: 'Reflexões Áureas',
  metaDescription:
    'Reflexões de Camilla Áurea sobre valor, pertencimento e a coragem de voltar para si.',
} as const

export function reflectionPath(slug: string): string {
  return `${reflectionsIndex.path}/${slug}`
}

export function formatReflectionDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
