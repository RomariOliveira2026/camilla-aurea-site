# SPRINT WEB-ÁUREA-LINKS-001 — Camilla Áurea

**ÁUREA LINKS — Central de Links Oficial**

- Data: 09/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Rastreamento / anúncios: **não ativados**

> Protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Objetivo

Página própria para a bio do Instagram, na aplicação React + Vite + TypeScript existente, com identidade Camilla Áurea e manutenção por um módulo tipado.

Home, Biblioteca Áurea e landing MINERAR foram preservadas.

---

## Arquivos criados

- `src/links/types.ts` — contrato do catálogo
- `src/links/metrics.ts` — medição agregada **desligada** (sem cookie, pixel ou PII)
- `src/content/links.ts` — textos da página e os 8 itens
- `src/components/links/LinkIcon.tsx` — ícones de linha
- `src/components/links/AureoLinkCard.tsx`
- `src/pages/LinksPage.tsx`
- `src/pages/links.css`
- `docs/SPRINT-WEB-AUREA-LINKS-001-RELATORIO.md` — este arquivo

## Arquivos alterados

- `src/App.tsx` — rota `/links`; header, rodapé e WhatsApp ocultos só nesta página
- `src/main.tsx` — CSS da central
- `src/hooks/usePageTitle.ts` — `usePageMeta` (título + description)
- `src/components/layout/SiteFooter.tsx` — versão do rodapé nas demais páginas

`vercel.json` já reescreve `/(.*)` para `index.html` — acesso direto e refresh em `/links` ficam cobertos.

---

## Rota e identidade

**URL:** `/links`

Cabeçalho da página: logo oficial, **Camilla Áurea**, **Poder • Valor • Luxo Afetivo**, *O ouro já estava em você.*

Fundo bordô `#4B1120`, ouro `#C9A86A` / `#B68E55`, off-white `#FFF8F0`. Composição central, coluna estreita no desktop (leitura de bio). Toggle sol/lua reutiliza o tema existente.

---

## Links

| # | Item | Destino | Estado |
| --- | --- | --- | --- |
| 01 | Receba o Guia MINERAR | `/minerar` | visível, destaque |
| 02 | Conheça o Método Áurea | `/#metodo` | visível |
| 03 | Biblioteca Áurea | `/biblioteca` | visível |
| 04 | Provocações Áureas | `/biblioteca/provocacoes-aureas` | visível |
| 05 | Nosso Site Oficial | `/` | visível |
| 06 | Jornadas e Experiências | — | oculto (sem oferta publicada) |
| 07 | YouTube Oficial | — | oculto (URL não confirmada) |
| 08 | Contato Comercial | — | oculto (canal não aprovado) |

Itens ocultos **não são renderizados**. Nenhum aponta para `#`.

### Como atualizar

Editar `src/content/links.ts`:

1. Para publicar um item oculto: informar `href` válido (`/` interno ou `https://` externo) e `visible: true`.
2. Para destacar outro botão: `featured: true` em um único item.
3. Novos links: acrescentar ao array `aureoLinks` com `id`, `order` e `kind`.
4. Não ligar `linkMetrics.enabled` sem revisão de privacidade.

Não há painel administrativo.

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros |
| `npm run build` | OK |
| GET `/links` (preview) | 200 |
| Overflow 320 / 390 / 768 / 1440 | nenhum |
| 5 destinos ativos | minerar, `#metodo`, biblioteca, provocações, home |
| Itens 06–08 no DOM | ausentes |
| Foco no primeiro link | teclado |
| Header/rodapé/WhatsApp em `/links` | ocultos |
| Header na Home após “Site Oficial” | volta a aparecer |
| Title / description | `ÁUREA LINKS — Camilla Áurea` |

**Capturas** (`capturas-revisao/`, não versionadas):

- `links-001-320.png`
- `links-001-390.png`
- `links-001-768.png`
- `links-001-1440.png`

**Limitações:** Chromium headless no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.

---

## Pendências

1. Confirmar URL do YouTube e canal de contato comercial.
2. Publicar Jornadas somente com oferta aprovada.
3. Aprovação visual da Camilla.
4. Revisar privacidade antes de qualquer métrica de clique.
5. Inserir `camillaurea.com.br/links` na bio do Instagram **só após deploy autorizado**.

---

## Parecer

**GO para revisão visual local** da Central de Links.

**NO-GO para push, deploy, anúncio, rastreamento ou captação.**

O sprint seguinte não foi iniciado.
