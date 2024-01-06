/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
  // Remove the experimental option as it is unstable and may cause issues with next/image
  // experimental: {
  //   appDir: true,
  // },
  images: {
    // Remove the remotePatterns property as it restricts the sources of images that can be optimized by Next.js
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.sanity.io',
    //     port: '',
    //   },
    // ],
    // Use the domains property instead to specify which domains are allowed to serve images for your Next.js application
    domains: ["cdn.sanity.io"],
  },
};
