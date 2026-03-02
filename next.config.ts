import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://nextjs-vercel-docs.mintlify.dev/docs',
      },
      {
        source: '/docs/:match*',
        destination: 'https://nextjs-vercel-docs.mintlify.dev/docs/:match*',
      },
    ];
  },
  output: 'standalone',

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
