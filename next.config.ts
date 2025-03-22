/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vip.townnews.com", // Allows all subdomains
      },
      {
        protocol: "https",
        hostname: "image-cdn.hypb.st",
      },
      {
        protocol: "https",
        hostname: "example.com", // Add this if needed for other images in news.json
      },
    ],
  },
};

module.exports = nextConfig;
