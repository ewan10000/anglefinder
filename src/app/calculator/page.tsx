import CalculatorTool from "@/components/tools/CalculatorTool";

export const metadata = {
  title: "Triangle Angle Calculator | AngleFinder",
  description: "Solve any triangle with SSS, SAS, ASA, AAS, or HL. Calculate angles, sides, area, and perimeter with step-by-step logic.",
};

export default function CalculatorPage() {
  return <CalculatorTool />;
}
