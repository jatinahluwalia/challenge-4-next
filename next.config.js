/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
