# AngleFinder — Desktop Homepage v1: Minimal Precision

Design a light-theme landing page for AngleFinder — the most accurate and beautiful online angle finder.

Target users: Students (geometry/physics), DIY/home enthusiasts, professionals needing quick angle measurement.

Design vibe: Minimal / Mathematical precision / Clean professional tool. Keywords: precise, trustworthy, calm, educational, fast.

Typography:
Use Space Grotesk for headings (H1-H3, nav, buttons).
Use DM Sans for body text and UI labels.
Do not use Inter, Roboto, Arial, or system default fonts.
Use JetBrains Mono for angle numbers and calculation results only.

Color scheme:
Background: #FAFAFA
Surface: #FFFFFF
Primary accent: #1B4332 (deep forest green)
CTA / highlight: #E63946 (red)
Text primary: #1A1A1A
Text secondary: #6B7280
Border: #E5E7EB
Protractor arc: #1B4332 at 60% opacity
Protractor pointer: #E63946

Page structure:

1. NAVIGATION
- Fixed top bar, height 64px, white background with subtle bottom border (#E5E7EB).
- Left: AngleFinder wordmark (Space Grotesk, weight 700, #1A1A1A) with a small geometric protractor icon (simple SVG: semi-circle with degree marks, #1B4332).
- Center: Nav links "Protractor", "Calculator", "Image", "FAQ" (DM Sans, 14px, #6B7280, hover #1A1A1A).
- Right: Primary CTA button "Start Measuring — Free" (bg #1B4332, text white, rounded-full, padding 10px 24px).

2. HERO SECTION
- Layout: Split. Left 45% text, right 55% embedded tool preview.
- Left column (padding-left 8%, vertically centered):
  - H1: "Measure Any Angle. Instantly." (Space Grotesk, 48px, weight 700, #1A1A1A, line-height 1.1)
  - Subhead: "Online protractor, angle calculator, and image measurer — all free, no signup." (DM Sans, 18px, #6B7280, max-width 480px)
  - Disclaimer line: "Results are for educational and general use only. Not for professional surveying or medical use." (DM Sans, 12px, #9CA3AF, margin-top 12px)
  - Button group (margin-top 32px):
    - Primary: "Start Measuring — Free" (bg #1B4332, text white, rounded-full, 14px)
    - Secondary: "Try the Calculator" (bg transparent, border 1px #E5E7EB, text #1A1A1A, rounded-full)
  - Trust line: "No signup required" (DM Sans, 13px, #9CA3AF, with a small checkmark icon)
- Right column:
  - A white card (bg #FFFFFF, border 1px #E5E7EB, border-radius 16px, shadow-sm) containing the three-tool tab interface.
  - Tabs: "Protractor" | "Calculator" | "Image" (pill-style tabs, active tab has bg #1B4332 + white text, inactive has bg transparent + #6B7280).
  - Default active: Protractor tab.
  - Protractor tab content: A large semi-circle protractor (0°–360°) drawn with clean lines, a draggable red pointer showing current angle. Big angle number below: "127°" (JetBrains Mono, 64px, #1A1A1A).
  - Unit toggle below: "°" | "rad" | "grad" (segmented control, active #1B4332 bg).
- Section padding: 120px top, 100px bottom.
- Background: subtle dot grid pattern (1px dots, #E5E7EB, 24px spacing) on #FAFAFA.

3. HOW IT WORKS
- Background: #FFFFFF
- Padding: 100px 0
- Centered title: "How It Works" (Space Grotesk, 36px, #1A1A1A)
- 3 steps in a row (desktop), each step:
  - Step number circle: 40px, bg #1B4332, white number (JetBrains Mono, 16px)
  - Title: DM Sans, 18px, weight 600, #1A1A1A
  - Description: DM Sans, 14px, #6B7280
  - Step 1: "Choose your tool" / "Pick the protractor, calculator, or image measurer."
  - Step 2: "Drag, input, or click" / "Rotate the protractor, enter your values, or tap three points on a photo."
  - Step 3: "Get precise results" / "See the angle in degrees, radians, or gradians — instantly."
- Connecting line between steps (horizontal, 1px, #E5E7EB).

4. USE CASES
- Background: #FAFAFA
- Padding: 100px 0
- Centered title: "Built for Every Angle" (Space Grotesk, 36px, #1A1A1A)
- Subtitle: "Students, DIYers, and professionals trust AngleFinder." (DM Sans, 16px, #6B7280)
- 3 cards in a row, each card:
  - bg #FFFFFF, border 1px #E5E7EB, border-radius 12px, padding 32px
  - Top: icon area (48px, simple line icon in #1B4332)
  - Card title: Space Grotesk, 20px, weight 600, #1A1A1A
  - "Before" paragraph: DM Sans, 14px, #9CA3AF, prefixed with "Before:"
  - "After" paragraph: DM Sans, 14px, #1A1A1A, prefixed with "After:"
  - "Bridge" paragraph: DM Sans, 13px, #6B7280, prefixed with "How:"
  - Card 1: Student / icon: graduation cap / Before-After-Bridge from copy
  - Card 2: DIY & Home / icon: tools / Before-After-Bridge from copy
  - Card 3: Professional / icon: briefcase / Before-After-Bridge from copy

5. FEATURES
- Background: #FFFFFF
- Padding: 100px 0
- Centered title: "Three Tools. One Page. Zero Downloads." (Space Grotesk, 36px, #1A1A1A)
- Bento grid layout: 2x2 grid, each cell:
  - bg #FAFAFA, border 1px #E5E7EB, border-radius 12px, padding 32px
  - Feature icon (32px, #1B4332)
  - Feature name: Space Grotesk, 18px, weight 600, #1A1A1A
  - Advantage: DM Sans, 14px, #6B7280 (e.g. "Unlike angle-meter.github.io's clunky tool...")
  - Benefit: DM Sans, 14px, #1A1A1A, weight 500 (e.g. "Measure any angle visually in seconds.")
  - Cell 1: Visual Protractor (0°–360°) / protractor icon
  - Cell 2: Triangle Angle Calculator / calculator icon
  - Cell 3: Image Angle Measurement / image icon
  - Cell 4: Multi-Unit & Mobile-First / mobile icon
  - One cell spans 2 columns (the protractor cell is larger, showing a mini protractor graphic).

6. PRICING
- Background: #FAFAFA
- Padding: 100px 0
- Centered title: "Free. Forever." (Space Grotesk, 36px, #1A1A1A)
- Single card centered, max-width 480px:
  - bg #FFFFFF, border 2px #1B4332, border-radius 16px, padding 48px
  - Badge: "FREE PLAN" (bg #1B4332, text white, rounded-full, 12px, uppercase)
  - Price: "$0" (Space Grotesk, 64px, weight 700, #1A1A1A) + "/forever" (DM Sans, 16px, #6B7280)
  - Description: "Get unlimited access to all three angle tools with no restrictions, no watermarks, and no paywalls." (DM Sans, 14px, #6B7280)
  - Feature list with checkmarks:
    - Visual protractor (0°–360°)
    - Full triangle calculator with steps
    - Image angle measurement (local processing)
    - Unit switching (° / rad / grad)
    - Mobile-optimized touch controls
    - Ad-supported (unobtrusive)
  - CTA button: "Start Measuring — Free" (bg #E63946, text white, rounded-full, full-width, padding 14px)
  - Trust line: "No credit card. No signup. No catch." (DM Sans, 13px, #9CA3AF, centered)

7. FAQ
- Background: #FFFFFF
- Padding: 100px 0
- Centered title: "Questions? Answered." (Space Grotesk, 36px, #1A1A1A)
- Accordion-style FAQ, max-width 720px, centered:
  - Each item: border-bottom 1px #E5E7EB
  - Question: DM Sans, 16px, weight 500, #1A1A1A, with + icon on right
  - Answer: DM Sans, 14px, #6B7280, padding-bottom 20px
  - Questions (10 total, from copy):
    1. Is AngleFinder really free?
    2. How accurate is it?
    3. Does it work on my phone?
    4. Are my images uploaded to your servers?
    5. Do I need to create an account?
    6. What file formats are supported for image measurement?
    7. What units can I measure in?
    8. Can I use the results commercially?
    9. How is this different from other online protractors?
    10. Is this tool suitable for children?

8. FINAL CTA
- Background: #1B4332 (deep green, full-bleed)
- Padding: 100px 0
- Centered text, max-width 640px:
  - H2: "You already have the photo, the problem, or the homework question." (Space Grotesk, 32px, weight 600, white)
  - Body: "The hard part is finding a tool that actually works — without downloading an app, creating an account, or digging through a drawer for a plastic protractor. AngleFinder helps you measure any angle in seconds, on any device, for free." (DM Sans, 16px, rgba(255,255,255,0.8))
  - CTA: "Start Measuring — Free" (bg white, text #1B4332, rounded-full, padding 14px 32px, font-weight 600)

9. FOOTER
- Background: #1A1A1A
- Padding: 64px 0 32px
- Top row: Logo + tagline left, nav links right
  - Logo: "AngleFinder" (Space Grotesk, 18px, white)
  - Tagline: "The most accurate and beautiful online angle finder." (DM Sans, 13px, #6B7280)
  - Links: Privacy Policy, Terms of Service, Cookie Policy, Cookie Settings, Contact (DM Sans, 14px, #6B7280, hover white)
- Divider: 1px #333333
- Bottom row:
  - Left: "© 2026 AngleFinder. All rights reserved." (DM Sans, 13px, #6B7280)
  - Center: "All images are processed locally in your browser. We never see or store your photos." (DM Sans, 12px, #6B7280)
  - Right: "Results are for educational use. For critical measurements, use a certified physical tool." (DM Sans, 12px, #6B7280)
- Disclaimer block (margin-top 24px): Full disclaimer text in DM Sans, 11px, #4B5563.

10. COOKIE CONSENT BANNER (bottom of page)
- Fixed bottom bar, bg #1A1A1A, padding 16px 24px
- Text: "We use cookies to keep the site running and show unobtrusive ads." (DM Sans, 13px, white)
- Buttons: "Essential Only" (border 1px #6B7280, transparent bg) | "Accept All" (bg #1B4332, white text, rounded-full)

Design constraints:
- NOT a generic SaaS template.
- No purple-blue gradient on white background.
- No centered hero with generic 3-column features.
- No emoji icons; use geometric SVG icons (protractor, triangle, image, ruler).
- Use asymmetric layout where appropriate (split hero, bento features).
- CTA must be the most visible element above the fold.
- Keep strong information hierarchy.
- Make the design look like a real brand, not AI-generated.
- AdSense ad slots marked "Advertisement" in small grey text above ad areas.

Device: DESKTOP (1440px viewport).
