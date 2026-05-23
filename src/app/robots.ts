import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: "https://anglefinder.co",
    sitemap: "https://anglefinder.co/sitemap.xml\nContent-Signal: search=yes, ai-input=yes",
  };
}
