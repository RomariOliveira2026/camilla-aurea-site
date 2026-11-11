import { instagram, publicUrl, sitePublic } from './site'

export type LegalSection = {
  heading: string
  paragraphs: string[]
}

export type LegalDocument = {
  slug: 'privacidade' | 'termos'
  title: string
  status: 'in-preparation' | 'published'
  path: string
  metaDescription: string
  updatedLabel: string
  intro: string
  sections: LegalSection[]
  related: { href: string; label: string }
}

const updatedLabel = '10 de novembro de 2026'
const site = sitePublic.origin

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'privacidade',
    title: 'Política de Privacidade',
    status: 'published',
    path: '/privacidade',
    metaDescription:
      'Como o site Camilla Áurea trata dados pessoais: o que é coletado hoje, o que não é coletado, e como exercer seus direitos.',
    updatedLabel,
    intro:
      'Esta política descreve, com transparência, o tratamento de dados pessoais no site Camilla Áurea. O texto reflete o funcionamento atual da plataforma — sem captação homologada, sem anúncios e sem rastreamento de marketing.',
    related: { href: '/termos', label: 'Termos de Uso' },
    sections: [
      {
        heading: '1. Quem é responsável',
        paragraphs: [
          'O site é de responsabilidade de Camilla Áurea, pessoa natural, titular da marca Camilla Áurea, no endereço ' +
            site +
            '.',
          'Não há cadastro de pessoa jurídica, CNPJ nem e-mail exclusivo de encarregado neste documento. Pedidos sobre dados pessoais podem ser feitos pelos canais oficiais já publicados no site: Instagram ' +
            instagram.handle +
            ' (' +
            instagram.url +
            ') e WhatsApp indicado no rodapé e no botão flutuante.',
        ],
      },
      {
        heading: '2. O que esta política cobre',
        paragraphs: [
          'Aplica-se à navegação em ' +
            site +
            ', inclusive à home, à página Sobre, ao Método Áurea, à Biblioteca, às Reflexões, à Central Áurea Links e à landing do guia MINERAR.',
          'Não se aplica a sites, aplicativos ou redes de terceiros para os quais este site apenas encaminha, como Instagram e WhatsApp. Nesses ambientes valem as políticas da respectiva plataforma.',
        ],
      },
      {
        heading: '3. O que coletamos hoje',
        paragraphs: [
          'Neste momento o site não coleta, não envia e não armazena nome, e-mail, telefone, documento ou qualquer cadastro em servidor próprio.',
          'O formulário do guia MINERAR está em demonstração. Os campos existem para revisão visual. Nenhum dado digitado é transmitido, gravado ou usado para marketing.',
          'A única informação guardada no seu aparelho, se você escolher o tema noturno, é a preferência de aparência (claro ou escuro), na chave local camilla-aurea-theme. Isso fica só no navegador, não identifica você e não é enviado a Camilla Áurea.',
          'A medição de cliques da Central Áurea Links está desligada. Não há cookie de publicidade, pixel, Google Analytics, Meta Pixel nem identificador de anúncio.',
        ],
      },
      {
        heading: '4. Hospedagem e dados técnicos',
        paragraphs: [
          'O site é publicado na internet por um prestador de hospedagem. Esse prestador pode registrar, por conta própria e para operação e segurança, dados técnicos de acesso — por exemplo endereço IP, data, página visitada e tipo de navegador — segundo a política dele.',
          'Camilla Áurea não opera painel de analytics sobre esses registros e não os utiliza para perfilar visitantes.',
        ],
      },
      {
        heading: '5. Instagram, WhatsApp e compartilhamento',
        paragraphs: [
          'Links para o Instagram e para o WhatsApp abrem serviços de terceiros. Se você conversar por esses canais, o tratamento passa a ser da Meta/WhatsApp, nos termos deles.',
          'Na Central Áurea Links, copiar o endereço ou usar o compartilhamento nativo do aparelho ocorre no seu dispositivo. O site não recebe a lista de contatos nem o conteúdo compartilhado.',
        ],
      },
      {
        heading: '6. Quando a entrega do guia for homologada',
        paragraphs: [
          'A captação real do guia MINERAR ainda não está ligada. Quando estiver, esta política será atualizada antes ou no ato da ativação.',
          'O desenho previsto, já visível no formulário, é este: primeiro nome e e-mail para enviar o PDF; autorização de comunicações, opcional e separada, que não é exigida para receber o guia. Nenhum contato deve permanecer gravado no navegador.',
          'A base pretendida para a entrega do PDF é a execução do pedido feito por você. A base para comunicações opcionais é o consentimento, que poderá ser retirado pelos mesmos canais de contato.',
        ],
      },
      {
        heading: '7. Bases legais (LGPD)',
        paragraphs: [
          'O tratamento descrito nesta política observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).',
          'Hoje, o essencial da navegação ocorre sem cadastro. A preferência de tema no aparelho atende à funcionalidade que você escolhe. Dados técnicos de hospedagem, se existirem, ligam-se à operação segura do site e a obrigação legal ou legítimo interesse do prestador, não a marketing da marca.',
        ],
      },
      {
        heading: '8. Seus direitos',
        paragraphs: [
          'Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação, portabilidade, informação sobre compartilhamentos e revogação de consentimento, nos termos do art. 18 da LGPD.',
          'Como não há cadastro ativo, na prática não existem dados de nome ou e-mail nossos para corrigir ou apagar. Ainda assim, qualquer pedido será respondido pelos canais oficiais. Também é possível apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
        ],
      },
      {
        heading: '9. Crianças e adolescentes',
        paragraphs: [
          'O site destina-se a mulheres adultas. Não é dirigido a crianças. Não coletamos de forma consciente dados de menores de 18 anos.',
        ],
      },
      {
        heading: '10. Conservação e segurança',
        paragraphs: [
          'Não há base própria de contatos em operação. A preferência de tema permanece no seu aparelho até você limpar os dados do site ou trocar o tema.',
          'Adotamos medidas compatíveis com um site estático: conexão HTTPS no domínio oficial e ausência de envio de formulário enquanto a captação não for homologada.',
        ],
      },
      {
        heading: '11. Alterações',
        paragraphs: [
          'Esta política pode ser atualizada para acompanhar o site — em especial se o envio do guia MINERAR for homologado ou se alguma medição passar a ser ligada. A data no topo da página indica a versão vigente.',
        ],
      },
    ],
  },
  {
    slug: 'termos',
    title: 'Termos de Uso',
    status: 'published',
    path: '/termos',
    metaDescription:
      'Condições de uso do site Camilla Áurea: natureza educativa dos conteúdos, propriedade intelectual e responsabilidades.',
    updatedLabel,
    intro:
      'Estes termos regulam o uso do site Camilla Áurea. Ao navegar, você concorda com as condições abaixo e com a Política de Privacidade.',
    related: { href: '/privacidade', label: 'Política de Privacidade' },
    sections: [
      {
        heading: '1. O site',
        paragraphs: [
          'O site em ' +
            site +
            ' apresenta a marca Camilla Áurea, o Método Áurea, conteúdos de desenvolvimento pessoal feminino, a Central Áurea Links e a landing do guia gratuito MINERAR.',
          'A responsável é Camilla Áurea, pessoa natural, titular da marca. Não há, neste documento, razão social, CNPJ ou endereço comercial além do próprio site.',
        ],
      },
      {
        heading: '2. Natureza educativa',
        paragraphs: [
          'Os conteúdos têm caráter educativo e de desenvolvimento pessoal. Não constituem diagnóstico, terapia, tratamento, aconselhamento jurídico, financeiro ou médico, nem substituem o acompanhamento de profissionais de saúde.',
          'Nenhuma página do site promete resultado terapêutico, cura ou transformação garantida.',
        ],
      },
      {
        heading: '3. Propriedade intelectual',
        paragraphs: [
          'Textos, marca, logotipo, retrato oficial, nomes Método Áurea, MINERAR, LAPIDAR, BRILHAR, Luxo Afetivo, a estrutura das sete perguntas do guia e demais materiais do site pertencem a Camilla Áurea ou são usados com autorização.',
          'É permitido navegar, citar trechos curtos com crédito e compartilhar os endereços oficiais do site. Não é permitido copiar o conteúdo como se fosse próprio, revender, treinar modelos de inteligência artificial com os textos ou usar a imagem da Camilla sem autorização.',
        ],
      },
      {
        heading: '4. Guia MINERAR',
        paragraphs: [
          'O guia é apresentado como material gratuito da primeira etapa do Método Áurea. O envio do PDF ainda não está homologado: o formulário visível é demonstração e não gera cadastro.',
          'Quando o envio estiver ativo, o arquivo destina-se a uso pessoal. Não deve ser republicado na íntegra, vendido ou apresentado como obra de outra pessoa.',
        ],
      },
      {
        heading: '5. Uso aceitável',
        paragraphs: [
          'Você se compromete a usar o site de modo lícito, sem tentar invadir, sobrecarregar, raspar de forma abusiva ou inserir código malicioso.',
          'O site pode ser alterado, suspenso ou reorganizado sem aviso prévio, inclusive em páginas ainda em preparação, como a Biblioteca.',
        ],
      },
      {
        heading: '6. Links de terceiros',
        paragraphs: [
          'Instagram, WhatsApp e outros destinos externos não são controlados por este site. A presença do link não é endosso do conteúdo encontrado lá depois da publicação, nem transfere a Camilla Áurea a responsabilidade sobre a plataforma de destino.',
        ],
      },
      {
        heading: '7. Limitação',
        paragraphs: [
          'Na medida permitida pela lei, Camilla Áurea não responde por indisponibilidade temporária, por decisões que você tome a partir dos conteúdos educativos, nem por atos de terceiros em redes sociais ou aplicativos de mensagem.',
          'Nada nestes termos afasta direitos irrenunciáveis previstos no Código de Defesa do Consumidor quando ele se aplicar.',
        ],
      },
      {
        heading: '8. Alterações',
        paragraphs: [
          'Estes termos podem ser atualizados. A data no topo da página indica a versão vigente. O uso continuado após a atualização significa concordância com o texto novo.',
        ],
      },
      {
        heading: '9. Lei e foro',
        paragraphs: [
          'Aplica-se a legislação brasileira. Quando o Código de Defesa do Consumidor incidir, o foro será o do domicílio da usuária. Nos demais casos, fica eleito o foro da comarca de Florianópolis, Santa Catarina, onde a responsável declara residir publicamente neste site.',
        ],
      },
      {
        heading: '10. Contato',
        paragraphs: [
          'Dúvidas sobre estes termos ou sobre o site podem ser enviadas pelos canais oficiais: Instagram ' +
            instagram.handle +
            ' e WhatsApp indicado neste site.',
        ],
      },
    ],
  },
]

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((doc) => doc.slug === slug)
}

export function canonicalLegalUrl(path: string): string {
  return publicUrl(path)
}
