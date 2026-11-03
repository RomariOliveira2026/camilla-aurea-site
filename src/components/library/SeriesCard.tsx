import { AppLink } from '../ui/AppLink'
import { StatusBadge } from '../ui/StatusBadge'
import {
  formatLabel,
  seriesPath,
  statusLabel,
  type EditorialSeries,
} from '../../content/library'

type SeriesCardProps = {
  series: EditorialSeries
}

export function SeriesCard({ series }: SeriesCardProps) {
  return (
    <article className="series-card">
      <div className="series-card__meta">
        <span className="series-card__format">{formatLabel[series.format]}</span>
        <StatusBadge size="sm">{statusLabel[series.status]}</StatusBadge>
      </div>
      <h3 className="series-card__title">
        <AppLink href={seriesPath(series)}>{series.title}</AppLink>
      </h3>
      <p className="series-card__description">{series.description}</p>
      <p className="series-card__frequency">{series.frequency}</p>
      <AppLink href={seriesPath(series)} className="btn btn--text">
        Ver a linha editorial
      </AppLink>
    </article>
  )
}
