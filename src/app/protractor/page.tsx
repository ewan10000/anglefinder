import ProtractorTool from "@/components/tools/ProtractorTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: "Online Protractor | AngleFinder",
  description: "Free 360° online protractor. Measure any angle from 0° to 360°. Drag to rotate, copy results instantly.",
  alternates: { canonical: "/protractor" },
};

export default function ProtractorPage() {
  const pageUrl = "https://anglefinder.co/protractor";
  const pageTitle = "Online Protractor | AngleFinder";
  const pageDesc = "Free 360° online protractor. Measure any angle from 0° to 360°. Drag to rotate, copy results instantly.";

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
            { name: "Online Protractor", url: pageUrl },
          ]),
          generateSoftwareApplicationSchema({
            name: "Online Protractor",
            description: pageDesc,
            url: pageUrl,
            applicationCategory: "EducationApplication",
          }),
        ]}
      />
      <ProtractorTool />
    </>
  );
}
