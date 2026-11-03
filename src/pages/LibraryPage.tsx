import { ButtonLink } from '../components/ui/ButtonLink'
import { PageHeader } from '../components/library/PageHeader'
import { SeriesCard } from '../components/library/SeriesCard'
import { StatusBadge } from '../components/ui/StatusBadge'
import { getSeriesList } from '../content/library'
import { library, pillars } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

export function LibraryPage() {
  usePageTitle('Biblioteca Áurea')
  const series = getSeriesList()

  return (
    <div className="page">
      <div className="container">
        <PageHeader
          eyebrow={library.eyebrow}
          title={library.title}
          intro={library.intro}
          status={library.status}
          crumbs={[
            { href: '/', label: 'Início' },
            { label: 'Biblioteca Áurea' },
          ]}
        />

        <h2 className="library__subtitle">Linhas editoriais</h2>
        <ul role="list" className="series-grid">
          {series.map((item) => (
            <li key={item.slug}>
              <SeriesCard series={item} />
            </li>
          ))}
        </ul>

        <h2 className="library__subtitle library__subtitle--spaced">Sete pilares temáticos</h2>
        <ul role="list" className="library">
          {pillars.map((pillar, index) => (
            <li key={pillar} className="library__item">
              <span className="library__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="library__name">{pillar}</span>
              <StatusBadge size="sm">Transversal</StatusBadge>
            </li>
          ))}
        </ul>

        <p className="page__back">
          <ButtonLink href="/" variant="text">
            Voltar ao início
          </ButtonLink>
        </p>
      </div>
    </div>
  )
}
