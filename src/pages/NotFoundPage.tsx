import { ButtonLink } from '../components/ui/ButtonLink'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Página não encontrada')

  return (
    <div className="page">
      <div className="container container--narrow">
        <p className="eyebrow">Erro 404</p>
        <h1 className="page-header__title">Esta página não existe</h1>
        <p className="page-header__intro">O endereço não corresponde a nenhuma seção do site.</p>
        <p className="page__back">
          <ButtonLink href="/">Voltar ao início</ButtonLink>
        </p>
      </div>
    </div>
  )
}
