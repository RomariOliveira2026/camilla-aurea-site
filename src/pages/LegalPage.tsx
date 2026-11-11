import { Navigate } from 'react-router-dom'
import { AppLink } from '../components/ui/AppLink'
import { canonicalLegalUrl, getLegalDocument, type LegalDocument } from '../content/legal'
import { publicUrl } from '../content/site'
import { usePageMeta } from '../hooks/usePageTitle'

type LegalPageProps = {
  slug: LegalDocument['slug']
}

export function LegalPage({ slug }: LegalPageProps) {
  const doc = getLegalDocument(slug)
  if (!doc || doc.status !== 'published') {
    return <Navigate to="/" replace />
  }

  return <LegalArticle doc={doc} />
}

function LegalArticle({ doc }: { doc: LegalDocument }) {
  usePageMeta({
    title: `${doc.title} — Camilla Áurea`,
    description: doc.metaDescription,
    canonical: canonicalLegalUrl(doc.path),
    image: publicUrl('/og-links.png'),
    imageAlt: 'Camilla Áurea. O ouro já estava em você.',
  })

  return (
    <article className="legal">
      <div className="container legal__inner">
        <header className="legal__header">
          <p className="eyebrow">Informações legais</p>
          <h1 className="legal__title">{doc.title}</h1>
          <p className="legal__updated">Atualizado em {doc.updatedLabel}.</p>
          <p className="legal__intro">{doc.intro}</p>
        </header>

        {doc.sections.map((section) => (
          <section key={section.heading} className="legal__section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <p className="legal__related">
          Veja também: <AppLink href={doc.related.href}>{doc.related.label}</AppLink>.
        </p>
      </div>
    </article>
  )
}
