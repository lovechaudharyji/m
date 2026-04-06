import type { MetadataRoute } from "next";

// Step 2: Next.js App Router generates /sitemap.xml from this file automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mountaura.in";

  const routes = ["/", "/adventure", "/comfort", "/itinerary", "/contact", "/terms", "/conditions"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
