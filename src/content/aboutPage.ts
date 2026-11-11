import { about } from './site'

export const aboutPage = {
  path: '/sobre',
  title: 'Sobre Camilla Áurea',
  subtitle: 'Uma trajetória entre a justiça, a sensibilidade e a reconstrução feminina.',
  metaTitle: 'Sobre Camilla Áurea',
  metaDescription:
    'Uma trajetória entre a justiça, a sensibilidade e a reconstrução feminina. Bacharel em Direito, escritora e criadora do Método Áurea.',
  image: about.image,
  methodCta: {
    label: 'Conheça o Método Áurea',
    href: '/#metodo',
  },
  presentation: {
    eyebrow: 'Sobre',
    lead: 'Sou Camilla Áurea, bacharel em Direito, escritora e criadora do Método Áurea.',
  },
  history: {
    eyebrow: 'Trajetória',
    title: 'História e trajetória',
    paragraphs: [
      'Nordestina, nascida em Sergipe, construí minha trajetória acadêmica e profissional no universo jurídico, com pós-graduação em Direito Penal e Processo Penal e experiências em instituições como a Defensoria Pública, a Advocacia-Geral da União e o Ministério Público.',
      'O Direito me ensinou sobre justiça, autonomia e dignidade humana. Mas foi a própria vida que despertou em mim uma pergunta que se tornaria central no meu trabalho:',
    ],
    question:
      'Por que tantas mulheres, mesmo sendo fortes, inteligentes e capazes, encontram tanta dificuldade em reconhecer o próprio valor?',
    afterQuestion: [
      'Essa inquietação não nasceu apenas dos livros. Nasceu também da minha história.',
      'Como mulher e mãe, atravessei rupturas, recomeços e experiências que me convidaram a reconstruir a relação comigo mesma. Compreendi que a liberdade não consiste apenas em deixar para trás o que nos limita, mas em aprender a fazer escolhas que respeitem quem verdadeiramente somos.',
      'Nesse percurso, aprofundei meu interesse pela filosofia, literatura, espiritualidade e simbologia do feminino, buscando compreender as relações entre identidade, desejo, amor, poder e pertencimento.',
      'E uma convicção se tornou fundamental para mim:',
    ],
    conviction:
      'Uma mulher não precisa escolher entre ser forte e ser sensível. Entre amar alguém e permanecer fiel a si mesma. Entre desejar uma vida compartilhada e reconhecer o valor da própria companhia.',
  },
  methodBirth: {
    eyebrow: 'Método',
    title: 'O nascimento do Método Áurea',
    intro:
      'Foi dessa visão que nasceu o Método Áurea, uma proposta autoral de desenvolvimento feminino estruturada em três movimentos:',
    movements: [
      {
        id: 'minerar',
        symbol: 'espelho' as const,
        symbolLabel: 'Espelho',
        heading: 'MINERAR — Encontrar a própria verdade.',
        body: 'Reconhecer sua história, suas necessidades e aquilo que existe de valioso em si.',
      },
      {
        id: 'lapidar',
        symbol: 'ventre' as const,
        symbolLabel: 'Ventre',
        heading: 'LAPIDAR — Refinar escolhas e transformar padrões.',
        body: 'Desenvolver consciência, autonomia e novas formas de se relacionar consigo mesma e com o mundo.',
      },
      {
        id: 'brilhar',
        symbol: 'ouro' as const,
        symbolLabel: 'Ouro',
        heading: 'BRILHAR — Habitar a própria vida com presença, prazer e autenticidade.',
        body: 'Expressar sua identidade e sustentar escolhas alinhadas aos próprios valores.',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Filosofia',
    title: 'Filosofia e missão',
    paragraphs: [
      'Por meio da escrita, da reflexão e de experiências práticas, convido mulheres a desenvolver uma relação mais consciente com seus desejos, seu valor e suas escolhas.',
    ],
    power:
      'Acredito que o verdadeiro poder feminino não está em controlar tudo, mas em recuperar a soberania sobre a própria existência.',
    luxury:
      'E que o verdadeiro Luxo Afetivo é poder amar, desejar e construir relações sem precisar abandonar a si mesma para pertencer.',
    after: [
      'Minha missão não é ensinar mulheres a serem perfeitas ou inteiramente diferentes de quem são.',
      'É convidá-las a reconhecer o próprio valor e construir uma vida em que sua presença também seja motivo de celebração.',
    ],
    bookTitle: 'O Livro das Três Serpentes — A Dor, A Liberdade e A Sabedoria',
  },
  closing: {
    statement: 'Porque o ouro não precisa ser criado. Precisa ser reconhecido.',
    phrase: 'O ouro já estava em você.',
    name: 'Camilla Áurea',
    role: 'Criadora do Método Áurea',
  },
} as const
