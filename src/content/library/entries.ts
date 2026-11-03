/*
 * Publicações da Biblioteca.
 *
 * Os três primeiros registros de Provocações Áureas reservam a ordem
 * editorial (patinete → manga e faca → café). Títulos, narrativas,
 * provocações, pilares e tags permanecem vazios até o arquivo
 * "Manual Marca Camilla Áurea — Provocações Áureas" ser inserido
 * no workspace. Nada abaixo é texto autoral inventado.
 */

import type { EditorialEntry } from './types'

export const entryCatalog: EditorialEntry[] = [
  {
    slug: 'publicacao-01',
    seriesSlug: 'provocacoes-aureas',
    editorialKey: 'patinete',
    title: '',
    description: '',
    tags: [],
    narrative: '',
    slides: [],
    order: 1,
    status: 'in-preparation',
  },
  {
    slug: 'publicacao-02',
    seriesSlug: 'provocacoes-aureas',
    editorialKey: 'manga-e-faca',
    title: '',
    description: '',
    tags: [],
    narrative: '',
    slides: [],
    order: 2,
    status: 'in-preparation',
  },
  {
    slug: 'publicacao-03',
    seriesSlug: 'provocacoes-aureas',
    editorialKey: 'cafe',
    title: '',
    description: '',
    tags: [],
    narrative: '',
    slides: [],
    order: 3,
    status: 'in-preparation',
  },
]
