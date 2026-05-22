import CalculatorTool from "@/components/tools/CalculatorTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: "Triangle Angle Calculator | AngleFinder",
  description: "Solve any triangle with SSS, SAS, ASA, AAS, or HL. Calculate angles, sides, area, and perimeter with step-by-step logic.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  const pageUrl = "https://anglefinder.co/calculator";
  const pageTitle = "Triangle Angle Calculator | AngleFinder";
  const pageDesc = "Solve any triangle with SSS, SAS, ASA, AAS, or HL. Calculate angles, sides, area, and perimeter with step-by-step logic.";

  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDesc,
          url: pageUrl,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://anglefinder.co" },
          { name: "Triangle Angle Calculator", url: pageUrl },
        ])}
      />
      <JsonLd
        data={generateSoftwareApplicationSchema({
          name: "Triangle Angle Calculator",
          description: pageDesc,
          url: pageUrl,
          applicationCategory: "EducationApplication",
        })}
      />
      <CalculatorTool />
    </>
  );
}
