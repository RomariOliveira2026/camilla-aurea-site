# SPRINT WEB-001 — Camilla Áurea

**Fundação técnica, auditoria e primeira versão navegável**

- Data: 02/11/2026
- Ambiente: desenvolvimento local (Windows 10.0.26200, Node 24.15.0, npm 11.12.1, Git 2.54.0)
- Publicação: **nenhuma**. Nenhum deploy, repositório remoto, push, domínio ou integração externa foi realizado.

> Este relatório descreve um protótipo técnico. O site **não foi revisado nem aprovado pela fundadora**.

---

## A. Estado inicial encontrado

| Item | Resultado |
| --- | --- |
| Conteúdo da pasta | Vazia — 0 arquivos, inclusive ocultos |
| `package.json` / dependências / entrypoints | Inexistentes |
| Git | A pasta não era um repositório Git (nem nenhuma pasta acima dela) |
| Trabalho prévio do usuário | Nenhum — não houve risco de sobrescrita |

Decisão: como a pasta estava vazia, foi inicializada uma aplicação **React + Vite + TypeScript**, conforme o briefing. Os arquivos foram criados manualmente (sem `create-vite`) para evitar etapas interativas e manter controle total sobre o conteúdo.

## B. Arquivos criados e alterados

Nenhum arquivo pré-existente foi alterado ou excluído (não havia nenhum).

**Configuração**

- `package.json`, `package-lock.json` — scripts `dev`, `build`, `lint`, `typecheck`, `preview`
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript em modo estrito
- `vite.config.ts` — servidor restrito a `localhost`; build sem sourcemaps
- `eslint.config.js` — ESLint + typescript-eslint + regras de React Hooks
- `.gitignore` — ignora `node_modules`, `dist`, `.env*` e `.validation`
- `index.html` — `lang="pt-BR"`, meta `robots: noindex, nofollow` (proteção contra indexação acidental)
- `public/favicon.svg` — favicon **provisório e neutro** (não é símbolo da marca)

**Design system**

- `src/styles/tokens.css` — tokens de cores, tipografia, espaçamento, bordas, sombras, movimento e breakpoints
- `src/styles/base.css` — reset, tipografia base, foco visível, skip link, `prefers-reduced-motion`

**Conteúdo (fonte única de textos)**

- `src/content/site.ts` — todos os textos, itens de navegação e configuração do Instagram
- `src/content/legal.ts` — estrutura para Política de Privacidade e Termos de Uso (sem texto jurídico)

**Componentes reutilizáveis**

- `src/components/ui/` — `ButtonLink`, `InstagramLink`, `Section`, `StatusBadge`, `MediaPlaceholder`, `Wordmark`, `ui.css`
- `src/components/layout/` — `SiteHeader`, `SiteFooter`, `PrototypeNotice`, `layout.css`

**Seções**

- `src/sections/` — `Hero`, `About`, `Method`, `Territories`, `AffectiveLuxury`, `Library`, `Reflections`, `sections.css`
- `src/App.tsx`, `src/main.tsx`

**Documentação**

- `docs/SPRINT-WEB-001-RELATORIO.md` (este arquivo)

**Artefatos locais de validação (fora do Git)**

- `.validation/viewports.html` — página de teste automatizado (viewports, menu mobile, links, acessibilidade)
- `.validation/*.png` — capturas de tela usadas na verificação

**Git**

- Repositório **local** inicializado (`git init`). Sem remoto, sem commits, sem push.

## C. Funcionalidades implementadas

1. **Aviso de protótipo** no topo: “Protótipo local em revisão — textos, imagens e identidade visual ainda provisórios.”
2. **Cabeçalho fixo** com nome da marca (identificação tipográfica provisória) e menu com 6 âncoras internas.
3. **Navegação mobile** (abaixo de 896px): botão com `aria-expanded`/`aria-controls`; fecha com `Esc` devolvendo o foco ao botão; fecha ao escolher um link ou ao ampliar para desktop; trava a rolagem enquanto aberto.
4. **Hero**: “CAMILLA ÁUREA” / “Poder, Valor e Luxo Afetivo” / texto sugerido no briefing. Botões: “Conhecer o Método Áurea” (âncora interna) e “Acompanhar no Instagram” (link externo).
5. **Sobre Camilla**: apresentação da marca (sem biografia), com aviso “biografia oficial em preparação” e espaço reservado para foto.
6. **Método Áurea**: Minerar, Lapidar e Brilhar, com as frases oficiais **sem alteração**.
7. **Territórios**: Poder, Valor, Presença e Expressão, com as descrições oficiais.
8. **Luxo Afetivo**: texto conceitual e três princípios (texto provisório — ver seção E).
9. **Biblioteca Áurea**: selo “Em preparação” e os sete pilares temáticos, cada um marcado “Em preparação”. Nenhum item clicável.
10. **Reflexões e artigos**: estado vazio explícito (“Nenhuma reflexão publicada ainda”) e link para o Instagram.
11. **Rodapé**: navegação, contato (somente Instagram @camilla.aurea), documentos legais marcados “em elaboração” (sem link), aviso de caráter educativo (não substitui acompanhamento profissional de saúde), identificação da versão de desenvolvimento.

**Regras de funcionamento**

- Todos os botões funcionam: ou são âncoras internas com destino existente, ou o link externo do Instagram.
- O Instagram é controlado por `instagram.confirmed` em `src/content/site.ts`. Com `false`, todos os pontos passam a exibir “Instagram — em confirmação”, sem link.
- Documentos legais com `status: 'in-preparation'` aparecem sem link; com `'published'`, viram links.
- `@moodaurea` não aparece no site.

**Não implementado (conforme o briefing):** checkout, pagamentos, login, banco de dados, formulários ou captura de leads, rastreamento/analytics, integrações com APIs, publicação. Não há segredos, credenciais nem variáveis de ambiente.

**Privacidade:** as fontes (Cormorant Garamond e Inter) são empacotadas localmente via `@fontsource`. O site **não faz nenhuma requisição a terceiros** ao carregar — nem Google Fonts, nem CDNs. Os únicos recursos externos são os links do Instagram, que só são acessados por clique.

### Design system — decisões principais

- **Contraste medido** (WCAG 2.x) sobre a paleta oficial:

  | Combinação | Contraste | Uso |
  | --- | --- | --- |
  | Bordô `#4B1120` / Off-white `#FFF8F0` | 14,24:1 | Títulos e textos |
  | Ouro queimado `#C9A86A` / Bordô | 6,64:1 | Texto dourado sobre fundo escuro |
  | Ouro profundo `#B68E55` / Bordô | 4,99:1 | Permitido como texto sobre escuro |
  | Ouro queimado / Off-white | **2,15:1** | Reprovado para texto → **apenas decorativo** |
  | Ouro profundo / Off-white | **2,85:1** | Reprovado para texto → **apenas decorativo** |
  | Ouro-tinta `#7A5A2A` (derivado) / Off-white | 6,00:1 | Texto dourado sobre fundo claro |

  Todas as combinações de texto efetivamente usadas ficaram **≥ 5,32:1** (acima do AA de 4,5:1).

- **Cores derivadas** (apoio funcional, não substituem a paleta oficial): bordô escuro `#320B15`, bordô médio `#5E1A2C`, ouro-tinta `#7A5A2A`, creme `#F5EADC`, tinta `#2B1218`, tinta suave `#6B4C52`, rosado claro `#D9C2C6`.
- **Tipografia**: Cormorant Garamond (títulos, editorial) + Inter (texto corrido, legibilidade). Escala fluida com `clamp()`. **Escolha provisória** — substituir se houver tipografia oficial da marca.
- **Breakpoints**: 640px, 896px (troca de navegação) e 1200px.
- **Movimento**: apenas transições curtas de cor e sublinhado; nenhuma animação de entrada. Com `prefers-reduced-motion`, transições e rolagem suave são desativadas.

## D. Testes executados e resultados

| # | Verificação | Como | Resultado |
| --- | --- | --- | --- |
| 1 | Instalação de dependências | `npm install` | OK. O plugin `eslint-plugin-jsx-a11y` foi **descartado** por incompatibilidade com o ESLint 10; a acessibilidade foi verificada manualmente e por script (item 7) |
| 2 | Scripts | `dev`, `build`, `lint`, `typecheck`, `preview` | Todos executados com sucesso |
| 3 | Typecheck | `npm run typecheck` | 0 erros |
| 4 | Lint | `npm run lint` | 0 erros, 0 warnings |
| 5 | Build de produção local | `npm run build` | OK — JS 72,7 kB gzip, CSS 4,8 kB gzip, sem warnings |
| 6 | Servidor local | `npm run preview` e `npm run dev` | HTTP 200 em `localhost` |
| 7 | Testes automatizados em navegador | Microsoft Edge headless carregando `.validation/viewports.html` | **29/29 aprovados** (detalhes abaixo) |
| 8 | Inspeção visual | Capturas em 320, 360, 390, 768, 1024 e 1440px, analisadas | Layout correto em todas as larguras |
| 9 | Contraste | Cálculo WCAG por script | Todas as combinações de texto ≥ 5,32:1 |
| 10 | Segurança das dependências | `npm audit --omit=dev` | **0 vulnerabilidades** nas dependências de produção |
| 11 | Segurança (ferramentas de dev) | `npm audit` | 1 alerta **moderado** (`minimatch`, ReDoS) na cadeia do ESLint; afeta só o lint local, não o site |

**Verificações automatizadas no navegador (29/29):**

- Sem rolagem horizontal em 320, 360, 390 e 1024px.
- Botão de menu visível no celular e oculto no desktop.
- Menu: inicia fechado → abre ao clicar → trava a rolagem → `Esc` fecha → foco volta ao botão → rolagem liberada → clicar num link fecha o menu e navega até `#metodo`.
- 15 links internos, todos com destino existente.
- 3 links externos, todos com `target="_blank"` e `rel="noopener noreferrer"`.
- Nenhum link vazio ou `href="#"`.
- 2 espaços de imagem, ambos com descrição acessível.
- Exatamente um `h1` e hierarquia de títulos sem saltos.
- Landmarks `header`, `nav`, `main` e `footer`; `lang="pt-BR"`; skip link funcional.
- Nenhum formulário ou campo de entrada; nenhum script externo; nenhuma menção a @moodaurea; fontes carregadas.

**Problema encontrado e corrigido durante a validação:** em 320px, o nome da marca somado ao botão “Menu” ultrapassava a tela em 39px. Correção: abaixo de 384px, a palavra “Menu” fica oculta (o rótulo para leitor de tela continua) e o nome é levemente compactado. Reteste aprovado.

**O que não foi testado:**

- Dispositivos físicos (iPhone/Android) e Safari/Firefox — testado apenas no Edge (Chromium) para Windows.
- Navegação por teclado com Tab real: foco, skip link e `Esc` foram verificados por script e pela estrutura, mas não com pressionamentos físicos de tecla.
- Leitores de tela reais (NVDA, VoiceOver).
- Abertura efetiva do perfil do Instagram: o URL foi conferido no código, mas **a existência e a titularidade do perfil não foram verificadas**.
- Lighthouse/Core Web Vitals.

Observação técnica: o Edge headless no Windows impõe uma largura mínima de janela (cerca de 500px), o que gera capturas “cortadas” em larguras de celular. Por isso, as larguras de celular foram testadas dentro de iframes com a largura exata.

## E. Pendências de conteúdo e identidade oficial

**Identidade visual**

- [ ] Logotipo oficial (SVG). Atual: nome em tipografia provisória (`Wordmark`), **não é logotipo**.
- [ ] Símbolo/favicon oficial. Atual: círculo dourado neutro sobre bordô.
- [ ] Tipografia oficial da marca, se houver.
- [ ] Validação das cores derivadas criadas para acessibilidade (sobretudo a ouro-tinta `#7A5A2A`).

**Fotografia**

- [~] Foto do hero: **inserida em 02/11/2026 a pedido do usuário** (`src/assets/images/hero.jpg`, convertida de PNG 596 KB para JPEG 71 KB, sem metadados). Pendências:
  - confirmar autoria, direitos de uso e autorização de imagem da pessoa retratada;
  - confirmar se a pessoa retratada é Camilla. O texto alternativo **não** a identifica pelo nome enquanto isso não for confirmado;
  - se a imagem tiver sido gerada ou editada por IA, decidir se isso será informado, para não apresentá-la como fotografia real da fundadora;
  - obter o arquivo original em resolução maior (o atual tem 541×803px; o ideal é ≥ 1000×1500px para telas de alta densidade).
- [ ] Foto para “Sobre Camilla”.
- [ ] Comprovação de direitos de uso/autorização de imagem de todas as fotos.
- [ ] Textos alternativos aprovados.

**Textos que precisam de aprovação da autora**

- [ ] Biografia oficial de Camilla (hoje há só um aviso “em preparação”).
- [ ] Parágrafos de apresentação em “Sobre” — **redigidos neste sprint**, falam da marca, não da pessoa.
- [ ] Introdução do Método Áurea (“Três etapas que conduzem do reconhecimento à expressão…”) — **redigida neste sprint**. As frases das três etapas são as oficiais.
- [ ] Definição de Luxo Afetivo e os três princípios (“Cuidado como escolha”, “Presença com intenção”, “Relações conscientes”) — **redigidos neste sprint**. Pedem atenção especial, porque interpretam um conceito autoral.
- [ ] Introduções da Biblioteca e de Reflexões.
- [ ] Aviso de caráter educativo do rodapé (recomendável revisão jurídica).
- [ ] Rótulo “Desenvolvimento pessoal feminino” no hero.

**Canais e jurídico**

- [ ] Confirmar que `https://www.instagram.com/camilla.aurea/` é o perfil oficial e está ativo. Se não estiver, mudar `instagram.confirmed` para `false`.
- [ ] Definir se haverá e-mail ou outro contato aprovado (hoje: nenhum).
- [ ] Política de Privacidade e Termos de Uso, elaborados por profissional habilitado (LGPD).
- [ ] Titular do copyright no rodapé (hoje: “Camilla Áurea” — confirmar razão social ou nome a usar).

## F. Comando exato para executar localmente

Na pasta do projeto (`C:\Grupo O Especialista\CONTENTFY\camilla-aurea-site`):

```powershell
npm install
npm run dev
```

Abrir **http://localhost:5173/** no navegador.

Para revisar a versão de produção gerada localmente:

```powershell
npm run build
npm run preview
```

Abrir **http://localhost:4173/**.

## G. Riscos e recomendações

**Riscos**

1. **Textos provisórios podem ser lidos como oficiais.** Mitigação: aviso fixo de protótipo e lista de textos a aprovar (seção E). Não remover o aviso antes da aprovação.
2. **Instagram não verificado.** O link aponta para @camilla.aurea conforme o briefing, mas a existência e a titularidade não foram conferidas.
3. **Exposição acidental.** O site tem `noindex, nofollow` e o servidor escuta só em `localhost`. Antes de qualquer publicação autorizada, retirar o `noindex` de forma consciente.
4. **Alerta moderado no ESLint (`minimatch`).** Só afeta ferramentas de desenvolvimento; não entra no site. Reavaliar quando o typescript-eslint publicar correção, sem usar `npm audit fix --force` (que causaria regressão de versão).
5. **Sem plugin de lint de acessibilidade.** Incompatível com o ESLint 10 na data do sprint; reavaliar no futuro.
6. **Cobertura de navegadores limitada** (só Chromium para Windows).

**Recomendações**

1. Fazer o primeiro commit local como ponto de partida da auditoria: `git add -A` e `git commit -m "WEB-001: fundação e primeira versão navegável"`.
2. Testar em um celular real na mesma rede somente se autorizado (exige `npm run dev -- --host`, que expõe o servidor na rede local).
3. Revisar os textos da seção E diretamente em `src/content/site.ts` — todo o conteúdo editável está nesse arquivo.
4. Quando houver publicação autorizada: configurar cabeçalhos de segurança no servidor (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) e publicar os documentos legais antes de coletar qualquer dado.
5. Fazer uma auditoria com Lighthouse e com leitor de tela (NVDA) antes do WEB-002.

## H. Status

**GO para revisão visual local.**

O site compila, passa no lint e no typecheck, foi verificado em navegador nas larguras de celular, tablet e desktop, e não contém botões fictícios, dados pessoais, formulários, rastreamento nem integrações externas.

Este status **não** significa aprovação de conteúdo ou de identidade: os itens da seção E continuam pendentes e **NO-GO para qualquer publicação** até autorização expressa. O Sprint WEB-002 não foi iniciado.
