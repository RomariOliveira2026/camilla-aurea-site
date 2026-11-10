/**
 * Gera dist/links.html a partir do index.html de produção, com metadados
 * específicos da rota /links para rastreadores (WhatsApp, Instagram, Facebook).
 * Manter os textos alinhados a src/content/links.ts.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = join(root, 'dist', 'index.html')
const outPath = join(root, 'dist', 'links.html')

const TITLE = 'Camilla Áurea | O ouro já estava em você'
const DESCRIPTION =
  'Central oficial de Camilla Áurea. Método Áurea, Guia MINERAR gratuito e um espaço de autovalor, presença e autoconhecimento feminino.'
const CANONICAL = 'https://camillaurea.com.br/links'

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta\\s[^>]*${attr}="${key}"[^>]*>`, 'i')
  if (!re.test(html)) {
    throw new Error(`Meta ${attr}="${key}" not found in dist/index.html`)
  }
  return html.replace(re, (tag) => tag.replace(/content="[^"]*"/, `content="${value}"`))
}

let html = readFileSync(indexPath, 'utf8')

html = html.replace(/<title>[^<]*<\/title>/, `<title>${TITLE}</title>`)
html = html.replace(
  /<link rel="canonical" href="[^"]*"/,
  `<link rel="canonical" href="${CANONICAL}"`,
)
html = setMeta(html, 'name', 'description', DESCRIPTION)
html = setMeta(html, 'property', 'og:title', TITLE)
html = setMeta(html, 'property', 'og:description', DESCRIPTION)
html = setMeta(html, 'property', 'og:url', CANONICAL)
html = setMeta(html, 'name', 'twitter:title', TITLE)
html = setMeta(html, 'name', 'twitter:description', DESCRIPTION)

writeFileSync(outPath, html)
console.log('Wrote dist/links.html for crawler metadata on /links')
