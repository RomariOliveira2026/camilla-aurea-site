import type { AureoLink, SocialSlot, VisibleAureoLink } from '../links/types'
import { getSeriesBySlug, seriesPath } from './library'
import { about, aureaLinksUrl, instagram, minerarGuide, publicUrl, sitePublic } from './site'

const provocacoes = getSeriesBySlug('provocacoes-aureas')

export const linksHub = {
  eyebrow: 'ÁUREA LINKS',
  name: 'Camilla Áurea',
  tagline: 'Poder • Valor • Luxo Afetivo',
  phrase: 'O ouro já estava em você.',
  signoff: 'Com carinho, Camilla Áurea.',
  title: 'Camilla Áurea | O ouro já estava em você',
  description:
    'Central oficial de Camilla Áurea. Método Áurea, Guia MINERAR gratuito e um espaço de autovalor, presença e autoconhecimento feminino.',
  portrait: {
    enabled: true,
    src: about.image.src,
    alt: 'Retrato de Camilla Áurea, sorrindo.',
    width: about.image.width,
    height: about.image.height,
  },
} as const

/**
 * Só renderiza redes com `confirmed` e URL https real.
 * YouTube permanece reservado até a URL ser confirmada.
 */
export const linksSocials: SocialSlot[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: instagram.url,
    confirmed: instagram.confirmed,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: null,
    confirmed: false,
  },
]

/**
 * Catálogo da Central de Links.
 * Itens ocultos permanecem no módulo para publicação posterior —
 * só entram na página com `visible: true` e `href` válido.
 */
export const aureoLinks: AureoLink[] = [
  {
    id: 'minerar',
    title: 'Receba gratuitamente o Guia MINERAR',
    description: '7 perguntas para voltar a si.',
    icon: 'guide',
    href: minerarGuide.landingPath,
    order: 1,
    visible: true,
    featured: true,
    kind: 'internal',
  },
  {
    id: 'metodo',
    title: 'Conheça o Método Áurea',
    description: 'Minerar, Lapidar e Brilhar.',
    icon: 'method',
    href: '/#metodo',
    order: 2,
    visible: true,
    featured: false,
    kind: 'internal',
  },
  {
    id: 'biblioteca',
    title: 'Biblioteca Áurea',
    description: 'Linhas editoriais e os sete pilares da marca.',
    icon: 'library',
    href: '/biblioteca',
    order: 3,
    visible: true,
    featured: false,
    kind: 'internal',
  },
  {
    id: 'provocacoes',
    title: 'Provocações Áureas',
    description: 'Primeira linha editorial da Biblioteca.',
    icon: 'series',
    href: provocacoes ? seriesPath(provocacoes) : null,
    order: 4,
    visible: Boolean(provocacoes),
    featured: false,
    kind: 'internal',
  },
  {
    id: 'site',
    title: 'Nosso Site Oficial',
    description: 'Poder, Valor e Luxo Afetivo.',
    icon: 'home',
    href: '/',
    order: 5,
    visible: true,
    featured: false,
    kind: 'internal',
  },
  {
    id: 'jornadas',
    title: 'Jornadas e Experiências',
    description: 'Ofertas presenciais e imersivas, quando publicadas.',
    icon: 'journeys',
    href: null,
    order: 6,
    visible: false,
    featured: false,
    kind: 'internal',
  },
  {
    id: 'youtube',
    title: 'YouTube Oficial',
    description: 'Canal oficial, após confirmação da URL.',
    icon: 'youtube',
    href: null,
    order: 7,
    visible: false,
    featured: false,
    kind: 'external',
  },
  {
    id: 'contato',
    title: 'Contato Comercial',
    description: 'Atendimento comercial, após aprovação do canal.',
    icon: 'contact',
    href: null,
    order: 8,
    visible: false,
    featured: false,
    kind: 'internal',
  },
]

export function isRenderableLink(link: AureoLink): link is VisibleAureoLink {
  if (!link.visible) return false
  if (!link.href) return false
  const href = link.href.trim()
  if (!href || href === '#') return false
  if (link.kind === 'external') return /^https?:\/\//i.test(href)
  return href.startsWith('/')
}

export function getVisibleLinks(): VisibleAureoLink[] {
  return aureoLinks.filter(isRenderableLink).sort((a, b) => a.order - b.order)
}

export function getVisibleSocials(): Array<SocialSlot & { href: string }> {
  return linksSocials.filter((item): item is SocialSlot & { href: string } => {
    if (!item.confirmed || !item.href) return false
    return /^https?:\/\//i.test(item.href)
  })
}

export const linksShare = {
  whatsappLabel: 'Compartilhar no WhatsApp',
  copyLabel: 'Copiar link',
  copiedLabel: 'Link copiado',
  copyFailedLabel: 'Não foi possível copiar. Selecione o endereço abaixo.',
  nativeLabel: 'Compartilhar',
  fallbackHint: 'Se o WhatsApp não abrir, copie o endereço.',
  ogImage: publicUrl(sitePublic.ogImagePath),
  ogImageAlt: 'Camilla Áurea — ÁUREA LINKS. O ouro já estava em você.',
} as const

export function linksShareMessage(url: string = aureaLinksUrl()): string {
  return [
    'Oi! Quero compartilhar com você o universo Camilla Áurea. ❤️⚜️',
    '',
    'Um espaço dedicado ao autovalor, à presença e ao autoconhecimento feminino.',
    '',
    'Conheça o Método Áurea e descubra o Guia MINERAR, uma experiência gratuita com 7 perguntas para voltar a si.',
    '',
    `Acesse: ${url}`,
  ].join('\n')
}

/** Compartilhamento voluntário: abre o WhatsApp da visitante, sem número destinatário. */
export function whatsappShareHref(url: string = aureaLinksUrl()): string {
  return `https://wa.me/?text=${encodeURIComponent(linksShareMessage(url))}`
}
