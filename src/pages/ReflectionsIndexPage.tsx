import { ReflectionCard } from '../components/reflections/ReflectionCard'
import { ButtonLink } from '../components/ui/ButtonLink'
import { InstagramLink } from '../components/ui/InstagramLink'
import {
  getPublishedReflections,
  reflectionsIndex,
} from '../content/reflections'
import { publicUrl } from '../content/site'
import { usePageMeta } from '../hooks/usePageTitle'

export function ReflectionsIndexPage() {
  const articles = getPublishedReflections()

  usePageMeta({
    title: `${reflectionsIndex.metaTitle} — Camilla Áurea`,
    description: reflectionsIndex.metaDescription,
    canonical: publicUrl(reflectionsIndex.path),
    image: publicUrl('/og-links.png'),
    imageAlt: 'Camilla Áurea. O ouro já estava em você.',
  })

  return (
    <div className="page reflexoes-index">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">{reflectionsIndex.eyebrow}</p>
          <h1 className="page-header__title">{reflectionsIndex.title}</h1>
          <p className="page-header__intro">{reflectionsIndex.intro}</p>
        </header>

        {articles.length > 0 ? (
          <ul role="list" className="reflexoes-index__list">
            {articles.map((article) => (
              <li key={article.id}>
                <ReflectionCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <p className="empty-state__text">Nenhuma reflexão publicada ainda.</p>
            <p className="empty-state__hint">Enquanto isso, acompanhe as publicações no canal oficial.</p>
            <InstagramLink />
          </div>
        )}

        <p className="page__back">
          <ButtonLink href="/" variant="text">
            Voltar ao início
          </ButtonLink>
        </p>
      </div>
    </div>
  )
}
