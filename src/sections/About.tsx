import { aboutPage } from '../content/aboutPage'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Section } from '../components/ui/Section'

export function About() {
  return (
    <Section id="sobre" eyebrow={aboutPage.presentation.eyebrow} title={aboutPage.title}>
      <div className="about">
        <figure className="about__media">
          <img
            className="about__image"
            src={aboutPage.image.src}
            alt={aboutPage.image.alt}
            width={aboutPage.image.width}
            height={aboutPage.image.height}
            decoding="async"
          />
        </figure>
        <div className="about__body">
          <p className="about__subtitle">{aboutPage.subtitle}</p>
          <p>{aboutPage.presentation.lead}</p>
          <p>
            <ButtonLink href={aboutPage.path} variant="text">
              Ler a trajetória
            </ButtonLink>
          </p>
        </div>
      </div>
    </Section>
  )
}
