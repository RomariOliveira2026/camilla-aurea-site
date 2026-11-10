import { LeadCaptureForm } from '../components/capture/LeadCaptureForm'
import { GuideMockup } from '../components/capture/GuideMockup'
import { hero } from '../content/site'

export function Hero() {
  return (
    <section id="inicio" className="hero on-dark" aria-labelledby="inicio-titulo">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__intro">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="inicio-titulo" className="hero__title">
              {hero.title}
            </h1>
          </div>
          <div className="hero__offer">
            <p className="hero__description">{hero.description}</p>
            <p className="hero__presentation">{hero.presentation}</p>
          </div>
          <div className="hero__form">
            <LeadCaptureForm source="home-hero" tone="dark" />
          </div>
        </div>
        <div className="hero__figure">
          <GuideMockup caption={hero.imageCaption} priority />
        </div>
      </div>
    </section>
  )
}
