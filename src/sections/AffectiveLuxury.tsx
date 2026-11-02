import { affectiveLuxury } from '../content/site'
import { Section } from '../components/ui/Section'

export function AffectiveLuxury() {
  return (
    <Section id="luxo-afetivo" tone="dark" eyebrow={affectiveLuxury.eyebrow} title={affectiveLuxury.title}>
      <p className="luxury__lead">{affectiveLuxury.lead}</p>
      <ul role="list" className="luxury__principles">
        {affectiveLuxury.principles.map((principle) => (
          <li key={principle.title} className="luxury__principle">
            <h3 className="luxury__principle-title">{principle.title}</h3>
            <p>{principle.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
