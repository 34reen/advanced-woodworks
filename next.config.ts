import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/advanced-woodworks-api/uploads/**",
      },
    ],
  },
};

export default nextConfig;
