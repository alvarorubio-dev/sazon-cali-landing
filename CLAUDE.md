# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for "Sazón Cali" - a Colombian restaurant website built with React.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

Single-page React app with vertical section-based layout. All navigation is internal smooth scrolling to sections identified by `id` attributes.

**Entry point**: `src/main.jsx` → renders `src/App.jsx`

**Components** (`src/components/`): Each section is a self-contained component. Components use functional React patterns with hooks where needed.

**Styling**: Tailwind CSS with custom theme colors defined in `tailwind.config.js`:
- `warm-orange` (#EA580C)
- `wine-red` (#722C2C)
- `avocado-green` (#3D5323)

Utility classes for common patterns are defined in `src/index.css`:
- `.btn-primary` / `.btn-secondary` - button styles
- `.gradient-text` - brand gradient text
- `.card-hover` - hover animation for cards

**Icons**: lucide-react library

## Content Language

Spanish - all user-facing content and comments should be in Spanish.