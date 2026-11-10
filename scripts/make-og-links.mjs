import { createRequire } from 'node:module'
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(
  process.env.PLAYWRIGHT_REQUIRE_FROM || `${process.cwd()}/package.json`,
)
const { chromium } = require('playwright-core')

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const logoPath = join(root, 'src', 'assets', 'brand', 'logo.png')
const outPath = join(root, 'public', 'og-links.png')
const logoData = readFileSync(logoPath).toString('base64')

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <style>
      html, body { margin: 0; }
      body {
        width: 1200px;
        height: 630px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:
          radial-gradient(70% 58% at 50% 42%, rgb(201 168 106 / 0.16), transparent 64%),
          #4B1120;
        color: #FFF8F0;
        font-family: Georgia, 'Times New Roman', serif;
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 48px;
      }
      .eyebrow {
        margin: 0;
        font-family: system-ui, sans-serif;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #C9A86A;
      }
      img {
        display: block;
        height: 108px;
        width: auto;
        margin: 36px 0 28px;
      }
      .phrase {
        margin: 0;
        font-style: italic;
        font-size: 36px;
        color: #FFF8F0;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <p class="eyebrow">ÁUREA LINKS</p>
      <img src="data:image/png;base64,${logoData}" alt="" />
      <p class="phrase">O ouro já estava em você.</p>
    </div>
  </body>
</html>`

const htmlPath = join(tmpdir(), 'camilla-og-links.html')
writeFileSync(htmlPath, html)

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'load' })
await page.screenshot({ path: outPath, type: 'png' })
await browser.close()
unlinkSync(htmlPath)
console.log('Wrote public/og-links.png')
