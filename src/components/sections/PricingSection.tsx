import { CheckCircle } from "lucide-react";

const perks = [
  "Full 360° Protractor",
  "Triangle Calculation Suite",
  "High-Precision Units (Rad, Grad)",
  "No Account Required",
  "Image Angle Measurement",
];

export default function PricingSection() {
  return (
    <section className="py-16 px-6 text-center bg-af-background">
      <div className="max-w-[400px] mx-auto bg-af-surface border-2 border-af-primary p-8 rounded-xl">
        <span className="inline-block text-xs font-bold text-af-primary bg-af-primary-fixed px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
          Best Value
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-1">Free</h3>
        <p className="text-af-on-surface-variant mb-6">Forever &amp; Always</p>
        <ul className="text-left space-y-3 mb-8">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-af-primary shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <a
          href="/protractor"
          className="block w-full bg-af-primary-container text-af-on-primary py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Start Measuring
        </a>
      </div>
    </section>
  );
}
