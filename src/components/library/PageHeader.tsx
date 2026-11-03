import { AppLink } from '../ui/AppLink'
import { StatusBadge } from '../ui/StatusBadge'

type Crumb = { href?: string; label: string }

type PageHeaderProps = {
  eyebrow: string
  title: string
  intro?: string
  status?: string
  crumbs: Crumb[]
}

export function PageHeader({ eyebrow, title, intro, status, crumbs }: PageHeaderProps) {
  const titleId = `${eyebrow.toLowerCase().replace(/\s+/g, '-')}-titulo`

  return (
    <header className="page-header">
      <nav className="breadcrumbs" aria-label="Trilha de navegação">
        <ol role="list">
          {crumbs.map((crumb) => (
            <li key={crumb.label}>
              {crumb.href ? (
                <AppLink href={crumb.href}>{crumb.label}</AppLink>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-header__heading">
        <h1 id={titleId} className="page-header__title">
          {title}
        </h1>
        {status ? <StatusBadge>{status}</StatusBadge> : null}
      </div>
      {intro ? <p className="page-header__intro">{intro}</p> : null}
    </header>
  )
}
