# Jules Approval Demo – Talking Points

Use this document when presenting the jules.google.com approval request. Aligns with the Velocity AI Business Case for Jules.

## What Jules Does

- **Autonomous, asynchronous agent** — Works in background; developers don't need to watch
- Connects to GitHub Enterprise, clones repos into isolated Google Cloud VMs
- Executes multi-step tasks (bug fixes, refactors, dependency bumps), runs tests, opens PRs
- Performs "toil" / drudge work while developers focus on feature development
- Uses **Plan-Critic-Execute** loop: user approves plan → Jules runs → PR ready for review

## AGENTS.md

Jules automatically reads `AGENTS.md` in the repo root for project context. This demo includes one so reviewers see how repos are configured for Jules.

## Demo Flow

1. **Clone this repo** to GitHub (your org or personal).
2. **Connect Jules** to the repository.
3. **Show pre-work state:**
   - `npm outdated` – shows outdated packages
   - `npm run lint` – shows lint issues
   - Search codebase for `TODO` and `FIXME`
4. **Run Jules** on tasks such as:
   - "Upgrade dependencies to latest patch versions"
   - "Address the TODO comments in src/"
   - "Fix the lint errors"
   - "Add proper test framework and edge case tests"

   *More prompt examples: [Jules Awesome Prompts](https://github.com/google-labs-code/jules-awesome-list)*

5. **Review Jules’ changes** – PRs, suggestions, or commits.

## Value Proposition (from Business Case)

| Without Jules | With Jules |
|---------------|------------|
| 25–40% of dev time on maintenance (Stripe/McKinsey) | Toil delegated to background agent |
| Median 5 days cycle time for toil tickets | Target: 2–4 hours saved per ticket |
| Synchronous AI = wait-time bottleneck | Asynchronous; dev continues on features |
| Tech debt & delayed dependency patches | Proactive dependency bumps, CVE patching |

*Target: 80% reduction in manual chore time for delegated tasks.*

## Repo Structure

```
drudge-work-demo/
├── AGENTS.md         # Jules reads this for project context
├── src/
│   ├── index.js      # Express API with TODOs
│   ├── utils.js      # Helpers with FIXMEs
│   └── __tests__/    # Basic tests, room for improvement
├── package.json      # Intentionally outdated deps
├── README.md
└── APPROVAL_DEMO.md  # This file
```
