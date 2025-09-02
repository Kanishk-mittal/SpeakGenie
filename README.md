# SpeakGenie

SpeakGenie is a small React + TypeScript + Vite web app that provides mindfulness and meditation content for children (ages 4–15). The UI is built with Tailwind CSS and aims to be simple, responsive, and easy to extend.

## What this repo contains

- A Vite + React + TypeScript front-end application
- Tailwind CSS for styling
- Components for landing/marketing pages (plans, FAQ, reviews, header/footer, etc.)

## Key features

- Responsive landing pages and components
- Lightweight, component-driven architecture using React + TypeScript
- Fast local dev with Vite and HMR

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

5. Run linter

```bash
npm run lint
```

## Project scripts

- `dev` — start Vite development server
- `build` — typecheck and build production bundle (runs `tsc -b` then `vite build`)
- `preview` — preview the production build locally
- `lint` — run ESLint across the project

## Contributing

If you'd like to contribute, open an issue or a pull request. Keep changes small and focused. Run `npm run lint` and ensure TypeScript checks pass before submitting.

## Notes for maintainers

- The project uses `tsconfig.app.json` and `tsconfig.node.json` for type checking/building. Tailwind classes are used throughout; if you add new utilities, update `tailwind.config.js` as needed.
