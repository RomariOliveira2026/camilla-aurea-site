/*
 * Estrutura preparada para documentos jurídicos futuros.
 * Nenhum texto jurídico foi redigido: os documentos devem ser elaborados
 * e revisados por profissional habilitado antes de mudar `status` para 'published'.
 */

export type LegalDocument = {
  slug: string
  title: string
  status: 'in-preparation' | 'published'
  /** Caminho a ser usado quando houver roteamento e documento aprovado. */
  path: string
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'privacidade',
    title: 'Política de Privacidade',
    status: 'in-preparation',
    path: '/privacidade',
  },
  {
    slug: 'termos',
    title: 'Termos de Uso',
    status: 'in-preparation',
    path: '/termos',
  },
]
