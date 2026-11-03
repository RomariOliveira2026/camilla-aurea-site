import { Navigate, useParams } from 'react-router-dom'
import { Carousel } from '../components/library/Carousel'
import { PageHeader } from '../components/library/PageHeader'
import { ButtonLink } from '../components/ui/ButtonLink'
import {
  getEntry,
  getSeriesBySlug,
  isReleased,
  MANUAL_PENDING_NOTE,
  PILLAR_LABELS,
  seriesPath,
  statusLabel,
} from '../content/library'
import { usePageTitle } from '../hooks/usePageTitle'

export function EntryPage() {
  const { seriesSlug = '', entrySlug = '' } = useParams()
  const series = getSeriesBySlug(seriesSlug)
  const entry = series ? getEntry(series.slug, entrySlug) : undefined
  const released = Boolean(entry && isReleased(entry.status) && entry.title)
  const title = released && entry ? entry.title : `Publicação ${String(entry?.order ?? '').padStart(2, '0')}`
  usePageTitle(series ? `${title} · ${series.title}` : undefined)

  if (!series || !entry) return <Navigate to="/biblioteca" replace />

  const hasNarrative = released && entry.narrative.trim().length > 0
  const hasSlides = released && entry.slides.length > 0

  return (
    <article className="page">
      <div className="container container--narrow">
        <PageHeader
          eyebrow={series.title}
          title={title}
          intro={released ? entry.description : undefined}
          status={statusLabel[entry.status]}
          crumbs={[
            { href: '/', label: 'Início' },
            { href: '/biblioteca', label: 'Biblioteca Áurea' },
            { href: seriesPath(series), label: series.title },
            { label: title },
          ]}
        />

        {released && entry.pillar ? (
          <p className="entry-page__pillar">Pilar: {PILLAR_LABELS[entry.pillar]}</p>
        ) : null}

        {released && entry.tags.length > 0 ? (
          <ul role="list" className="entry-page__tags">
            {entry.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}

        {hasNarrative ? (
          <div className="entry-page__narrative">
            {entry.narrative.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="pending-note">
            <span className="pending-note__label">Conteúdo autoral pendente</span>
            {MANUAL_PENDING_NOTE} Esta página reserva a posição editorial e não publica texto substituto.
          </p>
        )}

        {hasSlides ? <Carousel slides={entry.slides} label="Provocações em carrossel" /> : null}

        <p className="page__back">
          <ButtonLink href={seriesPath(series)} variant="text">
            Voltar a {series.title}
          </ButtonLink>
        </p>
      </div>
    </article>
  )
}
