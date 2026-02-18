import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the basePath below if your repo is NOT named 'your-username.github.io'
  // basePath: '/your-repo-name',
};

export default nextConfig;
