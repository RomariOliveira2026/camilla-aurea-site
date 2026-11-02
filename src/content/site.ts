/*
 * Conteúdo central do site.
 * Textos marcados como "provisório" em docs/SPRINT-WEB-001-RELATORIO.md
 * dependem de revisão e aprovação da autora antes de qualquer publicação.
 */

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

export type NavItem = { id: string; label: string }

export const navItems: NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'metodo', label: 'Método Áurea' },
  { id: 'territorios', label: 'Territórios' },
  { id: 'luxo-afetivo', label: 'Luxo Afetivo' },
  { id: 'biblioteca', label: 'Biblioteca' },
  { id: 'reflexoes', label: 'Reflexões' },
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
  lead: 'Um convite para reconhecer seu valor, recuperar sua voz e viver com mais autenticidade.',
  image: {
    src: heroImage,
    alt: 'Mulher sorridente, de vestido longo bordô, conduz um patinete por uma rua de pedras iluminada à noite.',
    width: 538,
    height: 803,
  } satisfies SiteImage,
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Sobre Camilla',
  paragraphs: [
    'Camilla Áurea é uma marca autoral de desenvolvimento pessoal feminino, construída em torno de três ideias: poder, valor e luxo afetivo.',
    'A proposta é oferecer caminhos de reflexão para que cada mulher reconheça a própria história, faça escolhas mais conscientes e expresse quem é com autenticidade.',
  ],
  pendingNote:
    'A biografia oficial de Camilla está em preparação e será publicada somente após redação e aprovação da autora.',
}

export type MethodStep = { number: string; name: string; summary: string }

export const method = {
  eyebrow: 'Método',
  title: 'Método Áurea',
  intro:
    'Três etapas que conduzem do reconhecimento à expressão. Cada etapa é um movimento próprio — e, juntas, formam um caminho.',
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
  lead: 'Luxo afetivo não se mede pelo preço. Ele está na forma como você cuida de si, das suas relações e das escolhas que faz todos os dias.',
  principles: [
    {
      title: 'Cuidado como escolha',
      text: 'Tratar a própria vida com atenção e respeito, sem esperar permissão.',
    },
    {
      title: 'Presença com intenção',
      text: 'Estar inteira no que importa e reconhecer o que já não cabe.',
    },
    {
      title: 'Relações conscientes',
      text: 'Construir vínculos que honrem o seu valor — a começar pelo vínculo consigo mesma.',
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

export const library = {
  eyebrow: 'Biblioteca',
  title: 'Biblioteca Áurea',
  intro:
    'Um acervo de conteúdos organizado pelos sete pilares temáticos da marca. A biblioteca está em preparação e ainda não possui materiais disponíveis.',
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
