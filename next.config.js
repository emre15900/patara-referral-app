/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    esmExternals: true,
  }
};

module.exports = nextConfig;