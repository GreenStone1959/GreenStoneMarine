# Agent Manus Handoff

## What Changed

- Removed the broken analytics placeholder script from `client/index.html` and replaced it with a guarded runtime loader in `client/src/main.tsx`.
- Added link and anchor handling so navigation lands on the correct pages and sections, including hash links, listing category filters, and listing inquiry links.
- Updated contact form behavior so submissions open a prefilled email draft to `greenstonemarine@gmail.com`.
- Updated company phone references and `tel:` links to `754-300-8651`.
- Improved the mobile navigation accessibility state and restyled the 404 page to match the GreenStone Marine visual system.
- Added missing section IDs and scroll offset styling so fixed-header navigation does not cover the destination content.

## Why

- Placeholder values are being kept for now, but broken placeholders should not ship in ways that create console/network errors.
- The site needed reliable click paths from nav/footer/listings into the matching page sections.
- There is no backend mail endpoint configured yet, so the safest current contact-form behavior is a `mailto:` handoff to the confirmed GreenStone Marine inbox.
- The confirmed company contact details needed to replace temporary phone/email placeholders across visible content and actionable links.

## Verification

- `pnpm run check`
- `pnpm run build`
- Browser smoke test on the contact page, including visible phone/email and `tel:`/`mailto:` link checks.
