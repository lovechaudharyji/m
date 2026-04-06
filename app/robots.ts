import type { MetadataRoute } from "next";

// Step 3: Next.js App Router generates /robots.txt from this file automatically.
export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://mountaura.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
