import { instagram } from '../../content/site'
import { ButtonLink } from './ButtonLink'

type InstagramLinkProps = {
  variant?: 'primary' | 'secondary' | 'text'
  label?: string
}

export function InstagramLink({ variant = 'secondary', label }: InstagramLinkProps) {
  const text = label ?? `${instagram.label} ${instagram.handle}`

  if (!instagram.confirmed) {
    return (
      <span className="btn btn--unavailable">
        {instagram.label} — em confirmação
      </span>
    )
  }

  return (
    <ButtonLink href={instagram.url} variant={variant} external>
      {text}
    </ButtonLink>
  )
}
