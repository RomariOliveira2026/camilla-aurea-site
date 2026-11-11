import type { ReactNode } from 'react'
import { AureaSymbolSlot } from '../components/about/AureaSymbols'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Wordmark } from '../components/ui/Wordmark'
import { aboutPage } from '../content/aboutPage'
import { publicUrl } from '../content/site'
import { usePageMeta } from '../hooks/usePageTitle'

function emphasize(text: string, phrase: string): ReactNode {
  const index = text.indexOf(phrase)
  if (index < 0) return text
  return (
    <>
      {text.slice(0, index)}
      <strong>{phrase}</strong>
      {text.slice(index + phrase.length)}
    </>
  )
}

export function SobrePage() {
  usePageMeta({
    title: `${aboutPage.metaTitle} — Camilla Áurea`,
    description: aboutPage.metaDescription,
    canonical: publicUrl(aboutPage.path),
    image: publicUrl('/og-links.png'),
    imageAlt: 'Camilla Áurea. O ouro já estava em você.',
  })

  const { presentation, history, methodBirth, philosophy, closing, methodCta } = aboutPage

  return (
    <article className="sobre">
      <header className="sobre-hero">
        <div className="container sobre-hero__grid">
          <figure className="sobre-hero__media">
            <img
              className="sobre-hero__image"
              src={aboutPage.image.src}
              alt={aboutPage.image.alt}
              width={aboutPage.image.width}
              height={aboutPage.image.height}
              decoding="async"
              fetchPriority="high"
            />
          </figure>
          <div className="sobre-hero__copy">
            <p className="eyebrow">{presentation.eyebrow}</p>
            <h1 className="sobre-hero__title">{aboutPage.title}</h1>
            <p className="sobre-hero__subtitle">{aboutPage.subtitle}</p>
            <p className="sobre-hero__lead">{presentation.lead}</p>
          </div>
        </div>
      </header>

      <section className="sobre-block sobre-block--history" aria-labelledby="sobre-historia-titulo">
        <div className="container sobre-block__inner sobre-block__inner--read">
          <p className="eyebrow">{history.eyebrow}</p>
          <h2 id="sobre-historia-titulo" className="sobre-block__title">
            {history.title}
          </h2>
          {history.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="sobre-quote">{history.question}</blockquote>
          {history.afterQuestion.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="sobre-quote sobre-quote--conviction">
            {history.conviction}
          </blockquote>
        </div>
      </section>

      <section className="sobre-block sobre-block--method" aria-labelledby="sobre-metodo-titulo">
        <div className="container">
          <header className="sobre-method__intro">
            <p className="eyebrow">{methodBirth.eyebrow}</p>
            <h2 id="sobre-metodo-titulo" className="sobre-block__title">
              {methodBirth.title}
            </h2>
            <p>{emphasize(methodBirth.intro, 'Método Áurea')}</p>
          </header>
          <ul role="list" className="sobre-movements">
            {methodBirth.movements.map((movement) => (
              <li key={movement.id} className="sobre-movement">
                <AureaSymbolSlot name={movement.symbol} label={movement.symbolLabel} />
                <h3 className="sobre-movement__heading">{movement.heading}</h3>
                <p className="sobre-movement__body">{movement.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sobre-block sobre-block--philosophy" aria-labelledby="sobre-filosofia-titulo">
        <div className="container sobre-block__inner sobre-block__inner--philosophy">
          <p className="eyebrow">{philosophy.eyebrow}</p>
          <h2 id="sobre-filosofia-titulo" className="sobre-block__title">
            {philosophy.title}
          </h2>
          {philosophy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="sobre-quote">{philosophy.power}</blockquote>
          <blockquote className="sobre-quote sobre-quote--luxury">
            {emphasize(philosophy.luxury, 'Luxo Afetivo')}
          </blockquote>
          <p>
            Atualmente, vivo em Florianópolis, onde desenvolvo o universo Áurea e me dedico também à
            escrita de <em>{philosophy.bookTitle}</em>, uma obra autoral sobre as travessias da
            experiência feminina.
          </p>
          {philosophy.after.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="sobre-close on-dark" aria-labelledby="sobre-encerramento-titulo">
        <div className="container sobre-close__inner">
          <h2 id="sobre-encerramento-titulo" className="sr-only">
            Encerramento
          </h2>
          <div className="sobre-close__mark-wrap" aria-hidden="true">
            <Wordmark className="sobre-close__mark" />
          </div>
          <p className="sobre-close__statement">{closing.statement}</p>
          <p className="sobre-close__phrase">{closing.phrase}</p>
          <p className="sobre-close__name">{closing.name}</p>
          <p className="sobre-close__role">{closing.role}</p>
          <p className="sobre-close__cta">
            <ButtonLink href={methodCta.href} variant="cta">
              {methodCta.label}
            </ButtonLink>
          </p>
        </div>
      </section>
    </article>
  )
}
