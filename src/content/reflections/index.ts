import type { ReflectionArticle } from './types'
import { voceSeAbandonouTentandoSerAmada } from './voce-se-abandonou-tentando-ser-amada'

export {
  formatReflectionDate,
  reflectionPath,
  reflectionsIndex,
  stageLabel,
  statusLabel,
  territoryLabel,
  type ReflectionArticle,
  type ReflectionBlock,
  type ReflectionStage,
  type ReflectionStatus,
  type ReflectionTerritory,
} from './types'

const catalog: ReflectionArticle[] = [voceSeAbandonouTentandoSerAmada]

export function getPublishedReflections(): ReflectionArticle[] {
  return catalog
    .filter((article) => article.status === 'published')
    .sort((a, b) => a.order - b.order)
}

export function getReflectionBySlug(slug: string): ReflectionArticle | undefined {
  return catalog.find((article) => article.slug === slug)
}

export function isPublished(article: ReflectionArticle): boolean {
  return article.status === 'published'
}
