# ADR-004

## Title

Localization Strategy (pt-BR MVP)

## Status

Accepted

## Decision

The MVP ships with Brazilian Portuguese (pt-BR) as the only language. All
user-facing strings are centralized in `shared/i18n` and referenced by key
from components and screens - never hardcoded inline. The pure game engine
returns neutral, locale-agnostic results (ids, scores,
`"player" | "rival" | "draw"`); the UI layer resolves these to pt-BR copy
via the centralized string table.

## Why

- Front Row is a Brazilian product; pt-BR is the only language needed for
  launch, and the interface must never mix English and Portuguese.
- Centralizing strings keeps narrative and UI copy consistent, and keeps
  the door open for future locales without restructuring components or
  the game engine.

## Consequences

- No i18n library is required for the MVP - a typed TypeScript string
  table is enough.
- Adding a new locale later means adding a new string table file (and a
  locale switcher), not touching components or the game engine.
- Engine outputs (e.g. `EventResult`) must not embed display text
  directly - only ids/identifiers/outcomes that the UI maps to copy.
