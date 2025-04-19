import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ...other config options

  eslint: {
    // Warning: This allows production builds to succeed even if
    // there are ESLint errors in your project.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
