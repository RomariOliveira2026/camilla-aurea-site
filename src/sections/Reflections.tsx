import { reflections } from '../content/site'
import { InstagramLink } from '../components/ui/InstagramLink'
import { Section } from '../components/ui/Section'

export function Reflections() {
  return (
    <Section
      id="reflexoes"
      eyebrow={reflections.eyebrow}
      title={reflections.title}
      intro={reflections.intro}
    >
      <div className="empty-state">
        <p className="empty-state__text">{reflections.emptyState}</p>
        <p className="empty-state__hint">Enquanto isso, acompanhe as publicações no canal oficial.</p>
        <InstagramLink variant="text" />
      </div>
    </Section>
  )
}
