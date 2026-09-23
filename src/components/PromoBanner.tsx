// Promotional banner. The body copy is #8a8a8a on #f2f2f0, which is
// 2.6:1 against the background — below the 4.5:1 that WCAG 1.4.3
// requires for text under 18pt. axe-core rule: color-contrast.
export function PromoBanner({ headline, body }: { headline: string; body: string }) {
  return (
    <section className="promo-banner">
      <h2 className="promo-banner__headline">{headline}</h2>
      <p className="promo-banner__body">{body}</p>
    </section>
  );
}
