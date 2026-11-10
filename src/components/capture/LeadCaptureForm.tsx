import { useId, useState, type FormEvent } from 'react'
import { submitLead } from '../../capture/provider'
import type { CaptureSource } from '../../capture/types'
import { leadFormCopy } from '../../content/capture'

type LeadCaptureFormProps = {
  source: CaptureSource
  tone?: 'dark' | 'light'
  showPrivacyNote?: boolean
}

type FieldErrors = {
  firstName?: string
  email?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadCaptureForm({
  source,
  tone = 'light',
  showPrivacyNote = true,
}: LeadCaptureFormProps) {
  const formId = useId()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState<string>(leadFormCopy.demoNotice)

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    const name = firstName.trim()
    const mail = email.trim()

    if (!name) next.firstName = leadFormCopy.firstNameRequired
    else if (name.length < 2) next.firstName = leadFormCopy.firstNameShort

    if (!mail) next.email = leadFormCopy.emailRequired
    else if (!EMAIL_PATTERN.test(mail)) next.email = leadFormCopy.emailInvalid

    return next
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate()
    setErrors(nextErrors)
    if (nextErrors.firstName || nextErrors.email) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    const result = await submitLead({
      firstName: firstName.trim(),
      email: email.trim(),
      marketingOptIn,
      source,
    })

    if (result.status === 'error' || result.status === 'unavailable') {
      setStatus('error')
      setMessage(result.message)
      return
    }

    setStatus('success')
    setMessage(result.message)
    setFirstName('')
    setEmail('')
    setMarketingOptIn(false)
  }

  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const statusId = `${formId}-status`
  const busy = status === 'submitting'

  return (
    <form
      className={`capture-form capture-form--${tone}`}
      onSubmit={onSubmit}
      noValidate
      aria-describedby={statusId}
    >
      {status === 'success' ? (
        <p id={statusId} className="capture-form__success" role="status">
          {message}
        </p>
      ) : (
        <>
          <p id={statusId} className="capture-form__notice" role="status">
            {leadFormCopy.demoNotice}
          </p>
          {status === 'error' ? (
            <p className="capture-form__error" role="alert">
              {message}
            </p>
          ) : null}

          <div className="capture-form__fields">
            <p className="capture-field">
              <label htmlFor={`${formId}-name`}>{leadFormCopy.firstNameLabel}</label>
              <input
                id={`${formId}-name`}
                name="firstName"
                type="text"
                autoComplete="given-name"
                spellCheck={false}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder={leadFormCopy.firstNamePlaceholder}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? nameErrorId : undefined}
                disabled={busy}
              />
              {errors.firstName ? (
                <span id={nameErrorId} className="capture-field__error">
                  {errors.firstName}
                </span>
              ) : null}
            </p>

            <p className="capture-field">
              <label htmlFor={`${formId}-email`}>{leadFormCopy.emailLabel}</label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={leadFormCopy.emailPlaceholder}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? emailErrorId : undefined}
                disabled={busy}
              />
              {errors.email ? (
                <span id={emailErrorId} className="capture-field__error">
                  {errors.email}
                </span>
              ) : null}
            </p>
          </div>

          <label className="capture-check">
            <input
              type="checkbox"
              name="marketingOptIn"
              checked={marketingOptIn}
              onChange={(event) => setMarketingOptIn(event.target.checked)}
              disabled={busy}
            />
            <span>
              {leadFormCopy.marketingLabel}
              <span className="capture-check__hint">{leadFormCopy.marketingHint}</span>
            </span>
          </label>

          <button className="btn btn--cta capture-form__submit" type="submit" disabled={busy}>
            {busy ? leadFormCopy.submitting : leadFormCopy.submit}
          </button>

          {showPrivacyNote ? <p className="capture-form__privacy">{leadFormCopy.privacyNote}</p> : null}
        </>
      )}
    </form>
  )
}
