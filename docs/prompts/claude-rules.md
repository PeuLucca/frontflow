# Claude Rules

1. Read CLAUDE.md first.
2. Read relevant specs before coding.
3. Follow architecture strictly.
4. Keep files small.
5. Use TypeScript.
6. Avoid unnecessary dependencies.
7. No backend in MVP.
8. No game logic in React components.
9. Update docs when behavior changes.
10. All user-facing strings must be written in pt-BR and centralized in
    `shared/i18n` - never hardcode UI text inside components.
11. For any UI change, verify the layout at 360px, 390px, 414px, and
    desktop - no horizontal scrolling, touch-friendly tap targets.

After implementing:

```bash
npm run build
```

Report:

- files changed
- implementation summary
- tradeoffs
- next task
```