import { Navigate, useParams } from 'react-router-dom'
import { EntryCard } from '../components/library/EntryCard'
import { PageHeader } from '../components/library/PageHeader'
import { ButtonLink } from '../components/ui/ButtonLink'
import {
  formatLabel,
  getEntriesBySeries,
  getSeriesBySlug,
  MANUAL_PENDING_NOTE,
  statusLabel,
} from '../content/library'
import { usePageTitle } from '../hooks/usePageTitle'

export function SeriesPage() {
  const { seriesSlug = '' } = useParams()
  const series = getSeriesBySlug(seriesSlug)
  usePageTitle(series?.title)

  if (!series) return <Navigate to="/biblioteca" replace />

  const entries = getEntriesBySeries(series.slug)
  const awaitingManual = series.slug === 'provocacoes-aureas'

  return (
    <div className="page">
      <div className="container">
        <PageHeader
          eyebrow={formatLabel[series.format]}
          title={series.title}
          intro={series.description}
          status={statusLabel[series.status]}
          crumbs={[
            { href: '/', label: 'Início' },
            { href: '/biblioteca', label: 'Biblioteca Áurea' },
            { label: series.title },
          ]}
        />

        <p className="series-page__frequency">{series.frequency}</p>

        {awaitingManual ? (
          <p className="pending-note">
            <span className="pending-note__label">Manual pendente</span>
            {MANUAL_PENDING_NOTE}
          </p>
        ) : null}

        <h2 className="library__subtitle library__subtitle--spaced">Publicações</h2>
        <ul role="list" className="entry-grid">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <EntryCard series={series} entry={entry} />
            </li>
          ))}
        </ul>

        <p className="page__back">
          <ButtonLink href="/biblioteca" variant="text">
            Voltar à Biblioteca Áurea
          </ButtonLink>
        </p>
      </div>
    </div>
  )
}
