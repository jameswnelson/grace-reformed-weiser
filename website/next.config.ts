import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/grace-reformed-weiser',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
