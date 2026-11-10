# ÁUREA LINKS — instruções para a bio do Instagram

**Perfil:** [@camilla.aurea](https://www.instagram.com/camilla.aurea/)  
**URL a inserir:** `https://camillaurea.com.br/links`

Este documento é operacional. Não altera o perfil do Instagram.

---

## Quando inserir

Somente **depois** de:

1. A Camilla aprovar visualmente a página `/links`.
2. Autorizar o deploy desta versão (WEB-ÁUREA-LINKS-003 ou posterior).
3. Confirmar no celular, em janela anônima, que `https://camillaurea.com.br/links` abre a Central (não a página 404).

O domínio já responde em HTTPS. A rota `/links` só passa a exibir a Central depois do deploy autorizado — hoje o HTML genérico do site é servido e o JavaScript publicado ainda não contém essa página.

---

## Texto sugerido da bio

Manter a voz da Camilla. O campo de links do Instagram aceita **um** URL clicável.

Sugestão de estrutura (editar com ela, sem publicar textos não aprovados):

```
O ouro já estava em você.
Poder · Valor · Luxo Afetivo
```

No campo de site / links: `https://camillaurea.com.br/links`

Não usar `http://`, `www.` nem encurtadores.

---

## Passo a passo (Instagram app)

1. Abrir o perfil @camilla.aurea.
2. Editar perfil.
3. Em **Site** (ou Links), colar `https://camillaurea.com.br/links`.
4. Salvar.
5. Sair do modo de edição e tocar no link como visitante: deve abrir a Central Áurea Links.

Não é necessário criar um cartão Linktree ou equivalente.

---

## O que a visitante deve encontrar

- Logo oficial e retrato circular
- Botão dourado **Receba gratuitamente o Guia MINERAR**
- Método Áurea, Biblioteca, Provocações e o site
- Instagram confirmado
- Compartilhar no WhatsApp e Copiar link
- Assinatura *Com carinho, Camilla Áurea.*

---

## Verificação rápida após publicar o link

- [ ] O endereço na bio é exatamente `https://camillaurea.com.br/links`
- [ ] Abre em 4G e em Wi-Fi
- [ ] Atualizar a página não gera 404
- [ ] O primeiro botão leva a `/minerar`
- [ ] A prévia ao colar o link no WhatsApp mostra título, texto e imagem bordô/dourado (depois do deploy com `dist/links.html`)

Se a prévia do WhatsApp continuar mostrando o cartão da home, aguardar alguns minutos e usar “Atualizar informações da URL” no verificador do Facebook, ou confirmar que o deploy incluiu `links.html`.
