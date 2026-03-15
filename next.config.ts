/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  compiler: {
    styledComponents: false,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
