import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.SITE_REVIEW_EXPORT === "1" ? {
    output: "export",
    assetPrefix: process.env.NEXT_PUBLIC_PREVIEW_BASE_PATH ?? "",
  } : {}),
};

export default nextConfig;
