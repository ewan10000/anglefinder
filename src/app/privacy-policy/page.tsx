import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Privacy Policy | AngleFinder",
  description: "AngleFinder privacy policy. Learn how we handle your data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | AngleFinder",
    description: "AngleFinder privacy policy. No images uploaded to servers.",
    url: "https://anglefinder.co/privacy-policy",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AngleFinder",
    description: "AngleFinder privacy policy. No images uploaded to servers.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  const pageUrl = "https://anglefinder.co/privacy-policy";
  const pageTitle = "Privacy Policy | AngleFinder";
  const pageDesc = "AngleFinder privacy policy. Learn how we handle your data.";

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
            { name: "Privacy Policy", url: pageUrl },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Privacy Policy</h1>
        <p className="text-af-on-surface/70 mb-8">Last updated: May 15, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. No Data Collection</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            AngleFinder does not collect, store, or transmit any personal information. All calculations happen in your browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. No User Accounts</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            We do not require user accounts, email addresses, passwords, or any form of registration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            We use essential cookies for site functionality (e.g., theme preference). No tracking cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            We may display ads through third-party networks. These networks may use cookies per their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            For privacy questions, contact us at{" "}
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
