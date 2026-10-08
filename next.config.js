/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages repository path
  basePath: '/property',

  // Generate /properties/ instead of /properties
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;