# Drudge Work Demo

This is a demo repository for AI-assisted development (Jules, jules.google.com). It contains intentional tech debt for demonstrating agentic workflows: dependency upgrades, TODO fixes, lint remediation, and test improvements.

## Build & Test

- Install: `npm install`
- Run: `npm start`
- Test: `npm test`
- Lint: `npm run lint`

## Architecture

- `src/index.js` — Express API entry point, route definitions
- `src/utils.js` — Shared helpers (getGreeting, parseQuery)
- `src/__tests__/` — Basic unit tests (no test framework yet)

## Known Drudge Work (Intentional)

The following items are left deliberately for AI agents to address:

1. **Dependency upgrades** — `npm outdated` shows express, lodash, eslint updates
2. **Security** — `npm audit` reports vulnerabilities
3. **TODOs** — Body parsing middleware, config module, i18n for greeting
4. **FIXMEs** — Query validation library, edge case tests
5. **Lint** — Unused `DEFAULT_LIMIT` in `src/index.js`

## Conventions

- Node.js / Express / CommonJS
- No TypeScript
- Keep tests in `src/__tests__/`
- Prefer small, focused changes; one concern per PR
