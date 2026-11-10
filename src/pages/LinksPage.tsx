import { AureoLinkCard } from '../components/links/AureoLinkCard'
import { LinksShare } from '../components/links/LinksShare'
import { Wordmark } from '../components/ui/Wordmark'
import { aureaLinksUrl } from '../content/site'
import { getVisibleLinks, getVisibleSocials, linksHub, linksShare } from '../content/links'
import { usePageMeta } from '../hooks/usePageTitle'

export function LinksPage() {
  usePageMeta({
    title: linksHub.title,
    description: linksHub.description,
    canonical: aureaLinksUrl(),
    image: linksShare.ogImage,
    imageAlt: linksShare.ogImageAlt,
  })
  const items = getVisibleLinks()
  const socials = getVisibleSocials()

  return (
    <div className="links-page on-dark">
      <header className="links-page__header">
        <Wordmark className="links-page__logo" />
        {linksHub.portrait.enabled ? (
          <span className="links-page__portrait-frame">
            <img
              className="links-page__portrait"
              src={linksHub.portrait.src}
              alt={linksHub.portrait.alt}
              width={linksHub.portrait.width}
              height={linksHub.portrait.height}
              decoding="async"
            />
          </span>
        ) : null}
        <p className="links-page__eyebrow">{linksHub.eyebrow}</p>
        <h1 className="links-page__name">{linksHub.name}</h1>
        <p className="links-page__tagline">{linksHub.tagline}</p>
        <p className="links-page__phrase">{linksHub.phrase}</p>
      </header>

      <nav className="links-page__nav" aria-label={linksHub.eyebrow}>
        <ul className="links-page__list" role="list">
          {items.map((link) => (
            <li key={link.id}>
              <AureoLinkCard link={link} />
            </li>
          ))}
        </ul>
      </nav>

      {socials.length > 0 ? (
        <ul className="links-page__socials" role="list">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                className="links-social"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialGlyph name={item.id} />
                <span className="sr-only">
                  {item.label} (abre em nova aba)
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <LinksShare />

      <p className="links-page__signoff">{linksHub.signoff}</p>
    </div>
  )
}

function SocialGlyph({ name }: { name: string }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.4" cy="7.6" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  return null
}
