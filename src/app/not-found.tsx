import Link from "next/link";

export const metadata = {
  title: "Page Not Found | AngleFinder",
  description: "The page you're looking for doesn't exist. Browse our free online protractor, angle calculator, and image measurement tools.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold text-af-primary mb-4">
        404
      </h1>
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-af-on-surface mb-4">
        Page Not Found
      </h2>
      <p className="text-af-on-surface-variant mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block bg-af-primary-container text-af-on-primary px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
        <Link
          href="/protractor"
          className="inline-block bg-af-surface border border-af-outline-variant text-af-on-surface px-6 py-3 rounded-full text-sm font-bold hover:bg-af-surface-variant transition-colors"
        >
          Try Protractor
        </Link>
      </div>
    </div>
  );
}
