import { Navigate, useParams } from 'react-router-dom'
import { AppLink } from '../components/ui/AppLink'
import { ButtonLink } from '../components/ui/ButtonLink'
import {
  formatReflectionDate,
  getReflectionBySlug,
  isPublished,
  reflectionPath,
  reflectionsIndex,
  stageLabel,
  territoryLabel,
} from '../content/reflections'
import { disclaimer, publicUrl } from '../content/site'
import { usePageMeta } from '../hooks/usePageTitle'

export function ReflectionPage() {
  const { slug = '' } = useParams()
  const article = getReflectionBySlug(slug)

  if (!article || !isPublished(article)) {
    return <Navigate to={reflectionsIndex.path} replace />
  }

  return <ReflectionArticle article={article} />
}

function ReflectionArticle({
  article,
}: {
  article: NonNullable<ReturnType<typeof getReflectionBySlug>>
}) {
  usePageMeta({
    title: `${article.title} — Camilla Áurea`,
    description: article.excerpt,
    canonical: publicUrl(reflectionPath(article.slug)),
    image: article.cover ? publicUrl(article.cover.src) : publicUrl('/og-links.png'),
    imageAlt: article.cover?.alt ?? 'Camilla Áurea. O ouro já estava em você.',
  })

  return (
    <article className="reflection">
      <div className="container reflection__inner">
        <header className="reflection__header">
          <nav className="breadcrumbs" aria-label="Trilha de navegação">
            <ol role="list">
              <li>
                <AppLink href="/">Início</AppLink>
              </li>
              <li>
                <AppLink href={reflectionsIndex.path}>Reflexões</AppLink>
              </li>
              <li>
                <span aria-current="page">{article.title}</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">{article.category}</p>
          <h1 className="reflection__title">{article.title}</h1>
          <p className="reflection__subtitle">{article.subtitle}</p>
          <p className="reflection__byline">
            <span>{article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatReflectionDate(article.publishedAt)}</time>
          </p>
          <p className="reflection__meta">
            <span>Território: {territoryLabel[article.territory]}</span>
            <span aria-hidden="true">·</span>
            <span>
              Etapa:{' '}
              <AppLink href="/#metodo">{stageLabel[article.stage]}</AppLink>
            </span>
          </p>
        </header>

        {article.cover ? (
          <figure className="reflection__cover">
            <img
              src={article.cover.src}
              alt={article.cover.alt}
              width={article.cover.width}
              height={article.cover.height}
              decoding="async"
            />
          </figure>
        ) : null}

        <div className="reflection__body">
          {article.blocks.map((block) =>
            block.type === 'quote' ? (
              <blockquote key={block.text} className="reflection__quote">
                {block.text}
              </blockquote>
            ) : (
              <p key={block.text}>{block.text}</p>
            ),
          )}
        </div>

        <p className="reflection__disclaimer">{disclaimer}</p>

        <p className="page__back">
          <ButtonLink href={reflectionsIndex.path} variant="text">
            Todas as reflexões
          </ButtonLink>
        </p>
      </div>
    </article>
  )
}
