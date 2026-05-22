import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Contact | AngleFinder",
  description: "Contact AngleFinder for questions, feedback, or support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const pageUrl = "https://anglefinder.co/contact";
  const pageTitle = "Contact | AngleFinder";
  const pageDesc = "Contact AngleFinder for questions, feedback, or support.";

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
            { name: "Contact", url: pageUrl },
          ]),
        ]}
      />
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-4">Contact Us</h1>
        <p className="text-af-on-surface/70 mb-8">{pageDesc}</p>
        <a
          href="mailto:support@anglefinder.co"
          className="inline-block px-6 py-3 bg-af-cta text-white rounded-lg font-medium hover:bg-af-cta-hover transition"
        >
          Email support@anglefinder.co
        </a>
      </div>
    </>
  );
}
