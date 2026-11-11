# SPRINT WEB-ÁUREA-SOBRE-001 — Camilla Áurea

**Implementação editorial premium — Sobre Camilla Áurea**

- Data: 10/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Texto: biografia aprovada pela fundadora, reproduzida sem reformulação

---

## Objetivo

Página definitiva `/sobre`, com as cinco seções pedidas, fotografia oficial e identidade bordô/ouro. Home, MINERAR, Biblioteca e Áurea Links preservados, salvo a navegação e o teaser da seção Sobre na home.

---

## Arquivos criados

- `src/content/aboutPage.ts` — texto autoral organizado por seção
- `src/pages/SobrePage.tsx`
- `src/pages/sobre.css`
- `src/components/about/AureaSymbols.tsx` — Espelho, Ventre e Ouro em traço editorial
- `docs/SPRINT-WEB-AUREA-SOBRE-001-RELATORIO.md` — este arquivo

## Arquivos alterados

- `src/App.tsx` — rota `/sobre`
- `src/main.tsx` — CSS da página
- `src/content/site.ts` — item **Sobre** do menu aponta para `/sobre`; retrato oficial mantido
- `src/sections/About.tsx` — teaser na home (foto, subtítulo, primeira frase aprovada e “Ler a trajetória”)
- `src/sections/sections.css` — estilo do subtítulo no teaser
- `src/styles/tokens.css` — modo noturno do subtítulo

Landing MINERAR, Biblioteca e `/links` não foram alterados.

---

## Estrutura

| Seção | Conteúdo |
| --- | --- |
| 01 Apresentação | Título, subtítulo, retrato `about.jpg`, “Sou Camilla Áurea…” |
| 02 História | Formação jurídica, pergunta central e convicção sobre força e sensibilidade |
| 03 Método Áurea | MINERAR (Espelho), LAPIDAR (Ventre), BRILHAR (Ouro) |
| 04 Filosofia | Poder feminino, Luxo Afetivo, Florianópolis e *O Livro das Três Serpentes* |
| 05 Encerramento | “Porque o ouro não precisa ser criado…” / “O ouro já estava em você.” / CTA |

CTA **Conheça o Método Áurea** → `/#metodo`.

---

## Símbolos

Não há arquivos oficiais de Espelho, Ventre e Ouro no repositório. Foram desenhados em SVG de traço, na paleta da marca, com o nome do símbolo visível. Não foram usados ícones de biblioteca nem imagens geradas da Camilla.

---

## Navegação e metadados

- Menu e rodapé: **Sobre** → `/sobre`
- Teaser da home (`#sobre`) permanece para quem chega por `/#sobre`
- Title: `Sobre Camilla Áurea — Camilla Áurea`
- Description: a subtítulo + formação
- Canonical: `https://camillaurea.com.br/sobre`

Como o site é SPA, rastreadores sem JavaScript ainda veem o `index.html` da home. A prévia social específica de `/sobre` depende de prerender, como já ocorre fora de `/links`.

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros |
| `npm run build` | OK |
| Overflow 320 / 390 / 768 / 1440 | nenhum |
| Foto oficial | presente |
| Símbolos Espelho, Ventre, Ouro | presentes |
| Menu Sobre | `/sobre` |
| CTA Método | `/#metodo` |

**Capturas** (`capturas-revisao/`, não versionadas):

- `sobre-001-320.png`
- `sobre-001-390.png`
- `sobre-001-768.png`
- `sobre-001-1440.png`

**Limitações:** Chromium headless no Windows; sem Safari, celular físico ou leitor de tela real.

---

## Pendências

1. Aprovação visual da página `/sobre` pela Camilla.
2. Arquivos oficiais dos símbolos (Espelho, Ventre, Ouro), se existirem em maior resolução, para substituir o traço editorial.
3. Metadados de rastreadores para `/sobre` (HTML específico), se a página for compartilhada em redes.
4. Deploy somente com autorização.

---

## Parecer

**GO para revisão visual local** da página Sobre.

**NO-GO para push e deploy** neste sprint.

O texto aprovado está integral na página, com identidade premium e leitura confortável no mobile. Pronta para a revisão visual final.

O sprint seguinte não foi iniciado.
