---
name: Aethelgard Mono-Luxe
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#cfcece'
  on-tertiary: '#303031'
  tertiary-container: '#b4b3b3'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 96px
    fontWeight: '600'
    lineHeight: 100px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is anchored in "Architectural Noir"—a visual philosophy that treats digital interfaces with the reverence of a luxury stone showroom. The brand personality is authoritative, silent, and bespoke, targeting high-net-worth individuals, architects, and interior designers who value material permanence over digital noise.

The design style merges **High-End Minimalism** with **Glassmorphism**. It utilizes "blackspace" (expansive areas of #050505) to frame content as if it were a gallery piece. Visual interest is generated through light rather than color—specifically "gold light leaks" and caustic reflections that mimic the way light hits polished marble or granite. The emotional response is one of exclusivity, cinematic weight, and absolute precision.

## Colors

The palette is strictly curated to evoke the permanence of stone and the radiance of precious metals.

- **Background (#050505):** A "Deepest Black" that serves as the void. It is not a dark gray; it is a true black to maximize the contrast of gold accents and ensure "infinite" depth on OLED displays.
- **Primary Gold (#D4AF37):** Reserved for high-impact moments. Used for primary calls to action, active states, and subtle glowing gradients (light leaks).
- **Secondary Slate (#1A1A1A):** Used for structural depth. This color forms the base of glassmorphic containers, providing a visible but subtle separation from the pure black background.
- **Neutral Silver (#F5F5F5):** Used exclusively for high-readability body text and iconography to ensure it "cuts" through the darkness without the harshness of pure white.

## Typography

The typography system relies on a dramatic contrast between the high-waisted, elegant **Playfair Display** and the systematic, invisible **Inter**.

- **Display & Headlines:** Use Playfair Display. Large-scale headings should be treated as architectural elements. Negative letter-spacing is applied to the largest sizes to create a "tight," editorial feel.
- **Body Text:** Use Inter with a "light" weight (300) for large blocks of text to maintain a sense of airiness. 
- **Labels:** Small labels and navigational elements use Inter in all-caps with generous tracking (0.2em) to mimic the engraving found on luxury stone samples.

## Layout & Spacing

This design system employs a **Fixed Grid** with hyper-extended margins to enforce a sense of "premium scarcity." 

- **The Void:** Use 160px vertical gaps between sections. This "excessive" whitespace signals luxury and allows each stone product image to breathe.
- **Grid:** A 12-column grid for desktop with 32px gutters. Content should often be centered or offset to create an asymmetrical, cinematic layout.
- **Mobile:** Transition to a 4-column grid. Margins remain generous (24px) to ensure the UI never feels "cramped" or "utility-first."

## Elevation & Depth

Depth is created through **Atmospheric Glassmorphism** and **Tonal Layering**, not traditional drop shadows.

- **Glassmorphic Tiers:** Use #1A1A1A at 40-60% opacity with a heavy backdrop blur (20px to 40px). This creates a "frosted obsidian" look.
- **Light Leaks:** Instead of shadows, use subtle radial gradients of #D4AF37 at 5% opacity behind primary cards to create a "halo" effect.
- **Inner Borders:** Use 1px solid borders at 10% white opacity on the top and left edges of containers to simulate light catching the edge of a cut stone.

## Shapes

The shape language is **Strictly Geometric (Sharp)**. 

Luxury stone is defined by its cut. Therefore, this design system rejects rounded corners for structural elements. All cards, buttons, and input fields must have 0px border-radius to maintain an architectural, monolithic aesthetic. The only exception is for circular icon buttons, which must be perfect circles.

## Components

- **Primary Buttons:** Sharp edges, #D4AF37 background, #050505 text. Use a "shimmer" hover effect where a light highlight sweeps across the gold surface.
- **Glass Navigation:** A sticky top bar with #050505 at 50% opacity and 30px backdrop blur. Navigation links use the `label-caps` style.
- **Full-Screen Menu:** An overlay that completely obscures the page with #050505. Menu items appear in `display-xl` type with a staggered entrance animation.
- **Stone Cards:** Full-bleed imagery with a subtle 1px border. Product names appear in `headline-lg` overlaid with a slight gradient for legibility.
- **Input Fields:** A single 1px line at the bottom (underline style) in #707070, turning to #D4AF37 on focus. No bounding box.
- **Image Carousels:** Use a progress bar at the bottom rather than traditional dots. The progress bar should be a thin 2px line in #D4AF37.