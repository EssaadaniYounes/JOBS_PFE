/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    // Required:
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
