import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  // GitHub Pages 静态导出配置
  output: 'export',
  // 禁用图片优化，因为静态导出不支持
  images: {
    unoptimized: true,
  },
  // 确保静态资源正确加载
  trailingSlash: true,
};

export default nextConfig;
