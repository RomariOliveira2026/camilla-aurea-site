/*
 * Modelo reutilizável de linhas editoriais da Biblioteca Áurea.
 * Novas séries entram no registro (series.ts + entries.ts) sem alterar componentes.
 */

import type { SiteImage } from '../site'

export const editorialStatuses = [
  'in-preparation',
  'ready-for-review',
  'published',
] as const

export type EditorialStatus = (typeof editorialStatuses)[number]

export const contentFormats = ['carousel', 'article', 'reflection'] as const

export type ContentFormat = (typeof contentFormats)[number]

export const pillarIds = [
  'autovalor',
  'relacionamentos-conscientes',
  'prosperidade-emocional',
  'feminilidade',
  'presenca-e-corpo',
  'espiritualidade-pratica',
  'identidade-e-expressao',
] as const

export type PillarId = (typeof pillarIds)[number]

export type CarouselSlide = {
  order: number
  text: string
}

export type EditorialSeries = {
  slug: string
  title: string
  description: string
  format: ContentFormat
  frequency: string
  status: EditorialStatus
  order: number
  cover?: SiteImage
}

export type EditorialEntry = {
  slug: string
  seriesSlug: string
  /** Identificador interno de ordem editorial. Não é título público. */
  editorialKey?: string
  title: string
  description: string
  pillar?: PillarId
  tags: string[]
  /** Texto narrativo autoral. Vazio até o manual ser inserido. */
  narrative: string
  /** Provocações em carrossel, distintas do texto narrativo. */
  slides: CarouselSlide[]
  image?: SiteImage
  order: number
  status: EditorialStatus
}

export const statusLabel: Record<EditorialStatus, string> = {
  'in-preparation': 'Em preparação',
  'ready-for-review': 'Aguardando revisão',
  published: 'Publicado',
}

export const formatLabel: Record<ContentFormat, string> = {
  carousel: 'Carrossel',
  article: 'Artigo',
  reflection: 'Reflexão',
}
