import type { ReflectionArticle } from './types'

/**
 * Primeira reflexão aprovada pela fundadora.
 * Título, subtítulo, categoria, território e etapa vieram do briefing editorial.
 * Os blocos de citação reproduzem convicções já publicadas na biografia aprovada.
 * A data é a da publicação neste site, não uma data inventada de outro canal.
 */
export const voceSeAbandonouTentandoSerAmada: ReflectionArticle = {
  id: 'ra-001',
  slug: 'voce-se-abandonou-tentando-ser-amada',
  title: 'Você se abandonou tentando ser amada?',
  subtitle:
    'Sobre os pequenos silêncios, as escolhas que fazemos para pertencer e a coragem de voltar para si.',
  author: 'Camilla Áurea',
  category: 'Reflexões Áureas',
  territory: 'valor',
  stage: 'minerar',
  excerpt:
    'Sobre os pequenos silêncios, as escolhas que fazemos para pertencer e a coragem de voltar para si.',
  publishedAt: '2026-11-10',
  blocks: [
    {
      type: 'paragraph',
      text: 'Há um abandono que não começa com uma mala na porta. Começa no tom de voz que você engole. Na opinião que guarda. No desejo que adia para não desagradar. Nos pequenos silêncios que, somados, vão afastando você de si mesma.',
    },
    {
      type: 'paragraph',
      text: 'Muitas mulheres aprendem cedo que pertencer pede uma versão mais conveniente de quem são. Menos intensa. Menos lúcida. Menos inteira. E, em nome de ser amadas, aceitam negociar o próprio valor.',
    },
    {
      type: 'quote',
      text: 'Uma mulher não precisa escolher entre ser forte e ser sensível. Entre amar alguém e permanecer fiel a si mesma. Entre desejar uma vida compartilhada e reconhecer o valor da própria companhia.',
    },
    {
      type: 'paragraph',
      text: 'O desejo de amar é humano. O problema começa quando o amor vira prova permanente — e você se torna a moeda. Quando cada escolha passa a responder a uma pergunta que não é sua: assim eu caibo?',
    },
    {
      type: 'paragraph',
      text: 'Voltar para si não é egoísmo. É o primeiro movimento de Minerar: encontrar a própria verdade. Reconhecer sua história, suas necessidades e aquilo que existe de valioso em si — inclusive o que foi silenciado para pertencer.',
    },
    {
      type: 'quote',
      text: 'O verdadeiro Luxo Afetivo é poder amar, desejar e construir relações sem precisar abandonar a si mesma para pertencer.',
    },
    {
      type: 'paragraph',
      text: 'A coragem, aqui, não é a de romper por romper. É a de falar o que precisa ser dito. A de não se abandonar para ser escolhida. A de construir uma vida em que a sua presença também caiba.',
    },
    {
      type: 'paragraph',
      text: 'Porque o ouro não precisa ser criado. Precisa ser reconhecido. Ele já estava em você.',
    },
  ],
  status: 'published',
  order: 1,
}
