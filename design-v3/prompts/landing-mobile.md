# AngleFinder — Mobile Homepage (based on v1 Minimal Precision)

Design a mobile landing page for AngleFinder — the most accurate and beautiful online angle finder.

Target users: Students, DIY enthusiasts, professionals on smartphones.

Design vibe: Minimal / Fast / Touch-optimized. Keywords: instant, clean, thumb-friendly, precise.

Typography:
Use Space Grotesk for headings.
Use DM Sans for body.
Do not use Inter, Roboto, Arial.

Color scheme:
Background: #FAFAFA
Surface: #FFFFFF
Primary accent: #1B4332
CTA / highlight: #E63946
Text primary: #1A1A1A
Text secondary: #6B7280
Border: #E5E7EB

Page structure (375px viewport, single column):

1. NAVIGATION
- Fixed top bar, height 56px, bg white, border-bottom 1px #E5E7EB.
- Left: "AngleFinder" logo (Space Grotesk, 16px, weight 700).
- Right: Hamburger menu icon (3 lines, #1A1A1A) + CTA "Start" (bg #1B4332, text white, rounded-full, padding 6px 14px, font-size 13px).

2. HERO SECTION
- Padding: 80px 20px 40px (account for fixed nav).
- H1: "Measure Any Angle. Instantly." (Space Grotesk, 32px, weight 700, #1A1A1A, line-height 1.15)
- Subhead: "Online protractor, angle calculator, and image measurer — all free, no signup." (DM Sans, 16px, #6B7280, margin-top 12px)
- Disclaimer: "Results are for educational use only." (DM Sans, 11px, #9CA3AF, margin-top 8px)
- Primary CTA: "Start Measuring — Free" (bg #1B4332, text white, rounded-full, full-width, padding 14px, margin-top 24px, font-size 16px)
- Secondary CTA: "Try the Calculator" (border 1px #E5E7EB, text #1A1A1A, rounded-full, full-width, padding 12px, margin-top 12px)
- Trust line: "No signup required" (DM Sans, 12px, #9CA3AF, centered, margin-top 12px)

3. TOOL PREVIEW CARD
- Full-width card (margin 0 16px, bg white, border 1px #E5E7EB, border-radius 16px, padding 16px).
- Tab bar: "Protractor" | "Calculator" | "Image" (horizontal scroll if needed, pill tabs).
- Active tab: bg #1B4332, white text.
- Protractor tab (default):
  - Semi-circle protractor, size fits viewport width minus 32px padding.
  - Large angle number: "127°" (JetBrains Mono, 48px, #1A1A1A, centered).
  - Unit toggle: "°" | "rad" | "grad" (segmented control, smaller size for mobile).
  - Hint: "Drag to rotate →" (DM Sans, 12px, #9CA3AF)
- Image tab privacy note: "Images are processed locally in your browser." (DM Sans, 11px, #9CA3AF, below tab)

4. HOW IT WORKS
- Background: white, padding 60px 20px.
- Title: "How It Works" (Space Grotesk, 28px, centered).
- 3 steps stacked vertically:
  - Step number + title on one line.
  - Description below.
  - Vertical connecting line between steps.
  - Touch-friendly spacing (min 48px tap targets).

5. USE CASES
- Background: #FAFAFA, padding 60px 20px.
- Title: "Built for Every Angle" (Space Grotesk, 28px, centered).
- 3 cards stacked vertically (full-width, margin-bottom 16px):
  - bg white, border 1px #E5E7EB, border-radius 12px, padding 24px.
  - Icon (40px, #1B4332)
  - Title: Space Grotesk, 18px.
  - Before/After/Bridge: DM Sans, 14px.

6. FEATURES
- Background: white, padding 60px 20px.
- Title: "Three Tools. One Page." (Space Grotesk, 28px, centered).
- 4 feature cards stacked vertically:
  - bg #FAFAFA, border 1px #E5E7EB, border-radius 12px, padding 20px.
  - Icon + title + description.

7. PRICING
- Background: #FAFAFA, padding 60px 20px.
- Single card (bg white, border 2px #1B4332, border-radius 16px, padding 32px):
  - "FREE PLAN" badge.
  - "$0" (Space Grotesk, 48px) + "/forever"
  - Feature list with checkmarks.
  - CTA: "Start Measuring — Free" (bg #E63946, white, rounded-full, full-width, padding 14px)
  - "No credit card. No signup. No catch."

8. FAQ
- Background: white, padding 60px 20px.
- Title: "Questions? Answered." (Space Grotesk, 28px, centered).
- Accordion items (full-width, border-bottom 1px #E5E7EB):
  - Question: DM Sans, 15px, weight 500.
  - Answer: DM Sans, 14px, #6B7280.
  - Tap to expand/collapse.

9. FINAL CTA
- Background: #1B4332, padding 60px 20px.
- H2: "You already have the photo, the problem, or the homework question." (Space Grotesk, 24px, white, centered)
- Body text: DM Sans, 15px, rgba(255,255,255,0.8), centered.
- CTA: "Start Measuring — Free" (bg white, text #1B4332, rounded-full, full-width, padding 14px)

10. FOOTER
- Background: #1A1A1A, padding 40px 20px.
- Logo + tagline.
- Links stacked vertically (Privacy, Terms, Cookie, Contact).
- Disclaimer text (DM Sans, 11px, #4B5563).
- "All images are processed locally..."

11. COOKIE CONSENT BANNER
- Fixed bottom, bg #1A1A1A, padding 16px.
- Text + two buttons stacked or side by side if space allows.
- "Essential Only" | "Accept All"

Mobile constraints:
- Single column only.
- Headline max 2 lines.
- Cards stack vertically.
- Minimum touch target 44x44px (prefer 48px).
- No horizontal overflow.
- Large tap areas for accordion, tabs, and CTAs.
- AdSense ad slots: full-width banner between sections, marked "Advertisement".
- Tool must be fully usable with thumb (protractor draggable, calculator inputs large enough).

Device: MOBILE (375px viewport).
