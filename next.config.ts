import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: `${process.env.MINTLIFY_DOCS_URL}/docs`,
      },
      {
        source: '/docs/:match*',
        destination: `${process.env.MINTLIFY_DOCS_URL}/docs/:match*`,
      },
    ];
  },
  output: 'standalone',

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
