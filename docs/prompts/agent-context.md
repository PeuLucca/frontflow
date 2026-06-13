# Agent Context

You are helping build Front Row.

Front Row is a fashion-themed browser game inspired by 7a0.

The player owns Front Row agency.

The rival owns Velvet House.

The rival is inspired by Miranda Priestly.

Core gameplay:

1. Draft
2. Rival draft
3. Season
4. Matchups
5. Champion

The game must be:

- simple
- addictive
- replayable
- mobile-first
- entirely in Brazilian Portuguese (pt-BR)

The game must NOT be:

- a management simulator
- a dashboard
- score focused
- mixed-language (no English/Portuguese mixing in the UI)

Winning the season is the main goal.

## Language & Platform Mandates

- All player-facing text (buttons, narratives, rival dialogue, errors,
  victory/defeat screens) must be written in pt-BR and pulled from the
  centralized strings in `shared/i18n` - never hardcoded in components.
- Every screen must work from 360px to 430px width with no horizontal
  scrolling, with desktop as a secondary enhancement.
- Code, types, file names, and internal identifiers stay in English.