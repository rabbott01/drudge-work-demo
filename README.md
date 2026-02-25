# Drudge Work Demo

A minimal Node.js API project designed to demonstrate **AI-assisted development** ([Jules at jules.google.com](https://jules.google.com)) for Velocity AI approval requests. This repo intentionally includes routine "toil" and maintenance tasks that an autonomous AI agent can expedite in the background — dependency upgrades, TODO fixes, lint remediation — while developers focus on higher-value work.

## Purpose

Use this project to show stakeholders how AI assistants can:

1. **Upgrade dependencies** – Run `npm outdated` to see packages with available updates
2. **Address security vulnerabilities** – Run `npm audit` for fixable issues
3. **Address TODO/FIXME comments** – The codebase has intentional markers for improvements
4. **Fix lint issues** – Run `npm run lint` to find fixable problems (e.g., unused variables)
5. **Improve test coverage** – Tests use basic asserts; a framework could be added

## Quick Start

```bash
npm install
npm start
```

Visit `http://localhost:3000` for the API.

## Intended "Drudge Work" Tasks

| Task Type | Location | Description |
|-----------|----------|-------------|
| Dependency upgrade | `package.json` | express, lodash, eslint have newer versions |
| Security | `npm audit` | 8 vulnerabilities (3 low, 5 high) |
| TODO | `src/index.js` | Add body parsing, replace hardcoded config |
| TODO | `src/utils.js` | Add i18n support for greeting |
| FIXME | `src/utils.js` | Use validation library for query parsing |
| FIXME | `src/__tests__/utils.test.js` | Add edge case tests |
| Lint | `src/index.js` | Unused `DEFAULT_LIMIT` variable |

**AGENTS.md** — Jules automatically reads this file for project context. See [Jules docs](https://jules.google/docs/) for details.

## API Endpoints

- `GET /` – Health check / welcome
- `GET /api/items?limit=10&offset=0` – Paginated mock items list

## License

MIT
