import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Terms of Service | AngleFinder",
  description: "AngleFinder terms of service. Read our usage terms and disclaimers.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | AngleFinder",
    description: "AngleFinder terms of service. Free educational tools.",
    url: "https://anglefinder.co/terms-of-service",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | AngleFinder",
    description: "AngleFinder terms of service. Free educational tools.",
    images: ["/og-image.png"],
  },
};

export default function TermsOfServicePage() {
  const pageUrl = "https://anglefinder.co/terms-of-service";
  const pageTitle = "Terms of Service | AngleFinder";
  const pageDesc = "AngleFinder terms of service. Read our usage terms and disclaimers.";

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: pageTitle,
            description: pageDesc,
            url: pageUrl,
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://anglefinder.co" },
            { name: "Terms of Service", url: pageUrl },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Terms of Service</h1>
        <p className="text-af-on-surface/70 mb-8">Last updated: May 15, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Disclaimer</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            AngleFinder is provided for educational and general use. Results are approximate and should not be used for critical applications requiring certified measurements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Free Service</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            All tools are free to use. No fees, no subscriptions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Acceptable Use</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            You agree to use this service for lawful purposes only. Do not attempt to scrape, automate, or abuse the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Changes</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            We may update these terms at any time. Continued use after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            For questions about these terms, contact{" "}
            <a href="mailto:support@anglefinder.co" className="text-af-cta hover:underline">
              support@anglefinder.co
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
