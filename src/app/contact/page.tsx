export const metadata = {
  title: "Contact | AngleFinder",
  description: "Contact AngleFinder for questions, feedback, or support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-af-on-surface mb-4">Contact Us</h1>
      <p className="text-af-on-surface-variant mb-8">
        Have questions, feedback, or need support? We'd love to hear from you.
      </p>
      <div className="bg-af-surface border border-af-outline-variant rounded-xl p-8">
        <p className="text-sm text-af-on-surface-variant mb-2">Email us at:</p>
        <a
          href="mailto:hello@anglefinder.co"
          className="font-[family-name:var(--font-display)] text-xl font-bold text-af-primary hover:underline"
        >
          hello@anglefinder.co
        </a>
        <p className="text-xs text-af-outline mt-6">
          We typically respond within 1-2 business days.
        </p>
      </div>
    </div>
  );
}
