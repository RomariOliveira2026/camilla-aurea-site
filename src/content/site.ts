/*
 * Conteúdo central do site.
 * Textos marcados como "provisório" em docs/SPRINT-WEB-001-RELATORIO.md
 * dependem de revisão e aprovação da autora antes de qualquer publicação.
 */

import aboutImage from '../assets/images/about.jpg'
import heroImage from '../assets/images/hero.jpg'

export const brand = {
  name: 'Camilla Áurea',
  tagline: 'Poder, Valor e Luxo Afetivo',
  category: 'Desenvolvimento pessoal feminino',
} as const

export type ExternalProfile = {
  label: string
  handle: string
  url: string
  /** Só renderiza link ativo quando `true`. Caso contrário, exibe como indisponível. */
  confirmed: boolean
}

export const instagram: ExternalProfile = {
  label: 'Instagram',
  handle: '@camilla.aurea',
  url: 'https://www.instagram.com/camilla.aurea/',
  confirmed: true,
}

export const whatsapp = {
  label: 'WhatsApp',
  /** DDI + DDD + número, só dígitos. */
  e164: '554892055898',
  preview: 'Olá, Camilla. Cheguei pelo site Camilla Áurea.',
  confirmed: true,
}

export function whatsappHref(): string {
  const text = encodeURIComponent(whatsapp.preview)
  return `https://wa.me/${whatsapp.e164}?text=${text}`
}

export type NavItem = { href: string; label: string }

export const navItems: NavItem[] = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#metodo', label: 'Método Áurea' },
  { href: '/#territorios', label: 'Territórios' },
  { href: '/#luxo-afetivo', label: 'Luxo Afetivo' },
  { href: '/biblioteca', label: 'Biblioteca' },
  { href: '/#reflexoes', label: 'Reflexões' },
]

export type SiteImage = {
  src: string
  alt: string
  width: number
  height: number
}

export const hero = {
  eyebrow: brand.category,
  title: 'Camilla Áurea',
  subtitle: brand.tagline,
  headline: 'Você não precisa se abandonar para ser amada. O ouro já estava em você.',
  audienceNote:
    'Hipótese editorial a validar: mulheres de 30 a 45 anos interessadas em autovalor, autonomia, presença e relações conscientes.',
  image: {
    src: heroImage,
    alt: 'Mockup do e-book Minerar: capa bordô com moldura dourada e o título Minerar — 7 perguntas para voltar a si.',
    width: 819,
    height: 1024,
  } satisfies SiteImage,
  imageCaption: 'Mockup do e-book Minerar — Método Áurea, etapa 01.',
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Sobre Camilla',
  image: {
    src: aboutImage,
    alt: 'Retrato de Camilla, sorrindo, sentada em um banco de madeira, com vestido verde-oliva de manga longa.',
    width: 819,
    height: 1024,
  } satisfies SiteImage,
  paragraphs: [
    'Camilla Áurea é uma marca autoral de desenvolvimento pessoal feminino, construída em torno de três ideias: poder, valor e luxo afetivo.',
    'A comunicação desta versão se dirige, como hipótese editorial a validar, a mulheres de 30 a 45 anos interessadas em autovalor, autonomia, presença e relações conscientes.',
    'O amor romântico pode fazer parte do caminho. Não é o único horizonte da marca: o convite é reconhecer o próprio valor, recuperar a voz e viver com autenticidade — em relação consigo, com as outras pessoas e com as escolhas de cada dia.',
  ],
  pendingNote:
    'A biografia oficial de Camilla está em preparação e será publicada somente após redação e aprovação da autora.',
}

export type MethodStep = { number: string; name: string; summary: string }

export const method = {
  eyebrow: 'Método',
  title: 'Método Áurea',
  intro:
    'Três etapas que conduzem do reconhecimento à expressão. Cada uma é um movimento próprio; juntas, formam um caminho de autovalor, autonomia, presença e relações conscientes.',
  steps: [
    { number: '01', name: 'Minerar', summary: 'Reconhecer quem você se tornou.' },
    { number: '02', name: 'Lapidar', summary: 'Construir quem você escolhe ser.' },
    {
      number: '03',
      name: 'Brilhar',
      summary: 'Expressar valores e identidade em escolhas concretas.',
    },
  ] satisfies MethodStep[],
}

export type Territory = { name: string; description: string }

export const territories = {
  eyebrow: 'Territórios',
  title: 'Poder, Valor, Presença e Expressão',
  intro: 'Quatro territórios atravessam todas as etapas do Método Áurea.',
  items: [
    {
      name: 'Poder',
      description: 'Autonomia, limites, protagonismo e capacidade de escolha.',
    },
    {
      name: 'Valor',
      description: 'Autoestima, autovalorização e relações conscientes.',
    },
    {
      name: 'Presença',
      description: 'Corpo, consciência emocional, autocuidado e espiritualidade prática.',
    },
    {
      name: 'Expressão',
      description: 'Identidade, comunicação, autenticidade e criatividade.',
    },
  ] satisfies Territory[],
}

export const affectiveLuxury = {
  eyebrow: 'Conceito',
  title: 'Luxo Afetivo',
  lead: 'Luxo afetivo não se mede pelo preço. Está na forma como você se escolhe, se cuida e se relaciona — consigo mesma, com as pessoas e com a vida que constrói. O amor romântico pode entrar nessa conversa; não é a única medida de uma vida bem vivida.',
  principles: [
    {
      title: 'Autovalor',
      text: 'Honrar o ouro que já estava em você, sem se abandonar para caber no desejo do outro.',
    },
    {
      title: 'Autonomia e presença',
      text: 'Estar inteira no que importa, com limites claros e escolhas próprias.',
    },
    {
      title: 'Relações conscientes',
      text: 'Construir vínculos que respeitam o seu valor — a começar pelo vínculo consigo mesma, e sem reduzir a vida a um único tipo de amor.',
    },
  ],
}

export const pillars: string[] = [
  'Autovalor',
  'Relacionamentos conscientes',
  'Prosperidade emocional',
  'Feminilidade',
  'Presença e corpo',
  'Espiritualidade prática',
  'Identidade e expressão',
]

/**
 * Guia Minerar — CTA de destaque e seção informativa.
 * Destino atual: âncora da Home. Quando a landing aprovada existir,
 * mudar `destination` para `'landing'` (usa `landingPath`).
 */
export const minerarGuide = {
  ctaLabel: 'Receber o Guia Minerar',
  sectionId: 'guia-minerar',
  landingPath: '/guia-minerar',
  destination: 'section' as 'section' | 'landing',
  status: 'in-preparation' as const,
  statusLabel: 'Em preparação',
  eyebrow: 'Guia',
  title: 'Guia Minerar',
  intro:
    'O Guia Minerar é o material previsto para a primeira etapa do Método Áurea — Minerar: reconhecer quem você se tornou.',
  pendingNote:
    'O conteúdo do guia está em preparação e será publicado somente após redação e aprovação da autora. Nesta versão não há download, formulário, cadastro nem coleta de dados.',
}

export function minerarGuideHref(): string {
  return minerarGuide.destination === 'landing'
    ? minerarGuide.landingPath
    : `/#${minerarGuide.sectionId}`
}

export const library = {
  eyebrow: 'Biblioteca',
  title: 'Biblioteca Áurea',
  intro:
    'Um acervo organizado por linhas editoriais e pelos sete pilares temáticos da marca. Novas séries podem ser acrescentadas sem reconstruir a estrutura. A primeira linha — Provocações Áureas — está em preparação.',
  status: 'Em preparação',
}

export const reflections = {
  eyebrow: 'Reflexões',
  title: 'Reflexões e artigos',
  intro: 'Este espaço vai reunir textos sobre os temas do Método Áurea.',
  emptyState: 'Nenhuma reflexão publicada ainda. Os primeiros textos estão em preparação.',
}

export const disclaimer =
  'Os conteúdos de Camilla Áurea têm caráter educativo e de desenvolvimento pessoal. Não constituem diagnóstico, terapia ou tratamento e não substituem o acompanhamento de profissionais de saúde.'
