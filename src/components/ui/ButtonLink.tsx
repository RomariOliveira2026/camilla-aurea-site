import type { MouseEventHandler, ReactNode } from 'react'
import { AppLink } from './AppLink'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text' | 'cta'
  external?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  onClick,
}: ButtonLinkProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <AppLink href={href} className={classes} external={external} onClick={onClick}>
      {children}
      {external ? (
        <>
          <span className="btn__icon" aria-hidden="true">
            ↗
          </span>
          <span className="sr-only"> (abre em nova aba)</span>
        </>
      ) : null}
    </AppLink>
  )
}
