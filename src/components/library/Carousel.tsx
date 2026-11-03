import { useCallback, useId, useState } from 'react'
import type { CarouselSlide } from '../../content/library'

type CarouselProps = {
  slides: CarouselSlide[]
  label: string
}

/** Carrossel editorial. Só deve ser renderizado quando houver slides autorais. */
export function Carousel({ slides, label }: CarouselProps) {
  const ordered = [...slides].sort((a, b) => a.order - b.order)
  const [index, setIndex] = useState(0)
  const labelId = useId()
  const total = ordered.length

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + total) % total)
    },
    [total],
  )

  if (total === 0) return null

  const current = ordered[index]

  return (
    <section className="carousel" aria-labelledby={labelId}>
      <h2 id={labelId} className="carousel__heading">
        {label}
      </h2>
      <div
        className="carousel__frame"
        aria-live="polite"
        aria-atomic="true"
        aria-roledescription="carrossel"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            go(1)
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            go(-1)
          }
        }}
      >
        <p className="carousel__text">{current.text}</p>
        <p className="carousel__count">
          {index + 1} de {total}
        </p>
      </div>
      <div className="carousel__controls">
        <button type="button" className="btn btn--secondary" onClick={() => go(-1)}>
          Anterior
        </button>
        <button type="button" className="btn btn--secondary" onClick={() => go(1)}>
          Próximo
        </button>
      </div>
    </section>
  )
}
