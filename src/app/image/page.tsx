import ImageMeasureTool from "@/components/tools/ImageMeasureTool";

export const metadata = {
  title: "Image Angle Measurement | AngleFinder",
  description: "Upload a photo and measure angles by clicking three points. All image processing happens locally in your browser.",
};

export default function ImagePage() {
  return <ImageMeasureTool />;
}
