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
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDesc,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://anglefinder.co" },
          { name: "Cookie Policy", url: pageUrl },
        ])}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">Cookie Policy</h1>
        <p className="text-sm text-af-on-surface-variant mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="space-y-8 text-sm text-af-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device by your web browser. They help websites remember your preferences and improve your browsing experience.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">2. Essential Cookies</h2>
          <p>We use a single localStorage item (not a cookie) to remember your cookie consent choice. This is essential for the site to function and cannot be disabled.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">3. Analytics Cookies</h2>
          <p>We use Plausible Analytics, which does not use cookies and does not track personal data. No consent is required for this service.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">4. Advertising Cookies</h2>
          <p>Google AdSense may place cookies for personalized advertising. These are only activated if you click "Accept All" in our Cookie Consent Banner. You can change your preference at any time.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">5. Managing Cookies</h2>
          <p>You can manage or delete cookies through your browser settings. Most browsers allow you to block or delete cookies on a per-site basis. Note that blocking essential cookies may affect site functionality.</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">6. Contact</h2>
          <p>For questions about our Cookie Policy, contact <a href="mailto:support@anglefinder.co" className="text-af-primary underline">support@anglefinder.co</a>.</p>
        </section>
      </div>
    </div>
    </>
  );
}
