# ADR-005

## Title

Mobile-First Responsive Strategy

## Status

Accepted

## Decision

Front Row is designed mobile-first. Every screen is built and verified
against 360px, 390px, and 414px widths first, with desktop treated as a
centered, constrained enhancement of the same mobile layout. No screen may
rely on horizontal scrolling or hover-only interactions.

## Why

- Front Row is primarily played on smartphones in short sessions (a
  season in 3 minutes or less).
- Designing mobile-first avoids retrofitting cramped layouts later and
  keeps the draft/season loop comfortable for one-handed play.

## Consequences

- CSS is written mobile-first: base styles target small screens, and
  `min-width` media queries add desktop refinements on top.
- Every new or changed screen/component must be verified at
  360px/390px/414px (and desktop) before being considered done.
- Desktop-specific multi-column layouts are out of scope for the MVP.
