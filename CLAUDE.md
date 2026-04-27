# CLAUDE.md

Template unificado: um só projeto pra landing (serviços) ou catálogo (produtos), controlado por `site.modo`.

## Regras invioláveis

- NÃO reescreva componentes em `src/components/`. NÃO mude layout (grid/flex/responsividade).
- NÃO instale deps novas. NÃO mude stack. NÃO adicione backend/API.
- Formulário sempre vai pro WhatsApp via `https://wa.me/<num>?text=<msg>`.
- `index.html` = edite pra title/meta/tags de tracking.

## Fluxo padrão

1. Ler `briefing.md`.
2. Ler `../_skills/criar-site/SKILL.md` se ainda não leu nesta sessão.
3. Preencher `src/config/site.ts` (definir `modo`, depois os campos).
4. Ajustar paleta em `tailwind.config.js`.
5. Copiar imagens pra `public/images/`.
6. Atualizar `index.html` (title, meta description, tags de tracking).
7. `npm run build`. Se passar: commit + push. Se falhar: corrige antes.

Reporte final em até 5 linhas.

## Seções (todas já existem)

Semi-fixas renderizam só se array não-vazio:

| Seção | Renderiza quando |
|---|---|
| TopBar, Header, Hero, Contact, Footer | sempre |
| Services | `servicos[]` não-vazio E `modo === "landing"` |
| Catalogo | `produtos[]` não-vazio E `modo === "catalogo"` |
| Stats, Processo, Galeria, Testimonials, Areas, FAQ | array correspondente não-vazio |

## Componentes customizados

Se briefing pedir seção fora do padrão, crie em `src/components/custom/<Nome>.tsx` e importe no `App.tsx` na posição correta. Não mexa nos componentes base.
