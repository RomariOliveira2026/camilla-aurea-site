import { ButtonLink } from '../components/ui/ButtonLink'
import { SeriesCard } from '../components/library/SeriesCard'
import { Section } from '../components/ui/Section'
import { StatusBadge } from '../components/ui/StatusBadge'
import { getSeriesList } from '../content/library'
import { library, pillars } from '../content/site'

export function Library() {
  const series = getSeriesList()

  return (
    <Section
      id="biblioteca"
      tone="alt"
      eyebrow={library.eyebrow}
      title={library.title}
      intro={library.intro}
      aside={<StatusBadge>{library.status}</StatusBadge>}
    >
      <h3 className="library__subtitle">Linhas editoriais</h3>
      <ul role="list" className="series-grid">
        {series.map((item) => (
          <li key={item.slug}>
            <SeriesCard series={item} />
          </li>
        ))}
      </ul>

      <h3 className="library__subtitle library__subtitle--spaced">Sete pilares temáticos</h3>
      <ul role="list" className="library">
        {pillars.map((pillar, index) => (
          <li key={pillar} className="library__item">
            <span className="library__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="library__name">{pillar}</span>
            <StatusBadge size="sm">Transversal</StatusBadge>
          </li>
        ))}
      </ul>

      <p className="library__more">
        <ButtonLink href="/biblioteca" variant="secondary">
          Abrir a Biblioteca Áurea
        </ButtonLink>
      </p>
    </Section>
  )
}
