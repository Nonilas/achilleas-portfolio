// 1. Update next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Ensure CSS is properly included in output
  optimizeFonts: false,
  compiler: {
    // Turn off styled-components
    styledComponents: false,
  },
  // Important! Force static css generation
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig