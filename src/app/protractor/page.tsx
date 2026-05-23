import ProtractorTool from "@/components/tools/ProtractorTool";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata = {
  title: "Online Protractor | AngleFinder",
  description: "Free 360° online protractor. Measure any angle from 0° to 360°. Drag to rotate, copy results instantly.",
  alternates: { canonical: "/protractor" },
  openGraph: {
    title: "Online Protractor | AngleFinder",
    description: "Free 360° online protractor. Measure any angle from 0° to 360°.",
    url: "https://anglefinder.co/protractor",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Protractor | AngleFinder",
    description: "Free 360° online protractor. Measure any angle from 0° to 360°.",
    images: ["/og-image.png"],
  },
};

export default function ProtractorPage() {
  const pageUrl = "https://anglefinder.co/protractor";
  const pageTitle = "Online Protractor | AngleFinder";
  const pageDesc = "Free 360° online protractor. Measure any angle from 0° to 360°. Drag to rotate, copy results instantly.";

  const faqSchema = generateFAQPageSchema([
    {
      name: "How accurate is the online protractor?",
      acceptedAnswer: "The AngleFinder protractor provides ±0.1° accuracy for educational purposes. For professional measurements, use certified physical instruments.",
    },
    {
      name: "Can I use the protractor on mobile devices?",
      acceptedAnswer: "Yes, AngleFinder works on all devices including smartphones, tablets, and desktop computers. The interface is fully responsive and supports touch input.",
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
            { name: "Online Protractor", url: pageUrl },
          ]),
          generateSoftwareApplicationSchema({
            name: "Online Protractor",
            description: pageDesc,
            url: pageUrl,
            applicationCategory: "EducationApplication",
          }),
          faqSchema,
        ]}
      />
      <ProtractorTool />
    </>
  );
}
