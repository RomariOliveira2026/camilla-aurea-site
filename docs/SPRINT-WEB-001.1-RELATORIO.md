# SPRINT WEB-001.1 — Camilla Áurea

**Refinamento editorial, Cliente Ideal 2.0 e Biblioteca Áurea**

- Data: 02/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Remoto: nenhum
- Push / deploy: **não realizados**

> Este relatório descreve um protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Checkpoint inicial

| Item | Valor |
| --- | --- |
| Hash | `1293d4fe2e950832bebe76f5fe5b3498b293bcb1` |
| Short | `1293d4f` |
| Mensagem | `checkpoint: WEB-001 versao inicial validada` |
| Working tree no início | limpa |

## Manual autoral

O arquivo **“Manual Marca Camilla Áurea — Provocações Áureas”** **não estava no workspace**.

Por isso:

- a estrutura da série e das três posições editoriais foi criada;
- **nenhum texto narrativo nem provocação de carrossel foi inventado, reescrito ou publicado**;
- a ordem interna reservada (patinete → manga e faca → café) existe só como `editorialKey` no catálogo, **sem aparecer como título público**.

Quando o manual for colocado no projeto, o caminho de inserção é `src/content/library/entries.ts` (campos `title`, `description`, `pillar`, `tags`, `narrative`, `slides`, `image`, `status`).

---

## Arquivos modificados

**Alterados**

- `package.json`, `package-lock.json` — dependência `react-router-dom`
- `src/App.tsx` — rotas
- `src/main.tsx` — CSS das páginas
- `src/content/site.ts` — Cliente Ideal 2.0, headline autoral, navegação
- `src/sections/Hero.tsx`, `src/sections/Library.tsx`, `src/sections/sections.css`
- `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx`
- `src/components/ui/ButtonLink.tsx`

**Criados**

- `src/content/library/types.ts`, `series.ts`, `entries.ts`, `index.ts`
- `src/components/library/SeriesCard.tsx`, `EntryCard.tsx`, `Carousel.tsx`, `PageHeader.tsx`
- `src/components/ui/AppLink.tsx`
- `src/pages/HomePage.tsx`, `LibraryPage.tsx`, `SeriesPage.tsx`, `EntryPage.tsx`, `NotFoundPage.tsx`, `pages.css`
- `src/hooks/usePageTitle.ts`
- `docs/SPRINT-WEB-001.1-RELATORIO.md` (este arquivo)

Nenhum arquivo do WEB-001 foi excluído.

---

## Alterações editoriais (Cliente Ideal 2.0)

Textos novos abaixo são **comunicação de produto**, não biografia nem resultado. Continuam provisórios até aprovação da autora.

| Superfície | O que mudou |
| --- | --- |
| Hero | Headline autoral: *“Você não precisa se abandonar para ser amada. O ouro já estava em você.”* |
| Hero | Nota de público marcada como **hipótese editorial a validar** (mulheres de 30 a 45 anos; autovalor, autonomia, presença e relações conscientes) |
| Hero | Legenda e alt da foto: **imagem editorial, não é retrato da fundadora** |
| Sobre | Hipótese de público + o amor romântico **não** é o único horizonte |
| Método Áurea | Introdução refinada; etapas oficiais **Minerar, Lapidar e Brilhar** intactas |
| Territórios | Poder, Valor, Presença e Expressão **intactos** |
| Luxo Afetivo | Ênfase em autovalor, autonomia/presença e relações conscientes, sem reduzir a marca ao amor romântico |

Não foram inventados: biografia, credenciais, depoimentos, números, produtos à venda nem promessas de cura.

---

## Estrutura da Biblioteca

Arquitetura pensada para **acrescentar séries sem reconstruir componentes**.

```
/biblioteca                              → catálogo de séries
/biblioteca/:seriesSlug                  → linha editorial
/biblioteca/:seriesSlug/:entrySlug       → publicação
```

**Campos de cada publicação:** título, descrição, pilar, tags, narrativa, slides de carrossel, imagem, ordem, status editorial (`in-preparation` | `ready-for-review` | `published`).

**Como incluir uma série nova**

1. Registrar em `src/content/library/series.ts`.
2. Incluir publicações em `src/content/library/entries.ts` com o mesmo `seriesSlug`.
3. Só mudar `status` para `published` quando o texto autoral estiver aprovado.

O componente `Carousel` só renderiza se houver slides **e** a publicação estiver `published`. Nesta versão ele não aparece, porque não há textos autorais.

---

## Conteúdos efetivamente inseridos

| Conteúdo | Status |
| --- | --- |
| Headline autoral da Camilla (hero) | Inserida |
| Nome da série **Provocações Áureas** | Inserido (categoria fixa) |
| Formato carrossel + frequência sugerida semanal | Inseridos como metadados |
| Textos do manual (narrativa e provocações) | **Não inseridos** — manual ausente |
| Títulos públicos das três publicações | Genéricos (“Publicação 01/02/03”), sem usar os nomes internos |
| Carrossel com slides | Não exibido |
| Imagens das publicações | Nenhuma |

---

## Testes realizados

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros, 0 warnings |
| `npm run build` | OK |
| `npm audit --omit=dev` | 0 vulnerabilidades de produção |
| Harness Edge headless (`.validation/viewports.html`) | **todos os checks passaram**, incluindo 320 / 390 / 768 / 1440, menu mobile, âncoras, headline, hipótese 30–45, etapas e territórios oficiais, páginas da Biblioteca e aviso de manual pendente |
| Capturas visuais | Home desktop e mobile, Biblioteca, série, publicação 01, Luxo Afetivo mobile |

**Limitações (iguais ao WEB-001, salvo o harness):**

- Apenas Chromium (Edge) no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.
- Tab físico não foi percorrido à mão.
- O perfil @camilla.aurea não foi verificado quanto à titularidade.

Não foi feito deploy.

---

## Pendências

1. Inserir o **Manual Marca Camilla Áurea — Provocações Áureas** e preencher `entries.ts` na ordem patinete → manga e faca → café, distinguindo narrativa e slides.
2. Aprovar os textos de Cliente Ideal 2.0 (Sobre, Método, Luxo Afetivo) com a autora.
3. Direitos de uso da imagem do hero; ela está legendada como editorial.
4. Fotografia oficial da fundadora (o espaço em Sobre continua placeholder).
5. Política de Privacidade e Termos (ainda “em elaboração”).
6. Confirmar o Instagram oficial.

---

## Parecer

**GO para revisão visual local** da estrutura, da Home atualizada e da arquitetura da Biblioteca.

**NO-GO para publicação de conteúdo da série Provocações Áureas** — o manual não estava no workspace e nenhum texto autoral foi fabricado.

**NO-GO para qualquer publicação externa** até autorização expressa.

O Sprint seguinte não foi iniciado.
