import { useEffect } from 'react'

const DEFAULT_TITLE = 'Camilla Áurea — Poder, Valor e Luxo Afetivo'
const DEFAULT_DESCRIPTION =
  'Camilla Áurea — desenvolvimento pessoal feminino. Poder, Valor e Luxo Afetivo.'

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} — Camilla Áurea` : DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [page])
}

type PageMetaInput = {
  title: string
  description: string
  canonical?: string
  image?: string
  imageAlt?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
  return el
}

export function usePageMeta({ title, description, canonical, image, imageAlt }: PageMetaInput) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionEl = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionEl?.getAttribute('content') ?? DEFAULT_DESCRIPTION
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousCanonical = canonicalEl?.getAttribute('href') ?? ''

    document.title = title
    descriptionEl?.setAttribute('content', description)

    if (canonical) upsertLink('canonical', canonical)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    if (canonical) upsertMeta('property', 'og:url', canonical)
    if (image) {
      upsertMeta('property', 'og:image', image)
      upsertMeta('name', 'twitter:image', image)
    }
    if (imageAlt) upsertMeta('property', 'og:image:alt', imageAlt)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    return () => {
      document.title = previousTitle
      descriptionEl?.setAttribute('content', previousDescription)
      if (canonicalEl && previousCanonical) canonicalEl.href = previousCanonical
    }
  }, [title, description, canonical, image, imageAlt])
}
