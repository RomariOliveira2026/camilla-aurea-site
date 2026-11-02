import { library, pillars } from '../content/site'
import { Section } from '../components/ui/Section'
import { StatusBadge } from '../components/ui/StatusBadge'

export function Library() {
  return (
    <Section
      id="biblioteca"
      tone="alt"
      eyebrow={library.eyebrow}
      title={library.title}
      intro={library.intro}
      aside={<StatusBadge>{library.status}</StatusBadge>}
    >
      <h3 className="library__subtitle">Sete pilares temáticos</h3>
      <ul role="list" className="library">
        {pillars.map((pillar, index) => (
          <li key={pillar} className="library__item">
            <span className="library__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="library__name">{pillar}</span>
            <StatusBadge size="sm">{library.status}</StatusBadge>
          </li>
        ))}
      </ul>
    </Section>
  )
}
