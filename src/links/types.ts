export type LinkKind = 'internal' | 'external'

export type LinkIconName =
  | 'guide'
  | 'method'
  | 'library'
  | 'series'
  | 'home'
  | 'journeys'
  | 'youtube'
  | 'contact'

export type AureoLink = {
  id: string
  title: string
  description: string
  icon: LinkIconName
  /** `null` enquanto o destino não estiver confirmado. Nunca usar `'#'`. */
  href: string | null
  order: number
  visible: boolean
  featured: boolean
  kind: LinkKind
}

export type VisibleAureoLink = AureoLink & { href: string }

export type SocialSlot = {
  id: string
  label: string
  href: string | null
  confirmed: boolean
}
