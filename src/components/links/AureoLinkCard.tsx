import { AppLink } from '../ui/AppLink'
import { recordLinkActivation } from '../../links/metrics'
import type { VisibleAureoLink } from '../../links/types'
import { LinkIcon } from './LinkIcon'

type AureoLinkCardProps = {
  link: VisibleAureoLink
}

export function AureoLinkCard({ link }: AureoLinkCardProps) {
  const classes = ['aureo-link', link.featured ? 'aureo-link--featured' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <AppLink
      className={classes}
      href={link.href}
      external={link.kind === 'external'}
      onClick={() => recordLinkActivation(link)}
    >
      <LinkIcon name={link.icon} />
      <span className="aureo-link__title">{link.title}</span>
    </AppLink>
  )
}
