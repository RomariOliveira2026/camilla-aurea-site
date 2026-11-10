# SPRINT WEB-ÁUREA-LINKS-002 — Camilla Áurea

**ÁUREA LINKS — refinamento premium da Central de Links**

- Data: 09/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Rastreamento / anúncios / captação real: **não ativados**

> Protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## Objetivo

Aprimorar `/links` sem alterar a identidade oficial: logo, bordô, dourado e composição centralizada. Hierarquia mais clara, primeiro CTA mais direto, cartões mais leves no mobile e rodapé com assinatura.

Home, Biblioteca Áurea e landing MINERAR foram preservadas. Nenhum outro sprint foi iniciado.

---

## Arquivos alterados

- `src/content/links.ts` — retrato, título/subtítulo do CTA, `linksSocials`, `getVisibleSocials()`, assinatura
- `src/links/types.ts` — contrato `SocialSlot` (`confirmed` + `href` nulo até haver URL real)
- `src/pages/LinksPage.tsx` — retrato circular, Instagram confirmado, rodapé “Com carinho, Camilla Áurea.”
- `src/pages/links.css` — espaçamento, recorte do retrato, cartões sem numeração, alvos de toque
- `src/components/links/AureoLinkCard.tsx` — numeração removida
- `src/components/layout/SiteFooter.tsx` — versão `WEB-ÁUREA-LINKS-002` nas demais páginas

Configuração continua centralizada em `src/content/links.ts` (`aureoLinks` + `linksSocials`): ordem, rótulo, destino e visibilidade.

## Arquivos criados

- `docs/SPRINT-WEB-AUREA-LINKS-002-RELATORIO.md` — este arquivo

A logo oficial não foi substituída nem redesenhada.

---

## Retrato

A fotografia oficial do projeto (`about.jpg`, usada em Sobre) foi aplicada em círculo, com `object-fit: cover` e `object-position: 50% 10%` para privilegiar o rosto.

O recorte em 320 / 390 / 768 / 1440 enquadra o rosto com nitidez. A imagem original, porém, é um retrato de corpo sentado em estúdio cinza — não é um recorte quadrado feito para bio.

**Pendência:** confirmar com a Camilla o uso desta foto na Central de Links. Preferível um retrato quadrado autorizado, com fundo alinhado à identidade.

Desligar o retrato: `linksHub.portrait.enabled = false` — a logo permanece.

---

## CTA e cartões

| Item | Destino | Estado |
| --- | --- | --- |
| Receba gratuitamente o Guia MINERAR | `/minerar` | visível, destaque |
| Conheça o Método Áurea | `/#metodo` | visível |
| Biblioteca Áurea | `/biblioteca` | visível |
| Provocações Áureas | `/biblioteca/provocacoes-aureas` | visível |
| Nosso Site Oficial | `/` | visível |
| Jornadas e Experiências | — | oculto (sem oferta publicada) |
| YouTube Oficial | — | oculto (URL não confirmada) |
| Contato Comercial | — | oculto (canal não aprovado) |

Subtítulo do destaque: *7 perguntas para voltar a si. Experiência gratuita.*

Numeração removida: no mobile ganhava área útil e reduzia ruído visual.

### Redes

- Instagram `https://www.instagram.com/camilla.aurea/` — confirmado, ícone 44×44
- YouTube — slot reservado, **sem URL fictícia**, não renderizado

Nenhum produto pago foi adicionado.

### Como atualizar

Editar `src/content/links.ts`:

1. Publicar item oculto: `href` válido e `visible: true`.
2. Destacar outro botão: `featured: true` em um único item.
3. Rede social: `confirmed: true` e `href` https real em `linksSocials`.
4. Não ligar `linkMetrics.enabled` sem revisão de privacidade.

---

## Acessibilidade e toque

- Foco visível em cartões e Instagram (`outline` dourado, offset 3px)
- Skip link do site preservado
- Instagram anuncia “abre em nova aba”
- Cartão em destaque: altura mínima 60px
- Demais cartões: 52px
- Ícone social: 44px
- Contraste: texto bordô sobre ouro queimado no CTA; off-white / ouro sobre bordô nos demais
- `prefers-reduced-motion` desliga a transição dos cartões
- Header, rodapé institucional e WhatsApp continuam ocultos só em `/links`

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros |
| `npm run build` | OK (`index-KElu2og6.css`, `index-DUs1QRjY.js`) |
| GET `/links` (preview `:4173`) | 200 |
| Overflow 320 / 390 / 768 / 1440 | nenhum |
| CTA destaque | título e subtítulo corretos |
| Numeração no DOM | ausente |
| Retrato circular | presente |
| Assinatura | `Com carinho, Camilla Áurea.` |
| Instagram | URL oficial, nova aba |
| YouTube / Jornadas / Contato | ausentes do DOM |
| `/minerar` | ok |
| `/#metodo` | ok |
| `/biblioteca` | ok |
| `/biblioteca/provocacoes-aureas` | ok |
| `/` (Site Oficial) | ok; header e rodapé voltam |
| Header / WhatsApp em `/links` | ocultos |

**Capturas** (`capturas-revisao/`, não versionadas):

- `links-002-320.png`
- `links-002-390.png`
- `links-002-768.png`
- `links-002-1440.png`

**Limitações:** Chromium headless no Windows; sem Safari/Firefox, celular físico ou leitor de tela real.

---

## Pendências

1. Confirmar com a Camilla o retrato circular (ou fornecer recorte quadrado oficial).
2. Confirmar URL do YouTube — o slot já existe, sem href inventado.
3. Publicar Jornadas somente com oferta aprovada.
4. Canal de contato comercial, se for o caso.
5. Aprovação visual da Camilla.
6. Revisar privacidade antes de qualquer métrica de clique.
7. Inserir `camillaurea.com.br/links` na bio do Instagram **só após deploy autorizado**.

---

## Parecer

**GO para revisão visual local** da Central Áurea Links refinada.

**NO-GO para push, deploy, anúncio, rastreamento ou captação.**

Identidade preservada (logo oficial, bordô, dourado, eixo central). Leitura no mobile mais limpa, primeiro CTA explícito e assinatura presente. Pronta para aprovação da Camilla.

O sprint seguinte não foi iniciado.
