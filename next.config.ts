import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.airtableusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "dl.airtable.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
