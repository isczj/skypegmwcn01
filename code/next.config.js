/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-backend-domain.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
