import { about } from '../content/site'
import { Section } from '../components/ui/Section'

export function About() {
  return (
    <Section id="sobre" eyebrow={about.eyebrow} title={about.title}>
      <div className="about">
        <figure className="about__media">
          <img
            className="about__image"
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            decoding="async"
          />
        </figure>
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
