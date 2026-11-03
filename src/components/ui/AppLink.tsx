import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AppLinkProps = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function AppLink({ href, children, className, external = false, onClick }: AppLinkProps) {
  if (external || /^https?:/i.test(href)) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link className={className} to={href} onClick={onClick}>
      {children}
    </Link>
  )
}
