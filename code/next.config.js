/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 添加 standalone 输出配置，用于阿里云函数计算
  images: {
    domains: ['localhost', 'your-backend-domain.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  trailingSlash: true
}

module.exports = nextConfig
