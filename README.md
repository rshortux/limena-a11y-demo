# limena a11y demo — Northfield Supply

A small React storefront that is **deliberately inaccessible**, used as a
fixture for testing [limena](https://limena.app)'s source-level auto-fix
flow: scan a live page, cluster the findings by component, locate the
component in this repo, propose a fix, open a pull request.

Northfield Supply is not a real shop. Nothing here is a recommendation.
Every defect below is intentional, and the point of the repo is to watch
them get fixed.

## The planted defects

| Component | Defect | Rule | Instances |
| --- | --- | --- | --- |
| `ProductCard.tsx` | `<img>` has no `alt` attribute | `image-alt` | 12 |
| `IconButton.tsx` | icon-only button with no accessible name | `button-name` | 26 |
| `ProductCard.tsx` | link text reads "Read more" out of context | generic link text | 12 |
| `PromoBanner.tsx` | body copy at 2.6:1 on its background | `color-contrast` | 1 |
| `PricingTable.tsx` | data table with no `<caption>` | table caption | 1 |

The instance counts are the interesting part. Twelve missing-alt failures
are not twelve bugs — they are one component rendered twelve times. A
tool that reports them as twelve rows is making the backlog look worse
than the work actually is.

## Why the components carry `data-component`

Each component renders a `data-component` attribute alongside its ordinary
class. That is not decoration: limena identifies a component from the
markup, and its clustering treats any lowercase kebab-case class as a
Tailwind-style utility, so `icon-button` is discarded exactly as `mt-4`
would be. Without the attribute the signature falls back to the bare tag
and the source-file lookup searches the repo for `<button>`, which matches
nothing.

So this fixture is annotated in limena's favour. Anything demonstrated
with it shows the pipeline working on components limena can already
identify, not on an arbitrary repo.

## Running it

```bash
npm install
npm run dev
```

## Fixing it

Don't, by hand. That's what the fixture is for.
