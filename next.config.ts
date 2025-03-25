/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Tell Next.js to properly handle CSS in static export
  experimental: {
    // Enable if needed
    // appDir: true,
  },
}

module.exports = nextConfig