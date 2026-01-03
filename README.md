# ts-node-boilerplate

Opinionated starter for building TypeScript-backed Node.js utilities with first-class linting, formatting, and pre-commit automation.

## Project Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Run in development mode
   ```bash
   npm run dev
   ```
   This boots `ts-node` against `src/app.ts` for a fast TypeScript feedback loop.
3. Check types
   ```bash
   npm run typecheck
   ```
   Leverages the app-specific `tsconfig.app.json` for strict compilation without emitting JS.

## Tooling

- **TypeScript** – Strong typing and modern TS features compiled via `ts-node` for development and `tsc` for type safety.
- **ESLint** – Opinionated linting using the latest `eslint`, `@eslint/js`, and community plugins (`eslint-plugin-react`, `globals`) to keep the codebase consistent.
- **Prettier** – Formatting enforced through `prettier` with `eslint-config-prettier` and `eslint-plugin-prettier` to align lint rules with formatting.
- **Husky** – Git hook automation wired through the `prepare` script; combined with `lint-staged` to run ESLint and Prettier on staged files before every commit.

## Helpful Scripts

- `npm run lint` / `npm run lint:fix` – Lint everything or auto-fix where possible.
- `npm run format` / `npm run format:fix` – Check or enforce repository formatting.
- `npm run typecheck` – Explicit type validation pass.
- `npm run dev` – Run the main application entry in watch-friendly TS mode.
