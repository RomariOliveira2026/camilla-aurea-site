import { ReflectionCard } from '../components/reflections/ReflectionCard'
import { ButtonLink } from '../components/ui/ButtonLink'
import { InstagramLink } from '../components/ui/InstagramLink'
import { Section } from '../components/ui/Section'
import { getPublishedReflections, reflectionsIndex } from '../content/reflections'
import { reflections } from '../content/site'

export function Reflections() {
  const articles = getPublishedReflections()

  return (
    <Section
      id="reflexoes"
      eyebrow={reflections.eyebrow}
      title={reflections.title}
      intro={reflections.intro}
    >
      {articles.length > 0 ? (
        <>
          <ul role="list" className="home-reflexoes">
            {articles.map((article) => (
              <li key={article.id}>
                <ReflectionCard article={article} />
              </li>
            ))}
          </ul>
          <p className="home-reflexoes__more">
            <ButtonLink href={reflectionsIndex.path} variant="secondary">
              Ver todas as reflexões
            </ButtonLink>
          </p>
        </>
      ) : (
        <div className="empty-state">
          <p className="empty-state__text">{reflections.emptyState}</p>
          <p className="empty-state__hint">Enquanto isso, acompanhe as publicações no canal oficial.</p>
          <InstagramLink />
        </div>
      )}
    </Section>
  )
}
