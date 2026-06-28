# Portal do Instrumentador

Plataforma SPA moderna para conexão entre instrumentadores cirúrgicos, empresas de OPME e instituições de ensino do setor de saúde.

## Stack

- **Vite 5** — build tool
- **TypeScript 5** — type safety
- **CSS Modules** (vanilla) — zero runtime overhead
- **Font Awesome 6** — icons
- **Google Fonts** — Space Grotesk + DM Sans

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

## Project Structure

```
├── index.html              # Vite entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env.example
├── src/
│   ├── main.ts             # Application bootstrap
│   ├── app.ts              # Root orchestrator
│   ├── vite-env.d.ts       # Vite type declarations
│   ├── styles/             # Modular CSS
│   │   ├── variables.css   # Design tokens & theming
│   │   ├── base.css        # Reset & global styles
│   │   ├── header.css      # Header & navigation
│   │   ├── hero.css        # Hero sections & carousels
│   │   ├── cards.css       # Rating cards (Notícias)
│   │   ├── modals.css      # Login/Register modals
│   │   ├── footer.css      # Footer
│   │   └── responsive.css  # Mobile breakpoints
│   ├── data/               # Static content & config
│   │   ├── constants.ts    # Design tokens, IDs, config
│   │   ├── carousels.ts    # Carousel slide data
│   │   └── cards.ts        # Rating card data
│   ├── utils/              # Pure utility functions
│   │   ├── masks.ts        # CPF/CNPJ input masks
│   │   ├── counters.ts     # Animated number counters
│   │   └── dom.ts          # DOM query helpers
│   ├── components/         # UI components
│   │   ├── header.ts       # Header + mobile menu
│   │   ├── carousel.ts     # Carousel engine
│   │   ├── modals.ts       # Login/Register modals
│   │   ├── theme.ts        # Light/dark theme toggle
│   │   ├── footer.ts       # Footer (static)
│   │   └── whatsapp.ts     # WhatsApp floating button
│   └── pages/              # Route pages
│       ├── router.ts       # SPA navigation
│       ├── home.ts
│       ├── instrumentadores.ts
│       ├── empresas.ts
│       ├── cursos.ts
│       └── noticias.ts
```

## Design System

| Token | Value |
|---|---|
| Primary | `#0F766E` |
| Accent | `#0EA5E9` |
| Background | `#FFFFFF` |
| Text | `#1F2937` |
| Footer BG | `#1a1a1a` |

## Pages

| Route | Section |
|---|---|
| `/` | Home — hero carousel + stats + registration panel |
| `#instrumentadores` | Success stories for professionals |
| `#empresas` | OPME company showcase |
| `#cursos` | Institutions & mentorship programs |
| `#noticias` | Top-rated instrumentadores & companies |

## Environment

Copy `.env.example` to `.env` and adjust values as needed.

## License

Private — all rights reserved.
