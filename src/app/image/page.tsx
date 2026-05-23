import ImageMeasureTool from "@/components/tools/ImageMeasureTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata = {
  title: "Image Angle Measurement | AngleFinder",
  description: "Upload a photo and measure angles by clicking points. Free image angle tool for blueprints, diagrams, and photos.",
  alternates: { canonical: "/image" },
  openGraph: {
    title: "Image Angle Measurement | AngleFinder",
    description: "Upload a photo and measure angles by clicking points.",
    url: "https://anglefinder.co/image",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Angle Measurement | AngleFinder",
    description: "Upload a photo and measure angles by clicking points.",
    images: ["/og-image.png"],
  },
};

export default function ImagePage() {
  const pageUrl = "https://anglefinder.co/image";
  const pageTitle = "Image Angle Measurement | AngleFinder";
  const pageDesc = "Upload a photo and measure angles by clicking points. Free image angle tool for blueprints, diagrams, and photos.";

  const faqSchema = generateFAQPageSchema([
    {
      name: "Is my image data safe?",
      acceptedAnswer: "Yes. Images are processed entirely within your browser using the FileReader and Canvas APIs. Nothing is uploaded to our servers.",
    },
    {
      name: "What image formats are supported?",
      acceptedAnswer: "AngleFinder supports common image formats including PNG, JPEG, and WebP. The image is loaded into your browser for local processing only.",
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
            { name: "Image Angle Measurement", url: pageUrl },
          ]),
          generateSoftwareApplicationSchema({
            name: "Image Angle Measurement",
            description: pageDesc,
            url: pageUrl,
            applicationCategory: "EducationApplication",
          }),
          faqSchema,
        ]}
      />
      <ImageMeasureTool />
    </>
  );
}
