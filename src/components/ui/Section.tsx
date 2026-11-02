import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'alt' | 'dark'
  aside?: ReactNode
  children?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  aside,
  children,
}: SectionProps) {
  const titleId = `${id}-titulo`
  const classes = ['section', `section--${tone}`, tone === 'dark' ? 'on-dark' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={titleId}>
      <div className="container">
        <header className="section__header">
          <p className="eyebrow">{eyebrow}</p>
          <div className="section__heading-row">
            <h2 id={titleId} className="section__title">
              {title}
            </h2>
            {aside}
          </div>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
