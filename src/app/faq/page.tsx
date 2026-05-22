export const metadata = {
  title: "FAQ | AngleFinder",
  description: "Frequently asked questions about AngleFinder's online protractor, angle calculator, and image measurement tools.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Is AngleFinder free to use?",
      a: "Yes, all core tools are completely free. No signup or credit card required.",
    },
    {
      q: "How accurate is the online protractor?",
      a: "AngleFinder provides measurements accurate to 0.1° for educational and general use. For professional applications requiring certified precision, please use a physical protractor or calibrated measuring instrument.",
    },
    {
      q: "Do my images get uploaded to your servers?",
      a: "No. All image processing happens entirely within your browser. Your images are never uploaded, stored, or transmitted to any server.",
    },
    {
      q: "Can I use AngleFinder on mobile?",
      a: "Yes, AngleFinder is fully responsive and works on all modern browsers including mobile devices and tablets.",
    },
    {
      q: "What browsers are supported?",
      a: "AngleFinder works on Chrome, Firefox, Safari, Edge, and other modern browsers that support HTML5 Canvas and JavaScript.",
    },
    {
      q: "Is there a pro version?",
      a: "Currently all features are free. We may introduce premium features in the future, but the core protractor, calculator, and image tools will always remain free.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-af-on-surface-variant mb-8">
        Everything you need to know about AngleFinder.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-af-surface border border-af-outline-variant rounded-xl p-6">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-af-primary mb-2">
              {faq.q}
            </h2>
            <p className="text-sm text-af-on-surface-variant leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-af-on-surface-variant mb-4">Still have questions?</p>
        <a
          href="mailto:hello@anglefinder.co"
          className="inline-block bg-af-primary-container text-af-on-primary px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
