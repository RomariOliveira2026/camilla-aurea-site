# SPRINT WEB-ÁUREA-LINKS-003 — Camilla Áurea

**ÁUREA LINKS — refinamento final, integração, compartilhamento e preparação para Instagram**

- Data: 10/11/2026
- Ambiente: desenvolvimento local (sem publicação)
- Branch: `master`
- Push / deploy: **não realizados**
- Rastreamento / anúncios / captação real: **não ativados**
- Formulário MINERAR: permanece em `demo`
- WhatsApp: nenhum envio automático; nenhum número coletado

> Protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

**URL canônica:** `https://camillaurea.com.br/links`

---

## Objetivo

Tornar `/links` uma central oficial, compartilhável e tecnicamente pronta para a bio do Instagram **após homologação e deploy autorizado**.

Home, Biblioteca, landing MINERAR, captação em demonstração e o seletor de tema global foram preservados. Nenhum outro sprint foi iniciado.

---

## Arquivos modificados

- `src/content/site.ts` — origem pública homologada, `aureaLinksUrl()`, `footerOnlyItems`
- `src/content/links.ts` — título/descrição SEO, subtítulo do CTA, textos de compartilhamento
- `src/pages/LinksPage.tsx` — retrato recortado, sem seletor de tema, bloco de compartilhamento
- `src/pages/links.css` — recorte circular (rosto e ombros), ações de share, contraste do CTA
- `src/components/layout/SiteFooter.tsx` — link textual **Áurea Links**; versão `WEB-ÁUREA-LINKS-003`
- `src/hooks/usePageTitle.ts` — `usePageMeta` com canônico, Open Graph e Twitter Card
- `index.html` — metadados padrão do site (home)
- `vercel.json` — `buildCommand: npm run build`; rewrite `/links` → `/links.html`
- `package.json` — pós-build `scripts/write-links-html.mjs`

## Arquivos criados

- `src/components/links/LinksShare.tsx` — WhatsApp, copiar link, share nativo
- `scripts/write-links-html.mjs` — HTML específico de `/links` para rastreadores
- `scripts/make-og-links.mjs` — composição da imagem institucional (logo oficial)
- `public/og-links.png` — 1200×630, bordô, dourado e logo oficial
- `docs/AUREA-LINKS-INSTAGRAM-BIO.md` — instruções para a bio
- `docs/SPRINT-WEB-AUREA-LINKS-003-RELATORIO.md` — este arquivo

A logo oficial não foi substituída nem redesenhada. O formulário MINERAR não foi homologado.

---

## Funcionalidades implementadas

### Retrato

Fotografia autorizada de Sobre (`about.jpg`, 819×1024). Recorte circular por CSS (`object-fit` + escala), priorizando rosto e ombros. Sem retoque. Resolução suficiente para o avatar (≈7rem). A foto original continua sendo um retrato de corpo sentado — um quadrado dedicado melhoraria o enquadramento.

### CTA principal

- Título: **Receba gratuitamente o Guia MINERAR**
- Subtítulo: **7 perguntas para voltar a si e reconhecer o que merece sua atenção.**
- Fundo ouro queimado `#C9A86A`, texto bordô `#4B1120` (contraste 6,64:1)

### Seletor de tema

Removido **somente** de `/links` (página de bio). O toggle global no cabeçalho das demais rotas permanece.

### Integração

- Rodapé institucional: **Áurea Links** → `/links`
- Cabeçalho: **não incluído**. O menu já tem seis itens + CTA Minerar; outro item comprometeria clareza no mobile.

### Compartilhamento

- **Compartilhar no WhatsApp:** `https://wa.me/?text=` com a mensagem oficial e a URL canônica já interpolada. Sem destinatário, sem coleta de telefone, só após clique.
- **Copiar link:** grava `https://camillaurea.com.br/links`; confirmação visível e `aria-live`. Se a cópia falhar, o endereço aparece na tela.
- **Compartilhar:** Web Share API, só se o navegador oferecer. Não lê contatos.

### Metadados da rota `/links`

| Campo | Valor |
| --- | --- |
| Title | Camilla Áurea \| O ouro já estava em você |
| Description | Central oficial de Camilla Áurea. Método Áurea, Guia MINERAR gratuito e um espaço de autovalor, presença e autoconhecimento feminino. |
| Canonical / og:url | `https://camillaurea.com.br/links` |
| og:image / twitter:image | `https://camillaurea.com.br/og-links.png` |
| twitter:card | `summary_large_image` |

O Vite é um SPA: o `index.html` é único. Rastreadores (WhatsApp, Facebook, Instagram) **não executam JavaScript**. Por isso o build gera `dist/links.html` com essas tags, e o `vercel.json` reescreve `/links` para esse arquivo. Sem esse HTML específico, a prévia social mostraria os metadados da home — mesmo que o navegador já exiba o título certo.

---

## URL canônica e produção atual

| Verificação | Resultado |
| --- | --- |
| Origem homologada | `https://camillaurea.com.br` |
| HTTP → HTTPS | 308 |
| HTTPS / HSTS | ok |
| `GET /links` em produção | 200 (mesmo `index.html` do deploy de 07/11/2026) |
| JavaScript publicado | **ainda não contém** a rota `/links` — a visitante vê o 404 do SPA |
| `www` e apex | ambos 200 (duplicata pré-existente; o canônico usa sem `www`) |

Não inserir a URL na bio do Instagram antes do deploy desta versão.

---

## Testes

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | 0 erros |
| `npm run lint` | 0 erros |
| `npm run build` | OK + `dist/links.html` gerado |
| Preview `/links` | 200 |
| `/links.html` (rastreadores) | title, canônico e og:url da Central |
| `/og-links.png` | 200, PNG |
| Overflow 320 / 390 / 768 / 1440 | nenhum |
| Retrato circular | presente, rosto e ombros |
| Seletor de tema em `/links` | ausente |
| CTA destaque | título e subtítulo corretos |
| WhatsApp share | `wa.me/?text=`, **sem** número |
| Copiar link | confirmação “Link copiado” |
| Rodapé → `/links` | ok |
| Cabeçalho contém Áurea Links | não |
| `/minerar` | ok |
| 404 client-side | “Esta página não existe” |
| Captação MINERAR | `demo` |

**Capturas** (`capturas-revisao/`, não versionadas):

- `links-003-320.png`
- `links-003-390.png`
- `links-003-768.png`
- `links-003-1440.png`

**Limitações:** Chromium headless no Windows; sem Safari/Firefox, Instagram in-app ou leitor de tela real. Web Share nativo varia por dispositivo.

---

## Links testados

| Destino | Estado |
| --- | --- |
| `/links` (local) | Central renderiza |
| `/minerar` | ok |
| `/#metodo` | mantido |
| `/biblioteca` | mantido |
| `/biblioteca/provocacoes-aureas` | mantido |
| `/` | mantido; header e rodapé voltam |
| Instagram `https://www.instagram.com/camilla.aurea/` | ok |
| `https://wa.me/?text=…` | URL montada, sem destinatário |
| Jornadas / YouTube / Contato comercial | ocultos |

---

## Pendências

1. Aprovação visual da Camilla (retrato circular, CTA, compartilhamento).
2. Retrato quadrado dedicado, se ela preferir outro enquadramento.
3. Deploy autorizado desta versão — sem isso, `/links` público continua 404 no SPA.
4. Inserir `https://camillaurea.com.br/links` na bio **só depois** do passo 3. Instruções em `docs/AUREA-LINKS-INSTAGRAM-BIO.md`.
5. Conferir a prévia do WhatsApp/Facebook após o deploy (`dist/links.html`).
6. YouTube e contato comercial, quando houver URL/canal confirmados.
7. `www.camillaurea.com.br` e o apex ambos respondem 200 — unificar redirecionamento em sprint de infra, se autorizado.
8. Não ligar métricas nem captação real sem homologação.

---

## Riscos

- Publicar o link na bio **antes** do deploy leva a visitante ao 404 do JavaScript antigo.
- Sem `links.html` + rewrite, rastreadores de redes sociais ignoram o `usePageMeta` do cliente.
- WhatsApp pode cachear uma prévia antiga; exige atualização no debugger do Facebook.
- `navigator.share` não existe em todos os desktops — Copiar link é a alternativa permanente.
- O recorte circular não substitui um retrato feito para bio.

---

## Critérios de publicação

1. Camilla aprova a página em 320 e 390.
2. Autoriza push e deploy (este sprint **não** os executou).
3. Conferir em janela anônima, no celular: `https://camillaurea.com.br/links` é a Central, não o 404.
4. Colar a URL no WhatsApp e confirmar título, descrição e imagem bordô/dourado.
5. Só então atualizar a bio do Instagram.
6. Formulário MINERAR permanece em demonstração até homologação própria.

---

## Instruções de implantação (quando autorizadas)

1. Commit e push desta branch, **somente com autorização explícita**.
2. Deploy Vercel com `npm run build` (já definido em `vercel.json`) para gerar `dist/links.html`.
3. Confirmar rewrite: `GET https://camillaurea.com.br/links` devolve o HTML com `<title>Camilla Áurea | O ouro já estava em você</title>`.
4. Confirmar `https://camillaurea.com.br/og-links.png`.
5. Seguir `docs/AUREA-LINKS-INSTAGRAM-BIO.md`.

---

## Parecer

**GO para revisão visual local** e para homologação da Camilla.

**NO-GO para push, deploy, bio do Instagram, rastreamento, disparo de WhatsApp ou captação real.**

A Central está refinada, integrada ao rodapé, com compartilhamento voluntário e metadados preparados para rastreadores após o deploy. Pronta para ser publicada e colocada na bio **depois da aprovação e da implantação autorizada**.

O sprint seguinte não foi iniciado.
