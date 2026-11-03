import { entryCatalog } from './entries'
import { seriesCatalog } from './series'
import type { EditorialEntry, EditorialSeries, EditorialStatus, PillarId } from './types'

export {
  contentFormats,
  formatLabel,
  pillarIds,
  statusLabel,
  type CarouselSlide,
  type ContentFormat,
  type EditorialEntry,
  type EditorialSeries,
  type EditorialStatus,
  type PillarId,
} from './types'

export function isReleased(status: EditorialStatus): boolean {
  return status === 'published'
}

export function getSeriesList(): EditorialSeries[] {
  return [...seriesCatalog].sort((a, b) => a.order - b.order)
}

export function getSeriesBySlug(slug: string): EditorialSeries | undefined {
  return seriesCatalog.find((series) => series.slug === slug)
}

export function getEntriesBySeries(seriesSlug: string): EditorialEntry[] {
  return entryCatalog
    .filter((entry) => entry.seriesSlug === seriesSlug)
    .sort((a, b) => a.order - b.order)
}

export function getEntry(seriesSlug: string, entrySlug: string): EditorialEntry | undefined {
  return entryCatalog.find(
    (entry) => entry.seriesSlug === seriesSlug && entry.slug === entrySlug,
  )
}

export function seriesPath(series: Pick<EditorialSeries, 'slug'>): string {
  return `/biblioteca/${series.slug}`
}

export function entryPath(
  series: Pick<EditorialSeries, 'slug'>,
  entry: Pick<EditorialEntry, 'slug'>,
): string {
  return `/biblioteca/${series.slug}/${entry.slug}`
}

export const PILLAR_LABELS: Record<PillarId, string> = {
  autovalor: 'Autovalor',
  'relacionamentos-conscientes': 'Relacionamentos conscientes',
  'prosperidade-emocional': 'Prosperidade emocional',
  feminilidade: 'Feminilidade',
  'presenca-e-corpo': 'Presença e corpo',
  'espiritualidade-pratica': 'Espiritualidade prática',
  'identidade-e-expressao': 'Identidade e expressão',
}

export const MANUAL_PENDING_NOTE =
  'Os textos autorais desta linha não foram inseridos: o arquivo “Manual Marca Camilla Áurea — Provocações Áureas” não estava disponível no workspace. Nada aqui substitui o original.'
