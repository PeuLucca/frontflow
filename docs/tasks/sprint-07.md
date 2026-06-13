# Sprint 07 - Deployment & Final QA

## Goal

Ship Front Row to GitHub Pages with a reliable deployment setup and
complete a final QA pass before release.

## Scope

- Finalize Vite configuration for GitHub Pages hosting.
- Set up a repeatable deployment process.
- Full regression and cross-device QA of the complete game.
- Documentation updates for players and contributors.

## Tasks

- Confirm `vite.config.ts`'s `base` path matches the actual GitHub repo
  name and that all asset URLs resolve correctly when built.
- Add a deployment workflow (GitHub Actions building and publishing
  `dist/` to GitHub Pages).
- If any routing is introduced, verify it works correctly under GitHub
  Pages (hash routing, per the technical spec).
- Run a full regression pass across Home, Intro, Draft, Season, and
  Result screens, including restart.
- Run a full pt-BR text audit across every screen and state (including
  rival narratives, victory/defeat, and share text) to confirm there is
  no English text and no English/Portuguese mixing.
- Test the deployed build on multiple browsers (Chrome, Safari, Firefox)
  and at 360px, 390px, 414px, and desktop viewports.
- Verify all character images and fallbacks load correctly from the
  deployed URL.
- Update `README.md` with setup instructions, available scripts, and a
  link to the live game.

## Acceptance Criteria

- The game is live and playable at the GitHub Pages URL.
- A full season (draft -> rival draft -> events -> result -> restart)
  completes end-to-end on the deployed build.
- No console errors or broken assets on the deployed site.
- `README.md` documents setup, scripts, and how to play.
- Functionality delivered in Sprints 01-06 remains intact on the
  deployed build.
- The entire interface is in Brazilian Portuguese (pt-BR), with no
  English text or mixed-language strings anywhere in the game.
- Every screen is verified at 360px, 390px, and 414px widths (plus
  desktop) on the deployed build with no horizontal scrolling.

## Definition of Done

- `npm run build` succeeds and the deployment workflow completes
  successfully.
- The deployed game has been manually verified as playable on desktop and
  mobile browsers, at 360px/390px/414px and desktop widths.
- The pt-BR text audit is complete with no outstanding English strings.
- `README.md` and relevant docs reflect the final release state.

## Out of Scope

- Post-launch content (new rivals, seasons, additional events).
- Analytics or monitoring integration.
- Marketing or launch campaign activities.
