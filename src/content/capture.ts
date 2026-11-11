import { DEMO_ERROR_EMAIL } from '../capture/provider'

export const leadFormCopy = {
  firstNameLabel: 'Primeiro nome',
  firstNamePlaceholder: 'Como você gostaria de ser chamada',
  emailLabel: 'E-mail',
  emailPlaceholder: 'nome@email.com',
  marketingLabel:
    'Quero receber comunicações da Camilla Áurea sobre conteúdos e convites (opcional).',
  marketingHint: 'Opcional. O guia não depende desta autorização.',
  submit: 'Receber meu guia gratuito',
  submitting: 'Preparando…',
  demoNotice:
    'Demonstração — o formulário funciona só para revisão visual. Nenhum dado é enviado, armazenado ou usado para marketing.',
  privacyNote:
    'O primeiro nome e o e-mail se destinam apenas à entrega do PDF, quando o envio estiver homologado. A autorização de marketing é opcional e separada.',
  privacyLinkLabel: 'Política de Privacidade',
  privacyHref: '/privacidade',
  firstNameRequired: 'Informe o primeiro nome.',
  firstNameShort: 'Use pelo menos duas letras.',
  emailRequired: 'Informe o e-mail.',
  emailInvalid: 'Digite um e-mail válido.',
} as const

export const minerarLanding = {
  title: 'MINERAR',
  eyebrow: 'Guia gratuito',
  headline: 'O ouro já estava em você.',
  benefit:
    'Uma experiência gratuita para olhar para sua vida com mais presença, reconhecer suas necessidades e descobrir aspectos de si que talvez ainda não tenha explorado.',
  presentation: 'MINERAR — O Ouro que Existe em Você | 7 Perguntas para Voltar a Si',
  foldCta: 'Quero receber meu guia gratuito',
  experienceEyebrow: 'O PDF',
  experienceTitle: 'Sete perguntas para voltar a si',
  experienceIntro: 'O guia traz sete perguntas de reflexão. O que você encontra nele:',
  pdfBenefits: [
    {
      title: 'Olhar com presença',
      text: 'Perguntas para observar a vida que você está vivendo, no seu ritmo — sem teste e sem pressa.',
    },
    {
      title: 'Reconhecer necessidades',
      text: 'Um espaço para nomear o que você precisa, como ponto de partida para voltar a si.',
    },
    {
      title: 'Explorar o que ainda não viu',
      text: 'Um convite a aspectos de si que talvez ainda não tenham sido explorados. Sem antecipar respostas.',
    },
  ],
  experienceNote:
    'Os enunciados das sete perguntas estão no PDF. Esta página não os reproduz e não faz diagnóstico.',
  formEyebrow: 'Receber o guia',
  formTitle: 'Receber meu guia gratuito',
  formIntro: 'Primeiro nome e e-mail. O envio do PDF fica pendente da homologação do provedor.',
  privacyCompact:
    'Nome e e-mail se destinam só à entrega do PDF, quando o envio estiver homologado. Nenhum contato fica no navegador. Marketing é opcional e não é exigido para o guia.',
  methodEyebrow: 'Método Áurea',
  methodTitle: 'Minerar é a primeira etapa',
  methodText:
    'Reconhecer quem você se tornou abre o caminho para Lapidar e Brilhar. Se quiser, conheça o Método Áurea — sem obrigação de seguir.',
  methodCta: 'Conhecer o Método Áurea',
  methodHref: '/#metodo',
} as const

export const demoErrorEmail = DEMO_ERROR_EMAIL
