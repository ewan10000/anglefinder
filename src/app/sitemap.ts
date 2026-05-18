import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anglefinder.co";
  const routes = [
    "",
    "/protractor",
    "/calculator",
    "/image",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
