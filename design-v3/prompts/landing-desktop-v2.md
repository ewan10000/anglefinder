# AngleFinder — Desktop Homepage v2: Industrial Dark

Design a dark-theme landing page for AngleFinder — the most accurate and beautiful online angle finder.

Target users: Students, DIY enthusiasts, professionals needing quick angle measurement.

Design vibe: Industrial / Developer tool / Precision instrument. Keywords: precise, technical, fast, reliable, no-nonsense.

Typography:
Use JetBrains Mono for headings (H1-H3, angle numbers, nav) — monospace gives a calculator/tool feel.
Use IBM Plex Sans for body text.
Do not use Inter, Roboto, Arial.

Color scheme:
Background: #0A0A0F
Surface: #13131F
Surface elevated: #1A1A2E
Primary accent: #00E5CC (cyber cyan)
CTA / highlight: #FF9500 (amber gold)
Text primary: #E8ECF0
Text secondary: #8B949E
Border: #2D2D3A
Protractor arc: #00E5CC at 40% opacity
Protractor pointer: #FF9500
Glow: #00E5CC at 10% blur for hover states

Page structure:

1. NAVIGATION
- Fixed top bar, height 64px, bg #0A0A0F with bottom border 1px #2D2D3A.
- Left: "AngleFinder" wordmark (JetBrains Mono, weight 700, #E8ECF0) + geometric icon (small cyan protractor arc).
- Center: Nav links "Protractor", "Calculator", "Image", "FAQ" (IBM Plex Sans, 14px, #8B949E, hover #00E5CC).
- Right: CTA "Start Measuring — Free" (bg #00E5CC, text #0A0A0F, rounded-md, font-weight 600).

2. HERO SECTION
- Layout: Tool-embedded hero. Full-width dark background with subtle grid lines (1px, #2D2D3A, 40px spacing).
- Top center:
  - H1: "Measure Any Angle. Instantly." (JetBrains Mono, 48px, weight 700, #E8ECF0)
  - Subhead: "Online protractor, angle calculator, and image measurer — all free, no signup." (IBM Plex Sans, 18px, #8B949E)
  - Disclaimer: "Results are for educational and general use only. Not for professional surveying or medical use." (IBM Plex Sans, 12px, #4B5563)
- Center: Large tool card (bg #13131F, border 1px #2D2D3A, border-radius 12px, padding 40px, max-width 800px, centered).
  - Tab bar: "Protractor" | "Calculator" | "Image" (pill tabs, active: bg #00E5CC + #0A0A0F text, inactive: bg transparent + #8B949E).
  - Protractor tab (default): Full 0°–360° protractor drawn with cyan lines, amber pointer. Large angle display "127.5°" (JetBrains Mono, 72px, #E8ECF0) with unit toggle (° / rad / grad) as small cyan pills.
  - Below protractor: "Drag to rotate →" hint (IBM Plex Sans, 13px, #4B5563)
- Below tool card:
  - Primary CTA: "Start Measuring — Free" (bg #FF9500, text #0A0A0F, rounded-md, padding 12px 28px)
  - Secondary CTA: "Try the Calculator" (border 1px #2D2D3A, text #E8ECF0, rounded-md)
  - Trust: "No signup required" (IBM Plex Sans, 13px, #4B5563)
- Section padding: 100px top, 80px bottom.

3. HOW IT WORKS
- Background: #13131F
- Padding: 100px 0
- Title: "How It Works" (JetBrains Mono, 32px, #E8ECF0)
- 3 steps, connected by a cyan horizontal line:
  - Step circle: 48px, border 1px #00E5CC, bg transparent, cyan number (JetBrains Mono, 18px).
  - Title: IBM Plex Sans, 18px, #E8ECF0.
  - Description: IBM Plex Sans, 14px, #8B949E.

4. USE CASES
- Background: #0A0A0F with subtle radial gradient (center #13131F, edges #0A0A0F).
- Padding: 100px 0
- Title: "Built for Every Angle" (JetBrains Mono, 32px, #E8ECF0)
- 3 cards (bg #13131F, border 1px #2D2D3A, border-radius 8px):
  - Top: icon in cyan (#00E5CC)
  - Card title: JetBrains Mono, 18px, #E8ECF0
  - Before/After/Bridge: IBM Plex Sans, 14px, #8B949E / #E8ECF0

5. FEATURES
- Background: #13131F
- Padding: 100px 0
- Title: "Three Tools. One Page." (JetBrains Mono, 32px, #E8ECF0)
- Asymmetric 2+1 bento grid:
  - Left large cell: Protractor feature with a mini glowing protractor graphic (cyan arc on dark).
  - Right top: Calculator feature.
  - Right bottom: Image + Multi-unit feature combined.
  - Each cell: bg #1A1A2E, border 1px #2D2D3A, border-radius 8px.
  - Feature name: JetBrains Mono, 16px, #00E5CC.
  - Description: IBM Plex Sans, 14px, #8B949E.

6. PRICING
- Background: #0A0A0F
- Padding: 100px 0
- Single card centered (bg #13131F, border 1px #00E5CC, border-radius 12px):
  - Badge: "FREE" (bg #00E5CC, text #0A0A0F, JetBrains Mono, 12px)
  - Price: "$0" (JetBrains Mono, 64px, #E8ECF0)
  - Feature list with cyan checkmarks.
  - CTA: "Start Measuring — Free" (bg #FF9500, text #0A0A0F, rounded-md, full-width)

7. FAQ
- Background: #13131F
- Accordion with dark styling:
  - Question: IBM Plex Sans, 16px, #E8ECF0
  - Answer: IBM Plex Sans, 14px, #8B949E
  - Border-bottom: 1px #2D2D3A
  - Expand icon: + in cyan

8. FINAL CTA
- Background: full-bleed gradient from #0A0A0F to #1A1A2E
- Title: "Measure Any Angle. Instantly. For Free." (JetBrains Mono, 36px, #E8ECF0)
- CTA: "Start Measuring — Free" (bg #00E5CC, text #0A0A0F, rounded-md)

9. FOOTER
- Background: #0A0A0F
- Border-top: 1px #2D2D3A
- Links in #8B949E, hover #00E5CC
- Disclaimer in #4B5563

10. COOKIE BANNER
- Fixed bottom, bg #13131F, border-top 1px #2D2D3A
- Buttons: "Essential Only" (border #2D2D3A) | "Accept All" (bg #00E5CC, text #0A0A0F)

Design constraints:
- No generic SaaS template.
- No purple-blue gradient.
- No centered 3-column features.
- No emoji icons; use line icons in cyan.
- CTA most visible above fold.
- AdSense slots marked "Advertisement".

Device: DESKTOP (1440px viewport).
