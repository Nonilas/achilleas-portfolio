/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // SWC minify is now default in Next.js 15, no need to specify it
}

module.exports = nextConfig