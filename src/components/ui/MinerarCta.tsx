import type { MouseEventHandler } from 'react'
import { minerarGuide, minerarFormHref } from '../../content/site'
import { ButtonLink } from './ButtonLink'

type MinerarCtaProps = {
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function MinerarCta({ className, onClick }: MinerarCtaProps) {
  return (
    <ButtonLink href={minerarFormHref()} variant="cta" className={className} onClick={onClick}>
      {minerarGuide.ctaLabel}
    </ButtonLink>
  )
}
