import { territories } from '../content/site'
import { Section } from '../components/ui/Section'

export function Territories() {
  return (
    <Section
      id="territorios"
      eyebrow={territories.eyebrow}
      title={territories.title}
      intro={territories.intro}
    >
      <ul role="list" className="territories">
        {territories.items.map((item) => (
          <li key={item.name} className="territory">
            <h3 className="territory__name">{item.name}</h3>
            <p className="territory__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
