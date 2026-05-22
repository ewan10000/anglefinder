import ImageMeasureTool from "@/components/tools/ImageMeasureTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: "Image Angle Measurement | AngleFinder",
  description: "Upload a photo and measure angles by clicking three points. All image processing happens locally in your browser.",
  alternates: { canonical: "/image" },
};

export default function ImagePage() {
  const pageUrl = "https://anglefinder.co/image";
  const pageTitle = "Image Angle Measurement | AngleFinder";
  const pageDesc = "Upload a photo and measure angles by clicking three points. All image processing happens locally in your browser.";

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
          { name: "Image Angle Measurement", url: pageUrl },
        ])}
      />
      <JsonLd
        data={generateSoftwareApplicationSchema({
          name: "Image Angle Measurement Tool",
          description: pageDesc,
          url: pageUrl,
          applicationCategory: "EducationApplication",
        })}
      />
      <ImageMeasureTool />
    </>
  );
}
