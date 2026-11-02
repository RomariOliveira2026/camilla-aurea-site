import { about } from '../content/site'
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder'
import { Section } from '../components/ui/Section'

export function About() {
  return (
    <Section id="sobre" eyebrow={about.eyebrow} title={about.title}>
      <div className="about">
        <MediaPlaceholder
          className="about__media"
          description="Espaço reservado para fotografia oficial de Camilla, ainda não fornecida."
        />
        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pending-note">
            <span className="pending-note__label">Em preparação</span>
            {about.pendingNote}
          </p>
        </div>
      </div>
    </Section>
  )
}
