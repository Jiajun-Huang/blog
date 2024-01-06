import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
// plugin
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
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

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath, [remarkGfm, { singleTilde: false }]],
    rehypePlugins: [rehypeMathjax, rehypeRaw, rehypeSlug],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
