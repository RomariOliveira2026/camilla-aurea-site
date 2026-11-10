# SPRINT ÁUREA-CAPTAÇÃO-002 — Camilla Áurea

**Refinamento de conversão da landing page MINERAR**

- Data: 07/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Captação real / envio de e-mail: **não ativados**

> Protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Objetivo

Melhorar a captação em `/minerar` sem reconstruir a identidade visual: CTA na primeira dobra, formulário mais perto da oferta, benefícios concretos do PDF, menos repetição, privacidade mais simples e WhatsApp flutuante ausente só nesta rota.

---

## Arquivos alterados

- `src/pages/MinerarPage.tsx` — CTA da dobra, âncora do formulário, benefícios, privacidade compacta
- `src/content/capture.ts` — copy da landing (sem kicker repetido; três benefícios; privacidade enxuta)
- `src/content/site.ts` — `formAnchor` e `minerarFormHref()`
- `src/components/ui/MinerarCta.tsx` — header/menu conduzem a `/minerar#guia-formulario`
- `src/components/layout/FloatTools.tsx` — WhatsApp oculto em `/minerar`
- `src/components/layout/SiteFooter.tsx` — versão 002
- `src/components/capture/LeadCaptureForm.tsx` — `showPrivacyNote` para não duplicar o aviso
- `src/App.tsx` — âncora do formulário recebe foco no primeiro campo
- `src/pages/pages.css` — hierarquia da dobra, espaçamento menor, cards de benefício
- `src/styles/base.css` — `scroll-padding-top` inclui o aviso de protótipo
- `src/styles/tokens.css` — tema noturno nos benefícios
- `docs/SPRINT-AUREA-CAPTACAO-002-RELATORIO.md` — este arquivo

Capa e mockup aprovados (`src/assets/images/hero.png`) **não foram alterados**.

---

## O que mudou na experiência

| Pedido | Como ficou |
| --- | --- |
| CTA na primeira dobra | **Quero receber meu guia gratuito** no intro, ao lado do mockup (desktop) e acima do livro (mobile). |
| CTA → formulário | Âncora `#guia-formulario`. Clique na dobra rola e foca o primeiro nome. Header/menu usam o mesmo destino. |
| Formulário perto da oferta | Saiu de depois da seção longa; ficou imediatamente abaixo da dobra. |
| Sete perguntas | Três benefícios do PDF (presença, necessidades, explorar o não visto), sem inventar resultados nem enunciados. |
| Menos espaço e repetição | Sem kicker duplicado; seções com padding menor; cards de privacidade removidos. |
| Privacidade | Um parágrafo sob o form: entrega pendente, política **em elaboração**, nada no navegador. Checkbox de marketing opcional permanece desmarcado. |
| WhatsApp | Presente na Home; **ausente** em `/minerar`. Seta de topo permanece. |

O formulário continua em modo **demonstração**. Nenhum dado é enviado ou armazenado.

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros, 0 warnings |
| `npm run build` | OK |
| Overflow 320 / 390 / 768 / 1440 | Nenhum |
| `/minerar` 320–1440 | CTA visível; mockup sem fundo; sem WhatsApp |
| Clique no CTA da dobra | Hash `#guia-formulario`; foco em `firstName`; form sob o header |
| Header **Receber o Guia Minerar** | `/minerar#guia-formulario`; WhatsApp some na landing |
| Menu 390 | Abre (`Abrir menu`); Escape fecha; sem WhatsApp |
| Submit demo | Sucesso de demonstração; marketing inicia desmarcado |
| Home 1440 / 390 | WhatsApp **permanece** |

**Capturas** (`capturas-revisao/`, não versionadas):

- `captacao-002-minerar-320.png`
- `captacao-002-minerar-390.png`
- `captacao-002-minerar-768.png`
- `captacao-002-minerar-1440.png`
- `captacao-002-cta-alvo.png`
- `captacao-002-beneficios-1440.png`
- `captacao-002-menu-390.png`
- `captacao-002-home-1440.png`
- `captacao-002-home-390.png`

**Limitações:** Chromium headless no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.

Não houve push, deploy nem publicação.

---

## Pendências

1. Homologar provedor de e-mail antes de qualquer captação real.
2. Redigir e publicar Política de Privacidade e Termos (ainda em elaboração).
3. Enunciados das sete perguntas só a partir do PDF aprovado.
4. Aprovação visual da fundadora.

---

## Parecer

**GO para revisão visual local** da landing refinada.

**NO-GO para captação real, e-mail, anúncio, push ou deploy.**

O sprint seguinte não foi iniciado.
