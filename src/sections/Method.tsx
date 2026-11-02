import { method } from '../content/site'
import { Section } from '../components/ui/Section'

export function Method() {
  return (
    <Section id="metodo" tone="alt" eyebrow={method.eyebrow} title={method.title} intro={method.intro}>
      <ol role="list" className="method">
        {method.steps.map((step) => (
          <li key={step.name} className="method__step">
            <span className="method__number" aria-hidden="true">
              {step.number}
            </span>
            <h3 className="method__name">
              <span className="sr-only">Etapa {Number(step.number)}: </span>
              {step.name}
            </h3>
            <p className="method__summary">{step.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
