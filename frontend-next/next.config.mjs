/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  //   i18n,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src/styles")],
  //   prependData: `@import "variables.scss";`,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};
