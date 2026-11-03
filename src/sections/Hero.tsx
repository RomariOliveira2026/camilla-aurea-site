import { hero } from '../content/site'
import { ButtonLink } from '../components/ui/ButtonLink'
import { InstagramLink } from '../components/ui/InstagramLink'

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
            <p className="hero__subtitle">{hero.subtitle}</p>
          </div>
          <div className="hero__cta">
            <p className="hero__lead">{hero.headline}</p>
            <p className="hero__audience">{hero.audienceNote}</p>
            <div className="hero__actions">
              <ButtonLink href="/#metodo">Conhecer o Método Áurea</ButtonLink>
              <InstagramLink label="Acompanhar no Instagram" />
            </div>
          </div>
        </div>
        <figure className="hero__figure">
          <div className="hero__media">
            <img
              className="hero__image"
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="hero__caption">{hero.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
