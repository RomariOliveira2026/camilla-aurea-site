import { brand, disclaimer, instagram, navItems } from '../../content/site'
import { legalDocuments } from '../../content/legal'
import { AppLink } from '../ui/AppLink'
import { Wordmark } from '../ui/Wordmark'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Wordmark className="site-footer__wordmark" />
            <p className="site-footer__tagline">{brand.tagline}</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="site-footer__heading">Navegação</h2>
            <ul role="list" className="site-footer__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <AppLink href={item.href}>{item.label}</AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__heading">Contato</h2>
            <ul role="list" className="site-footer__list">
              <li>
                {instagram.confirmed ? (
                  <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                    {instagram.label} {instagram.handle}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                ) : (
                  <span className="site-footer__muted">{instagram.label} — em confirmação</span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">Informações legais</h2>
            <ul role="list" className="site-footer__list">
              {legalDocuments.map((doc) => (
                <li key={doc.slug}>
                  {doc.status === 'published' ? (
                    <AppLink href={doc.path}>{doc.title}</AppLink>
                  ) : (
                    <span className="site-footer__muted">
                      {doc.title} <span className="site-footer__tag">em elaboração</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="site-footer__disclaimer">{disclaimer}</p>

        <div className="site-footer__bottom">
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <p>Versão de desenvolvimento WEB-001.1 · não publicada</p>
        </div>
      </div>
    </footer>
  )
}
