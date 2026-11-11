# SPRINT WEB-ÁUREA-SOBRE-002 — Camilla Áurea

**Lapidação visual e editorial da página Sobre Camilla Áurea**

- Data: 10/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- HEAD de referência: `537450f`
- Push / deploy: **não realizados**
- Textos autorais: **preservados integralmente**

---

## Objetivo

Elevar a apresentação visual de `/sobre` ao padrão premium Camilla Áurea, com ritmo editorial mais equilibrado e protagonismo das três etapas do Método Áurea, sem alterar a biografia aprovada pela fundadora.

Home, MINERAR, Biblioteca e Áurea Links não foram modificados neste sprint.

---

## Auditoria

| Item | Situação |
| --- | --- |
| Fotografia oficial | `src/assets/images/about.jpg` (819×1024) — mantida |
| Wordmark oficial | `src/assets/brand/logo.png` — autorizado; usado só no encerramento |
| Espelho / Ventre / Ouro | **não há arquivos oficiais no repositório** |
| Traços da Camilla | não alterados; nenhum recorte que corte o cabelo ou o rosto |
| SVG de traço do sprint 001 | retirado como substituto definitivo |

---

## Arquivos alterados

- `src/pages/SobrePage.tsx` — ritmo das seções, espaços reservados, wordmark no encerramento
- `src/pages/sobre.css` — medida, espaçamento, hero, três palcos do Método, assinatura
- `src/components/about/AureaSymbols.tsx` — painéis reservados (não são a arte definitiva)

## Arquivos criados

- `docs/SPRINT-WEB-AUREA-SOBRE-002-RELATORIO.md` — este arquivo

`src/content/aboutPage.ts` não foi alterado. Nenhuma credencial foi inventada.

---

## O que mudou visualmente

### Hero

Layout em duas colunas a partir de 56em (foto à esquerda, apresentação à direita). Proporção da foto 4:5, `object-fit: cover`, posição 52% / 6% — o retrato cabe quase inteiro, com cabelo e rosto visíveis. A coluna da foto foi ampliada para `minmax(19rem, 25rem)`.

### Ritmo editorial

| Bloco | Composição |
| --- | --- |
| Trajetória | coluna estreita (38rem), citações com filete dourado |
| Método | fundo creme, introdução estreita, três palcos em grade |
| Filosofia | coluna um pouco mais larga (40rem), segunda citação em itálico |

Sem cartões extras, sem animações, sem ícones genéricos.

### Símbolos do Método Áurea

Três espaços reservados em protagonismo, com geometria distinta e o nome do símbolo:

| Etapa | Símbolo | Forma do espaço |
| --- | --- | --- |
| MINERAR | Espelho | retângulo |
| LAPIDAR | Ventre | óvalo |
| BRILHAR | Ouro | círculo |

As descrições autorais de cada movimento permanecem abaixo do painel. Os painéis **não substituem** os arquivos oficiais.

### Encerramento

Preservado:

- «Porque o ouro não precisa ser criado. Precisa ser reconhecido.»
- «O ouro já estava em você.»
- nome e papel da fundadora
- botão **Conheça o Método Áurea** → `/#metodo`

Assinatura visual: Wordmark oficial (`logo.png`) acima da frase, em fundo bordô. O logotipo já é dourado e lê-se sobre o bordô.

---

## Imagens oficiais ainda necessárias

Enviar arquivos aprovados pela Camilla, com fundo transparente ou creme, para substituir os espaços reservados:

1. **Espelho** — símbolo de MINERAR (PNG ou SVG, lado ≥ 800 px se raster).
2. **Ventre / Gravidez** — símbolo de LAPIDAR (mesmo critério).
3. **Ouro** — símbolo de BRILHAR (mesmo critério).

Sugestão de nomes no repositório, quando forem fornecidos:

- `src/assets/brand/simbolo-espelho.png` (ou `.svg`)
- `src/assets/brand/simbolo-ventre.png`
- `src/assets/brand/simbolo-ouro.png`

Não usar imagens geradas nem ícones de biblioteca como versão definitiva.

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros |
| `npm run build` | OK (`about-Dfd0GH2d.jpg` e `logo-DzNALgDW.png` no bundle) |
| Overflow 320 / 390 / 768 / 1440 | nenhum |
| Foto oficial carregada | sim (`naturalWidth > 0`) |
| Wordmark no encerramento | sim |
| Textos autorais conferidos | lead, pergunta, MINERAR, LAPIDAR, BRILHAR, frases finais |
| Menu Sobre | `/sobre` (cabeçalho e rodapé) |
| CTA Método | `/#metodo` — seção `#metodo` presente |
| Hero 1440 | duas colunas (`400px 688px`) |

**Contraste (WCAG, tema diurno):**

| Par | Razão |
| --- | --- |
| Título bordô / off-white | 14.24:1 |
| Corpo / off-white | 16.58:1 |
| Títulos dos movimentos / creme | 12.63:1 |
| Rótulo Espelho/Ventre/Ouro (`#7A5A2A`) / off-white | 6.00:1 |
| Frase final off-white / bordô | 14.24:1 |
| «O ouro já estava em você.» ouro / bordô | 6.64:1 |
| Botão CTA (texto bordô sobre ouro queimado) | 6.64:1 |

Um h1, h2 por seção, retrato com `alt` descritivo, wordmark do encerramento oculto para leitores de tela (o nome já está no texto).

**Capturas** (`capturas-revisao/`, não versionadas):

- `sobre-002-320.png` / `sobre-002-390.png` / `sobre-002-768.png` / `sobre-002-1440.png`
- `sobre-002-hero-390.png` / `sobre-002-hero-1440.png`
- `sobre-002-metodo-390.png` / `sobre-002-metodo-1440.png`
- `sobre-002-close-390.png` / `sobre-002-close-1440.png`

Comparativo com o sprint 001: `sobre-001-{320,390,768,1440}.png`.

**Limitações:** Chromium headless no Windows; sem Safari, celular físico ou leitor de tela real.

---

## Riscos e pendências

1. Aprovação visual da página `/sobre` pela Camilla.
2. Arquivos oficiais de Espelho, Ventre e Ouro — os painéis atuais são reserva elegante, não a arte definitiva.
3. Metadados de rastreadores para `/sobre` (HTML específico), se a página for compartilhada em redes — a rota continua SPA, como no sprint 001.
4. Em mobile, o botão flutuante de WhatsApp ainda pode aproximar-se do texto em alguns pontos de rolagem (reserva de padding aplicada; o componente é global e não foi redesenhado).
5. Deploy somente com autorização.

---

## Parecer

**GO para revisão visual local** da página Sobre, pela Camilla.

**NO-GO para push e deploy** neste sprint.

A biografia aprovada permanece integral. O retrato oficial está completo. As três etapas ganharam palco próprio, à espera dos símbolos oficiais. O encerramento usa a logo autorizada e as duas frases pedidas, com o CTA funcional.

O sprint seguinte não foi iniciado.
