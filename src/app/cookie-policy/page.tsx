import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Cookie Policy | AngleFinder",
  description: "Learn how AngleFinder uses cookies and how to manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  const pageUrl = "https://anglefinder.co/cookie-policy";
  const pageTitle = "Cookie Policy | AngleFinder";
  const pageDesc = "Learn how AngleFinder uses cookies and how to manage your preferences.";

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
            { name: "Cookie Policy", url: pageUrl },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Cookie Policy</h1>
        <p className="text-af-on-surface/70 mb-8">Last updated: May 15, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. What Are Cookies</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            We use essential cookies for site functionality (e.g., theme preference). We do not use tracking or advertising cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Managing Cookies</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            You can manage or delete cookies through your browser settings. Note that disabling essential cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Contact</h2>
          <p className="text-af-on-surface/70 leading-relaxed">
            For questions about cookies, contact{" "}
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
