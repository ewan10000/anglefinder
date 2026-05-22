import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Terms of Service | AngleFinder",
  description: "AngleFinder terms of service. Read our usage terms and disclaimers.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  const pageUrl = "https://anglefinder.co/terms-of-service";
  const pageTitle = "Terms of Service | AngleFinder";
  const pageDesc = "AngleFinder terms of service. Read our usage terms and disclaimers.";

  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDesc,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://anglefinder.co" },
          { name: "Terms of Service", url: pageUrl },
        ])}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Terms of Service</h1>
        <p className="text-sm text-af-on-surface-variant mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="space-y-8 text-sm text-af-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">1. Acceptance of Terms</h2>
          <p>By using AngleFinder, you agree to these Terms of Service. If you do not agree, please do not use our tools.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">2. Educational Use Only</h2>
          <p>AngleFinder is provided for educational and general use purposes only. Results are approximate and should not be relied upon for professional surveying, engineering, medical, or legal applications. Always verify critical measurements with certified physical instruments.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">3. No Warranty</h2>
          <p>AngleFinder is provided "as is" without any warranties of any kind, express or implied. We do not guarantee accuracy, reliability, or availability of the service.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">4. Limitation of Liability</h2>
          <p>In no event shall AngleFinder or its operators be liable for any damages arising from the use or inability to use our tools, including but not limited to direct, indirect, incidental, or consequential damages.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">5. User Conduct</h2>
          <p>You agree not to use AngleFinder for any unlawful purpose, not to attempt to reverse engineer our tools, and not to interfere with the proper working of the service.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">6. Age Restriction</h2>
          <p>AngleFinder is not intended for users under 13 years of age. By using our service, you represent that you are at least 13 years old.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">7. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of AngleFinder after changes constitutes acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">8. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:support@anglefinder.co" className="text-af-primary underline">support@anglefinder.co</a>.</p>
        </section>
      </div>
    </div>
    </>
  );
}
