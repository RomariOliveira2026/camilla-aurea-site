import { minerarGuide } from '../content/site'
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
        <p className="empty-state__text">O guia ainda não está disponível para envio.</p>
        <p className="empty-state__hint">{minerarGuide.pendingNote}</p>
      </div>
    </Section>
  )
}
