import { AppLink } from '../ui/AppLink'
import { StatusBadge } from '../ui/StatusBadge'
import {
  entryPath,
  isReleased,
  PILLAR_LABELS,
  statusLabel,
  type EditorialEntry,
  type EditorialSeries,
} from '../../content/library'

type EntryCardProps = {
  series: EditorialSeries
  entry: EditorialEntry
}

export function EntryCard({ series, entry }: EntryCardProps) {
  const released = isReleased(entry.status)
  const title = released && entry.title ? entry.title : `Publicação ${String(entry.order).padStart(2, '0')}`
  const description = released && entry.description
    ? entry.description
    : 'Textos autorais ainda não inseridos.'

  return (
    <article className="entry-card">
      <div className="entry-card__index" aria-hidden="true">
        {String(entry.order).padStart(2, '0')}
      </div>
      <div className="entry-card__body">
        <div className="entry-card__meta">
          <StatusBadge size="sm">{statusLabel[entry.status]}</StatusBadge>
          {released && entry.pillar ? (
            <span className="entry-card__pillar">{PILLAR_LABELS[entry.pillar]}</span>
          ) : null}
        </div>
        <h3 className="entry-card__title">
          <AppLink href={entryPath(series, entry)}>{title}</AppLink>
        </h3>
        <p className="entry-card__description">{description}</p>
      </div>
    </article>
  )
}
