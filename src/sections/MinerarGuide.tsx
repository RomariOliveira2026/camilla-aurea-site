import { minerarGuide, minerarGuideHref } from '../content/site'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Section } from '../components/ui/Section'
import { StatusBadge } from '../components/ui/StatusBadge'

export function MinerarGuide() {
  return (
    <Section
      id={minerarGuide.sectionId}
      eyebrow={minerarGuide.eyebrow}
      title={minerarGuide.title}
      intro={minerarGuide.intro}
      aside={<StatusBadge>{minerarGuide.statusLabel}</StatusBadge>}
    >
      <div className="empty-state">
        <p className="empty-state__text">{minerarGuide.pendingNote}</p>
        <p className="empty-state__hint">
          <ButtonLink href={minerarGuideHref()}>Ir para a página MINERAR</ButtonLink>
        </p>
      </div>
    </Section>
  )
}
