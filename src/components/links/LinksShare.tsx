import { useEffect, useId, useState } from 'react'
import { aureaLinksUrl } from '../../content/site'
import { linksShare, linksShareMessage, whatsappShareHref } from '../../content/links'

type CopyState = 'idle' | 'copied' | 'failed'

function canUseNativeShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

async function copyText(value: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return true
    } catch {
      /* fallback abaixo */
    }
  }

  try {
    const field = document.createElement('textarea')
    field.value = value
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.left = '-9999px'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    return ok
  } catch {
    return false
  }
}

export function LinksShare() {
  const url = aureaLinksUrl()
  const statusId = useId()
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const canNativeShare = canUseNativeShare()

  useEffect(() => {
    if (copyState !== 'copied') return
    const timer = window.setTimeout(() => setCopyState('idle'), 3200)
    return () => window.clearTimeout(timer)
  }, [copyState])

  async function handleCopy() {
    const ok = await copyText(url)
    setCopyState(ok ? 'copied' : 'failed')
  }

  async function handleNativeShare() {
    if (typeof navigator.share !== 'function') {
      await handleCopy()
      return
    }
    try {
      await navigator.share({
        title: 'Camilla Áurea',
        text: linksShareMessage(url),
        url,
      })
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      await handleCopy()
    }
  }

  const status =
    copyState === 'copied'
      ? linksShare.copiedLabel
      : copyState === 'failed'
        ? linksShare.copyFailedLabel
        : ''

  return (
    <div className="links-share">
      <p className="links-share__label">Compartilhar</p>
      <div className="links-share__actions">
        <a
          className="links-share__action"
          href={whatsappShareHref(url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linksShare.whatsappLabel}
          <span className="sr-only"> (abre o WhatsApp em nova aba, sem coletar seu número)</span>
        </a>
        <button type="button" className="links-share__action" onClick={() => void handleCopy()}>
          {copyState === 'copied' ? linksShare.copiedLabel : linksShare.copyLabel}
        </button>
        {canNativeShare ? (
          <button
            type="button"
            className="links-share__action"
            onClick={() => void handleNativeShare()}
          >
            {linksShare.nativeLabel}
          </button>
        ) : null}
      </div>
      <p id={statusId} className="sr-only" role="status" aria-live="polite">
        {status}
      </p>
      {copyState === 'copied' ? (
        <p className="links-share__confirm" aria-hidden="true">
          {linksShare.copiedLabel}
        </p>
      ) : null}
      {copyState === 'failed' ? (
        <p className="links-share__fallback">
          {linksShare.copyFailedLabel}{' '}
          <span className="links-share__url">{url}</span>
        </p>
      ) : (
        <p className="links-share__hint">{linksShare.fallbackHint}</p>
      )}
    </div>
  )
}
