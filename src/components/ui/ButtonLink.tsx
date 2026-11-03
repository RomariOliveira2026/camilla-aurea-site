import type { ReactNode } from 'react'
import { AppLink } from './AppLink'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  external?: boolean
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <AppLink href={href} className={classes} external={external}>
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
