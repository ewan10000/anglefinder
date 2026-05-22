import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "FAQ | AngleFinder",
  description: "Frequently asked questions about AngleFinder's online protractor, angle calculator, and image measurement tools.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const pageUrl = "https://anglefinder.co/faq";
  const pageTitle = "FAQ | AngleFinder";
  const pageDesc = "Frequently asked questions about AngleFinder's online protractor, angle calculator, and image measurement tools.";

  const faqs = [
    {
      question: "Is AngleFinder free?",
      answer: "Yes. All tools are free to use with no signup required.",
    },
    {
      question: "How accurate is the online protractor?",
      answer: "The protractor is accurate to 0.1 degrees for on-screen measurements.",
    },
    {
      question: "Can I use AngleFinder on mobile?",
      answer: "Yes. All tools are responsive and work on phones, tablets, and desktops.",
    },
    {
      question: "Do you store my uploaded images?",
      answer: "No. Images are processed locally in your browser and never uploaded to our servers.",
    },
  ];

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
            { name: "FAQ", url: pageUrl },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-af-line pb-6">
              <h2 className="font-semibold text-lg text-af-on-surface mb-2">{faq.question}</h2>
              <p className="text-af-on-surface/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
