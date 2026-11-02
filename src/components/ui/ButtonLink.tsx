import type { ReactNode } from 'react'

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

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="btn__icon" aria-hidden="true">
          ↗
        </span>
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    )
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}
