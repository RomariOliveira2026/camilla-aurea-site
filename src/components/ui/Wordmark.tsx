import logo from '../../assets/brand/logo.png'
import { brand } from '../../content/site'

type WordmarkProps = {
  className?: string
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <img
      className={['wordmark', className].filter(Boolean).join(' ')}
      src={logo}
      alt={brand.name}
      width={180}
      height={70}
    />
  )
}
