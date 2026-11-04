# SPRINT WEB-001.3 — Camilla Áurea

**CTA Minerar no cabeçalho e seção informativa em preparação**

- Data: 03/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**

> Este relatório descreve um protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Objetivo

Adicionar o botão **Receber o Guia Minerar** no canto direito do cabeçalho, reutilizando a estrutura existente, e conduzir o clique a uma seção informativa marcada como material em preparação — sem download, formulário, checkout, cadastro ou coleta de dados.

---

## Arquivos deste sprint

**Criados**

- `src/components/ui/MinerarCta.tsx` — botão reutilizável (header, menu mobile; pronto para a landing)
- `src/sections/MinerarGuide.tsx` — seção `#guia-minerar`
- `docs/SPRINT-WEB-001.3-RELATORIO.md` — este arquivo

**Alterados**

- `src/content/site.ts` — objeto `minerarGuide` + `minerarGuideHref()`
- `src/components/ui/ButtonLink.tsx` — variante `cta` e `onClick`
- `src/components/ui/ui.css` — estilo ouro queimado / texto bordô, hover e foco
- `src/components/layout/SiteHeader.tsx` — CTA à direita no desktop; CTA no menu mobile
- `src/components/layout/layout.css` — posicionamento sem deslocar o menu centralizado
- `src/pages/HomePage.tsx` — seção após o Método Áurea
- `src/components/layout/SiteFooter.tsx` — versão `WEB-001.3`

O working tree ainda contém alterações anteriores (logo, foto de Sobre, favicon) **não incluídas neste sprint**.

---

## Comportamento

| Superfície | O que acontece |
| --- | --- |
| Desktop (≥ 896px) | Botão ouro à **direita** do header. Menu permanece no centro; logo à esquerda. |
| Mobile / tablet (abaixo de 896px) | O botão **não** compete com o Menu na barra. Aparece no **painel do menu** responsivo. |
| Clique | Vai para `/#guia-minerar` (seção informativa). Fecha o menu no mobile. |
| Seção | Título “Guia Minerar”, badge **Em preparação**, aviso de que não há envio nesta versão. |
| Integração futura | Em `src/content/site.ts`, mudar `minerarGuide.destination` de `'section'` para `'landing'` para usar `landingPath` (`/guia-minerar`). A rota da landing **não** foi criada. |

Não foram criados: formulário, input, download, checkout, cadastro, tracking ou API.

---

## Visual e acessibilidade

- Fundo `#C9A86A` (ouro queimado), texto `#4B1120` (bordô).
- Contraste **6,64:1** (já medido nos tokens) — AA para texto normal.
- Bordas em pílula, alinhadas aos demais botões.
- Hover: fundo `#B68E55` (ouro profundo), texto bordô.
- Foco visível: anel off-white no header escuro; anel bordô no menu claro.
- Texto do CTA compacto no desktop intermediário (896–1200px) para não empurrar o menu.

---

## Testes realizados

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros, 0 warnings |
| `npm run build` | OK |
| `npm audit --omit=dev` | 0 vulnerabilidades de produção |
| Captura 320 | Logo + Menu; sem CTA na barra; sem overflow visível |
| Captura 390 | Idem; Menu legível |
| Captura 768 | Layout mobile/tablet; CTA só no menu |
| Captura 1440 | CTA à direita; menu centralizado; logo à esquerda |
| Menu 390 aberto | CTA ouro no rodapé do painel |
| Seção `#guia-minerar` | Badge em preparação; sem formulário nem download |
| Clique do CTA | Âncora da seção informativa |

**Capturas** (pasta local `capturas-revisao/`, não versionada):

- `web-001.3-header-320.png`
- `web-001.3-header-390.png`
- `web-001.3-header-768.png`
- `web-001.3-header-1440.png`
- `web-001.3-menu-390.png`
- `web-001.3-guia-minerar-1440.png`

**Limitações**

- Apenas Chromium (Edge) headless no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.
- O harness de iframes (`.validation/viewports.html`) não completou o dump-dom headless nesta máquina (timeout de carregamento dos 7 iframes). A verificação visual e o build cobriram o comportamento.
- Tab físico não foi percorrido à mão.

Não foi feito push, deploy nem publicação externa.

---

## Pendências (anteriores, inalteradas)

1. Landing aprovada do Guia Minerar — só então mudar `destination` para `'landing'`.
2. Manual das Provocações Áureas.
3. Aprovação dos textos com a autora.
4. Política de Privacidade e Termos.

---

## Parecer

**GO para revisão visual local** do CTA no header/menu e da seção informativa.

**NO-GO para qualquer envio, captura de lead ou publicação externa** — o guia está em preparação e não há formulário.

O sprint seguinte não foi iniciado.
