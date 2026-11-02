import { brand } from '../../content/site'

type WordmarkProps = {
  className?: string
}

/**
 * Identificação tipográfica provisória. Não é o logotipo oficial:
 * substituir pelo arquivo aprovado (SVG) quando disponível.
 */
export function Wordmark({ className }: WordmarkProps) {
  return <span className={['wordmark', className].filter(Boolean).join(' ')}>{brand.name}</span>
}
