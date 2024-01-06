/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'cdn.sanity.io',
        port:"",
      },
    ],
  },
}