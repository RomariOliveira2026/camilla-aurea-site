# SPRINT ÁUREA-CAPTAÇÃO-001 — Camilla Áurea

**Hero de conversão e landing page MINERAR**

- Data: 07/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Captação real / envio de e-mail: **não ativados**

> Este relatório descreve um protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Objetivo

Preparar uma experiência premium de captação de contatos para o guia gratuito MINERAR: Hero da Home com a capa aprovada, formulário integrado e landing `/minerar`, sem coletar dados nem ligar provedor de e-mail.

---

## Arquivos deste sprint

**Criados**

- `src/capture/types.ts` — payload e resultados da captação
- `src/capture/provider.ts` — adaptador em modo `demo` (sem rede, sem storage)
- `src/content/capture.ts` — textos do formulário e da landing
- `src/components/capture/LeadCaptureForm.tsx` — formulário reutilizável
- `src/components/capture/GuideMockup.tsx` — mockup 3D da capa aprovada
- `src/components/capture/capture.css`
- `src/pages/MinerarPage.tsx` — rota `/minerar`
- `docs/SPRINT-AUREA-CAPTACAO-001-RELATORIO.md` — este arquivo

**Alterados**

- `src/assets/images/hero.png` — mockup 3D da capa aprovada, fundo transparente (689×999)
- `src/content/site.ts` — copy da Hero, destino do CTA para `/minerar`
- `src/sections/Hero.tsx` — headline, descrição, apresentação do guia, formulário e mockup
- `src/sections/MinerarGuide.tsx` — teaser que aponta para a landing
- `src/sections/sections.css` — Hero de conversão; sequência mobile
- `src/pages/pages.css` — layout da landing
- `src/App.tsx` — rota `/minerar`
- `src/main.tsx` — CSS do formulário
- `src/components/layout/SiteFooter.tsx` — versão do rodapé
- `src/components/ui/ui.css` — `button.btn`
- `src/styles/tokens.css` — tema noturno nos cards de confiança

O CTA do header (`MinerarCta`) passou a usar `minerarGuideHref()` → `/minerar`, sem reescrita do componente.

---

## Comportamento

| Superfície | O que acontece |
| --- | --- |
| Hero da Home (desktop) | Copy e formulário à esquerda; mockup 3D à direita, sem fundo. |
| Hero da Home (mobile) | Título → benefício → mockup → formulário, em rolagem natural. |
| Header / menu | **Receber o Guia Minerar** abre `/minerar`. |
| `/minerar` | Apresentação, mockup, sete marcas da experiência, formulário, privacidade/entrega, convite ao Método Áurea. |
| Formulário | Primeiro nome, e-mail, checkbox de marketing **desmarcado**, CTA **Receber meu guia gratuito**. |
| Modo demo | Submit não chama API, não grava `localStorage` e não envia e-mail. |
| Sucesso demo | Mensagem de que nenhum dado foi transmitido. |
| Erro demo | E-mail `erro@demonstracao.local` só para revisar o estado de erro da UI. |
| Validação | Nome e e-mail obrigatórios; mensagens no próprio campo. |

Não foram criados: provedor real, credenciais, banco, tracking, anúncios, download do PDF.

Os enunciados das sete perguntas **não foram inventados** nem reproduzidos. A landing explica a experiência e deixa o conteúdo no PDF.

---

## Arquitetura de captação

`submitLead()` em `src/capture/provider.ts`:

- `captureConfig.mode = 'demo'`
- `providerName = null`
- `isCaptureLive()` permanece falso até haver provedor homologado

Quando um serviço de envio for escolhido, o ponto de troca é esse módulo. A finalidade de entrega do PDF e a autorização opcional de marketing já viajam em campos separados (`email` / `firstName` vs `marketingOptIn`).

---

## Visual

Paleta oficial preservada: bordô `#4B1120`, ouro `#C9A86A` / `#B68E55`, off-white `#FFF8F0`.

Capa aprovada pela Camilla no mockup 3D, sem redesenho do conteúdo da capa. Fundo preto e pedestal cinza do JPG original foram recortados; o PNG resultante tem canal alfa.

---

## Testes realizados

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros, 0 warnings |
| `npm run build` | OK |
| Overflow 320 / 390 / 1440 (Home e `/minerar`) | `scrollWidth === clientWidth` |
| Captura Home 1440 | Headline, copy, formulário, mockup à direita |
| Captura Home 390 | Título, benefício, mockup; formulário abaixo da dobra |
| Captura `/minerar` 1440 / 390 | Identidade consistente; mockup sem fundo |
| Captura bloco de inscrição 1440 | Nome, e-mail, checkbox desmarcado, CTA |
| Submit demo (nome + e-mail) | Sucesso de demonstração; nenhum envio |
| Submit `erro@demonstracao.local` | Estado de erro da UI |
| Submit vazio | “Informe o primeiro nome.” / “Informe o e-mail.” |
| Checkbox marketing | Inicia desmarcado |
| CTA do header | Destino `/minerar` |
| Navegação `/#metodo` | Convite discreto na landing |

**Capturas** (pasta local `capturas-revisao/`, não versionada):

- `captacao-home-1440.png`
- `captacao-home-390.png`
- `captacao-minerar-1440.png`
- `captacao-minerar-390.png`
- `captacao-minerar-form-1440.png`
- `captacao-form-success.png`
- `captacao-form-error.png`

**Limitações**

- Chromium headless no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.
- Tab físico não foi percorrido à mão.
- O preview serviu o build de produção em `http://127.0.0.1:4173/`.

Não foi feito push, deploy nem publicação externa.

---

## Pendências

1. Homologar provedor de e-mail e ligar `captureConfig` só com credenciais reais.
2. Redigir e publicar Política de Privacidade e Termos.
3. Incluir os enunciados das sete perguntas somente a partir do PDF aprovado.
4. Entrega real do PDF após o envio estar operacional.
5. Aprovação visual da fundadora.

---

## Riscos

- Ligar `mode: 'live'` sem provedor homologado quebraria a promessa de “nenhum dado coletado”.
- O mockup PNG (~1,2 MB) pesa no first load; aceitável para revisão, candidata a compressão depois.
- Textos da landing parafraseiam o briefing; não substituem a revisão editorial da Camilla.

---

## Critérios de liberação (ainda não atendidos)

- [ ] Aprovação visual e de copy pela fundadora
- [ ] Provedor de envio homologado
- [ ] Documentos jurídicos publicados
- [ ] Autorização explícita para push, deploy e captação real

---

## Parecer

**GO para revisão visual local** da Hero de conversão, da landing `/minerar` e do formulário em modo demonstração.

**NO-GO para captação real, envio de e-mail, anúncio ou publicação externa.**

O sprint seguinte não foi iniciado.
