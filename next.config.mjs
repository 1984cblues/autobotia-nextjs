import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  outDir: 'sourcecontent',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['geist'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);
