import { Compass, Move, Ruler } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Open Tool",
    desc: "No installation or account needed. Just visit the URL and start measuring instantly.",
  },
  {
    icon: Move,
    title: "2. Drag Pointer",
    desc: "Move the precision arm to align with your object or reference points on the screen.",
  },
  {
    icon: Ruler,
    title: "3. Get Angle",
    desc: "Read high-precision degree, radian, or gradian values updated in real-time.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 px-6 bg-af-surface-container">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step) => (
            <div key={step.title} className="p-6">
              <step.icon className="w-12 h-12 text-af-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2 text-af-primary">
                {step.title}
              </h3>
              <p className="text-af-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
