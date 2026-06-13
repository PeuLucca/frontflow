# UI Spec

## Design Goals

Front Row must feel:

- feminine
- luxury
- editorial
- glamorous
- competitive

## Language (pt-BR)

All visible text in the UI must be Brazilian Portuguese. This includes
button labels, headings, narratives, rival dialogue, tutorials, errors,
and the victory/defeat screens. Never mix English and Portuguese on the
same screen.

UI strings must not be hardcoded inside components - they are read from a
centralized string table so the same components can later support other
locales (see `docs/specs/architecture-spec.md`).

## Mobile-First & Responsive Layout

Front Row is designed for one-handed phone use first; desktop is a
secondary, non-blocking enhancement.

- **Supported widths**: 360px, 390px, 414px, and desktop. Every screen
  must look correct and be fully usable at each of these widths.
- **No horizontal scrolling** on any screen, at any supported width.
- **Touch targets**: all interactive elements (buttons, draft cards,
  "Próximo Evento", etc.) must have a minimum touch target of ~44px so
  they are comfortable for thumbs.
- **Draft screen**: character options and the "Escolher" action must be
  reachable and tappable with one hand, without the user needing to
  stretch toward the top of the screen.
- **Cards**: `Card`-based components (character cards, event cards, rival
  card, result card) must stack vertically and resize fluidly - no fixed
  pixel widths that overflow at 360px.
- **Text**: font sizes must remain legible at 360px (titles do not wrap
  awkwardly, body text does not shrink below a comfortable reading size).
- Desktop layout simply constrains the same mobile-first column to a
  centered, max-width container (per `Layout`) - it does not introduce a
  separate multi-column design for the MVP.

## Inspiration

Keep from 7a0:

- centered layout
- simple flow
- strong card selection
- fast gameplay

Do NOT copy the visual design.

## Color Palette

```txt
Background: #12070d
Card: #1f1118
Border: #f4d6a0

Primary: #f2c46d
Secondary: #e8a0bf

Rival: #8b1e3f

Text: #fff8ef
Muted: #b9a8ad
```

## Typography

Body:

```css
Inter,
system-ui,
sans-serif
```

Titles:

```css
Playfair Display
```

(optional)

## Character Card

Must contain:

- photo
- name
- category (shown in pt-BR, e.g. "Modelo", "Influenciadora")
- choose button, labeled **"Escolher"**

Must NOT contain:

- hidden stats

## Rival Card

Example (pt-BR):

Miranda Voss

CEO da Velvet House

Elegante.
Fria.
Perigosa.

## Example Narratives

All narrative copy is written in pt-BR.

```txt
Paris está observando.

Miranda Voss escolheu mais uma superestrela.
```

```txt
Front Row 2 x 1 Velvet House

As câmeras seguiram sua agência esta noite.
```