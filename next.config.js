/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  // Remove the useCdn option as it is deprecated and can cause issues with next/image
  // useCdn: false,
}
