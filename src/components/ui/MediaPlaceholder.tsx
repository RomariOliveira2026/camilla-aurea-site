type MediaPlaceholderProps = {
  /** Descrição acessível do conteúdo que ocupará o espaço. */
  description: string
  label?: string
  tone?: 'light' | 'dark'
  className?: string
}

/** Espaço reservado para imagens oficiais ainda não fornecidas. */
export function MediaPlaceholder({
  description,
  label = 'Fotografia oficial · pendente',
  tone = 'light',
  className,
}: MediaPlaceholderProps) {
  const classes = ['media-placeholder', `media-placeholder--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} role="img" aria-label={description}>
      <span className="media-placeholder__label" aria-hidden="true">
        {label}
      </span>
    </div>
  )
}
