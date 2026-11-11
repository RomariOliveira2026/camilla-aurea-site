import { AppLink } from '../ui/AppLink'
import { ButtonLink } from '../ui/ButtonLink'
import {
  formatReflectionDate,
  reflectionPath,
  stageLabel,
  territoryLabel,
  type ReflectionArticle,
} from '../../content/reflections'

type ReflectionCardProps = {
  article: ReflectionArticle
}

export function ReflectionCard({ article }: ReflectionCardProps) {
  const href = reflectionPath(article.slug)

  return (
    <article className="reflection-card">
      <p className="eyebrow">{article.category}</p>
      <h3 className="reflection-card__title">
        <AppLink href={href}>{article.title}</AppLink>
      </h3>
      <p className="reflection-card__subtitle">{article.subtitle}</p>
      <p className="reflection-card__meta">
        <span>{territoryLabel[article.territory]}</span>
        <span aria-hidden="true">·</span>
        <span>{stageLabel[article.stage]}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={article.publishedAt}>{formatReflectionDate(article.publishedAt)}</time>
      </p>
      <p className="reflection-card__action">
        <ButtonLink href={href} variant="text">
          Ler a reflexão
        </ButtonLink>
      </p>
    </article>
  )
}
