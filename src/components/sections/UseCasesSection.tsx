import { GraduationCap, Home, Wrench } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "A perfect interactive companion for geometry classes, trigonometry homework, and engineering students.",
  },
  {
    icon: Home,
    title: "DIY Projects",
    desc: "Calculate miter saw angles, furniture assembly joins, and home improvement measurements.",
  },
  {
    icon: Wrench,
    title: "Professional",
    desc: "Verify blueprint angles, structural alignments, and floor plan orientations with digital precision.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-16 px-6 bg-af-background">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-10 text-af-on-surface">
          Designed for Every Use Case
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="bg-af-surface border border-af-outline-variant p-6 rounded-xl">
              <c.icon className="w-10 h-10 text-af-primary mb-4" strokeWidth={1.5} />
              <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 text-af-primary">
                {c.title}
              </h4>
              <p className="text-af-on-surface-variant text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
