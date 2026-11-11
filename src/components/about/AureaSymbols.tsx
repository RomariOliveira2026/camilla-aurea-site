import espelhoImage from '../../assets/images/simbolo-espelho.jpg'
import ouroImage from '../../assets/images/simbolo-ouro.jpg'
import ventreImage from '../../assets/images/simbolo-ventre.jpg'

type AureaSymbolName = 'espelho' | 'ventre' | 'ouro'

type AureaSymbolSlotProps = {
  name: AureaSymbolName
  label: string
}

const symbols: Record<
  AureaSymbolName,
  { src: string; alt: string }
> = {
  espelho: {
    src: espelhoImage,
    alt: 'Espelho de mão dourado com moldura ornamentada sobre veludo bordô, símbolo de MINERAR.',
  },
  ventre: {
    src: ventreImage,
    alt: 'Escultura dourada de mulher grávida em um círculo, símbolo de LAPIDAR.',
  },
  ouro: {
    src: ouroImage,
    alt: 'Pepita de ouro iluminada sobre veludo bordô, símbolo de BRILHAR.',
  },
}

export function AureaSymbolSlot({ name, label }: AureaSymbolSlotProps) {
  const symbol = symbols[name]

  return (
    <figure className="aurea-slot" data-symbol={name}>
      <img
        className="aurea-slot__image"
        src={symbol.src}
        alt={symbol.alt}
        width={800}
        height={800}
        decoding="async"
        loading="lazy"
      />
      <figcaption className="aurea-slot__label">{label}</figcaption>
    </figure>
  )
}
