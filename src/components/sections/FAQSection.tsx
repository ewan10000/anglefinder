"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is AngleFinder completely free?",
    a: "Yes, AngleFinder is 100% free to use. All features including the protractor, triangle calculator, and image measurement are available at no cost. The site is supported by ads.",
  },
  {
    q: "How accurate is the online protractor?",
    a: "Our tool provides results accurate to 0.1 degree for educational and general use. For professional surveying or engineering applications, always verify with certified physical instruments.",
  },
  {
    q: "Does it work on mobile phones?",
    a: "Yes, AngleFinder is fully responsive and touch-optimized. You can use it on iOS, Android, and any modern mobile browser without installing an app.",
  },
  {
    q: "Can I save my results?",
    a: "You can copy results to your clipboard with one click. We do not store any data on our servers — all calculations happen locally in your browser.",
  },
  {
    q: "Is my image data safe?",
    a: "Absolutely. Images are processed entirely within your browser using the FileReader and Canvas APIs. Nothing is uploaded to our servers.",
  },
  {
    q: "What units are supported?",
    a: "AngleFinder supports degrees (°), radians (rad), and gradians (grad). You can switch between units instantly with a single click.",
  },
  {
    q: "Can I use this for professional work?",
    a: "AngleFinder is designed for educational and general use. For critical professional measurements (engineering, surveying, medical), please use certified physical tools.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 bg-af-surface-container">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-10 text-af-on-surface">
          Common Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-af-surface border border-af-outline-variant rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-af-primary text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-af-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-af-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
