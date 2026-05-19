import ProtractorTool from "@/components/tools/ProtractorTool";

export const metadata = {
  title: "Online Protractor | AngleFinder",
  description: "Free 360° online protractor. Measure any angle from 0° to 360°. Drag to rotate, copy results instantly.",
  alternates: { canonical: "/protractor" },
};

export default function ProtractorPage() {
  return <ProtractorTool />;
}
