export const metadata = {
  title: "Privacy Policy | AngleFinder",
  description: "AngleFinder privacy policy. Learn how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Privacy Policy</h1>
      <p className="text-sm text-af-on-surface-variant mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="space-y-8 text-sm text-af-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">1. Information We Do Not Collect</h2>
          <p>AngleFinder is a purely front-end tool. We do not collect, store, or transmit any personal information. All calculations, image processing, and angle measurements happen entirely within your browser.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">2. Local Storage</h2>
          <p>We use your browser's localStorage only to remember your cookie consent preference. This data never leaves your device and is not shared with any third party.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">3. Image Processing</h2>
          <p>When you use the Image Angle Measurement tool, your images are processed entirely within your browser using the FileReader and Canvas APIs. We never see, upload, or store your images on our servers.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">4. Analytics</h2>
          <p>We use Plausible Analytics, a privacy-friendly analytics tool that does not use cookies and does not collect personally identifiable information. It tracks anonymous page views and referral sources only.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">5. Advertising</h2>
          <p>We display Google AdSense advertisements. AdSense may use cookies to serve personalized ads, but only after you explicitly consent to advertising cookies via our Cookie Consent Banner.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">6. Children's Privacy</h2>
          <p>AngleFinder is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@anglefinder.com" className="text-af-primary underline">hello@anglefinder.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
