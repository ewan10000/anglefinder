import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-af-primary-container py-16 px-6 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-af-on-primary mb-4">
        Ready to measure?
      </h2>
      <p className="text-af-on-primary opacity-90 mb-8 max-w-xl mx-auto">
        Join thousands of students and professionals using AngleFinder every day. No signup, no paywall — just precision.
      </p>
      <Link
        href="/protractor"
        className="inline-block bg-af-tertiary text-af-on-tertiary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-lg"
      >
        Go to Protractor
      </Link>
    </section>
  );
}
