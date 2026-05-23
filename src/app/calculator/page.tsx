import CalculatorTool from "@/components/tools/CalculatorTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata = {
  title: "Triangle Angle Calculator | AngleFinder",
  description: "Solve any triangle with SSS, SAS, ASA, AAS, or HL. Calculate angles, sides, area, and perimeter with step-by-step logic.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "Triangle Angle Calculator | AngleFinder",
    description: "Solve any triangle with SSS, SAS, ASA, AAS, or HL.",
    url: "https://anglefinder.co/calculator",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triangle Angle Calculator | AngleFinder",
    description: "Solve any triangle with SSS, SAS, ASA, AAS, or HL.",
    images: ["/og-image.png"],
  },
};

export default function CalculatorPage() {
  const pageUrl = "https://anglefinder.co/calculator";
  const pageTitle = "Triangle Angle Calculator | AngleFinder";
  const pageDesc = "Solve any triangle with SSS, SAS, ASA, AAS, or HL. Calculate angles, sides, area, and perimeter with step-by-step logic.";

  const faqSchema = generateFAQPageSchema([
    {
      name: "What triangle solving methods are supported?",
      acceptedAnswer: "AngleFinder supports SSS (three sides), SAS (two sides and included angle), ASA (two angles and included side), AAS (two angles and non-included side), and HL (hypotenuse-leg for right triangles).",
    },
    {
      name: "Is the triangle calculator accurate?",
      acceptedAnswer: "The calculator uses standard trigonometric formulas and provides results accurate to multiple decimal places for educational and general use.",
    },
    {
      name: "Is AngleFinder free to use?",
      acceptedAnswer: "Yes, all AngleFinder tools are completely free to use. No signup or registration is required.",
    },
  ]);

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
            { name: "Triangle Angle Calculator", url: pageUrl },
          ]),
          generateSoftwareApplicationSchema({
            name: "Triangle Angle Calculator",
            description: pageDesc,
            url: pageUrl,
            applicationCategory: "EducationApplication",
          }),
          faqSchema,
        ]}
      />
      <CalculatorTool />
    </>
  );
}
