import type { MouseEvent } from 'react'
import { LeadCaptureForm } from '../components/capture/LeadCaptureForm'
import { GuideMockup } from '../components/capture/GuideMockup'
import { AppLink } from '../components/ui/AppLink'
import { ButtonLink } from '../components/ui/ButtonLink'
import { leadFormCopy, minerarLanding } from '../content/capture'
import { minerarFormHref, minerarGuide } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

function focusGuideForm(behavior: ScrollBehavior = 'smooth') {
  const section = document.getElementById(minerarGuide.formAnchor)
  if (!section) return
  section.scrollIntoView({ behavior, block: 'start' })
  const field = section.querySelector<HTMLElement>(
    'input:not([type="hidden"]):not([disabled]), textarea, select',
  )
  ;(field ?? section).focus({ preventScroll: true })
}

export function MinerarPage() {
  usePageTitle('MINERAR')

  const onFoldCta = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    focusGuideForm(reduce ? 'auto' : 'smooth')
    const href = minerarFormHref()
    if (window.location.hash !== `#${minerarGuide.formAnchor}`) {
      window.history.replaceState(null, '', href)
    }
  }

  return (
    <div className="minerar-page">
      <section className="minerar-intro on-dark" aria-labelledby="minerar-titulo">
        <div className="container minerar-intro__inner">
          <div className="minerar-intro__copy">
            <p className="eyebrow">{minerarLanding.eyebrow}</p>
            <h1 id="minerar-titulo" className="minerar-intro__title">
              {minerarLanding.headline}
            </h1>
            <p className="minerar-intro__benefit">{minerarLanding.benefit}</p>
            <p className="minerar-intro__presentation">{minerarLanding.presentation}</p>
            <p className="minerar-intro__actions">
              <ButtonLink href={minerarFormHref()} variant="cta" onClick={onFoldCta}>
                {minerarLanding.foldCta}
              </ButtonLink>
            </p>
          </div>
          <GuideMockup priority />
        </div>
      </section>

      <section
        id={minerarGuide.formAnchor}
        className="section section--alt minerar-signup-section"
        aria-labelledby="inscricao-titulo"
        tabIndex={-1}
      >
        <div className="container minerar-signup">
          <div>
            <p className="eyebrow">{minerarLanding.formEyebrow}</p>
            <h2 id="inscricao-titulo" className="section__title">
              {minerarLanding.formTitle}
            </h2>
            <p className="section__intro">{minerarLanding.formIntro}</p>
          </div>
          <div>
            <LeadCaptureForm source="minerar-landing" tone="light" showPrivacyNote={false} />
            <p className="minerar-privacy">
              {minerarLanding.privacyCompact}{' '}
              <AppLink href={leadFormCopy.privacyHref}>{leadFormCopy.privacyLinkLabel}</AppLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--light minerar-experience" aria-labelledby="experiencia-titulo">
        <div className="container">
          <p className="eyebrow">{minerarLanding.experienceEyebrow}</p>
          <h2 id="experiencia-titulo" className="section__title">
            {minerarLanding.experienceTitle}
          </h2>
          <p className="section__intro">{minerarLanding.experienceIntro}</p>
          <ul className="minerar-benefits" role="list">
            {minerarLanding.pdfBenefits.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="minerar-experience__note">{minerarLanding.experienceNote}</p>
        </div>
      </section>

      <section className="section section--dark on-dark minerar-method" aria-labelledby="metodo-convite-titulo">
        <div className="container container--narrow">
          <p className="eyebrow">{minerarLanding.methodEyebrow}</p>
          <h2 id="metodo-convite-titulo" className="section__title">
            {minerarLanding.methodTitle}
          </h2>
          <p className="section__intro">{minerarLanding.methodText}</p>
          <p className="minerar-method__action">
            <ButtonLink href={minerarLanding.methodHref} variant="primary">
              {minerarLanding.methodCta}
            </ButtonLink>
          </p>
        </div>
      </section>
    </div>
  )
}
