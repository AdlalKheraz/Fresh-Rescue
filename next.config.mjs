/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

}

// import withSerwistInit from "@serwist/next";

// const withSerwist = withSerwistInit({
//   swSrc: "app/sw.ts",
//   swDest: "public/sw.js",
//   disable: process.env.NODE_ENV === "development",
// });

export default nextConfig; // withSerwist(nextConfig);
