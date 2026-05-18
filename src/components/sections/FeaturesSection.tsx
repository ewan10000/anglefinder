import { Circle, Triangle, ImageIcon, Smartphone } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 bg-af-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {/* Large feature */}
          <div className="md:col-span-2 md:row-span-2 bg-af-primary-container text-af-on-primary p-8 rounded-xl flex flex-col justify-end">
            <Circle className="w-16 h-16 mb-6" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">360° Full Range</h3>
            <p className="text-sm opacity-90">
              Unlike traditional semi-circle protractors, our tool offers a complete 360-degree range for measuring any orientation without resetting.
            </p>
          </div>

          {/* Triangle Solver */}
          <div className="md:col-span-2 bg-af-surface-container-highest p-6 rounded-xl flex items-start justify-between">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 text-af-primary">Triangle Solver</h3>
              <p className="text-af-on-surface-variant text-sm">Calculate missing sides and angles using SSS, SAS, and ASA theorems instantly.</p>
            </div>
            <Triangle className="w-10 h-10 text-af-primary shrink-0" strokeWidth={1.5} />
          </div>

          {/* Image Measure */}
          <div className="bg-af-surface-container p-6 rounded-xl">
            <ImageIcon className="w-8 h-8 text-af-tertiary mb-3" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-1">Image Measure</h3>
            <p className="text-af-on-surface-variant text-sm">Upload a photo to overlay the protractor and measure real-world objects.</p>
          </div>

          {/* Mobile */}
          <div className="bg-af-surface-container p-6 rounded-xl">
            <Smartphone className="w-8 h-8 text-af-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-1">Mobile Friendly</h3>
            <p className="text-af-on-surface-variant text-sm">Works on any device, tablet or mobile. Touch-optimized controls.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
