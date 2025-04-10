/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Ensure CSS is properly included in output
  compiler: {
    // Turn off styled-components
    styledComponents: false,
  },
  // Important! Force static css generation
  experimental: {
    forceSwcTransforms: true,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig
