import { hero } from '../../content/site'

type GuideMockupProps = {
  caption?: string
  priority?: boolean
}

export function GuideMockup({ caption, priority = false }: GuideMockupProps) {
  return (
    <figure className="guide-mockup">
      <div className="guide-mockup__media">
        <img
          className="guide-mockup__image"
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
      {caption ? <figcaption className="guide-mockup__caption">{caption}</figcaption> : null}
    </figure>
  )
}
