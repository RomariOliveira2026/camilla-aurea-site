import { instagram } from '../../content/site'
import { AppLink } from './AppLink'

type InstagramLinkProps = {
  handle?: string
}

export function InstagramLink({ handle = instagram.handle }: InstagramLinkProps) {
  if (!instagram.confirmed) {
    return <span className="instagram-link instagram-link--muted">Instagram — em confirmação</span>
  }

  return (
    <AppLink className="instagram-link" href={instagram.url} external>
      <InstagramGlyph />
      <span className="sr-only">Instagram </span>
      <span className="instagram-link__handle">{handle}</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </AppLink>
  )
}

function InstagramGlyph() {
  return (
    <svg
      className="instagram-link__icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <rect
        x="3.6"
        y="3.6"
        width="16.8"
        height="16.8"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <circle cx="12" cy="12" r="3.55" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="16.55" cy="7.45" r="0.85" fill="currentColor" />
    </svg>
  )
}
