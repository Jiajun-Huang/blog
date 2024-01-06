import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
// plugin
import { CompileOptions } from "@mdx-js/mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import createImageComponent from "../components/image/MdImage";

export interface SerializeOptions {
  /**
   * Pass-through variables for use in the MDX content
   */
  scope?: Record<string, unknown>;
  /**
   * These options are passed to the MDX compiler.
   * See [the MDX docs.](https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js).
   */
  mdxOptions?: Omit<CompileOptions, "outputFormat" | "providerImportSource">;
  /**
   * Indicate whether or not frontmatter should be parsed out of the MDX. Defaults to false
   */
  parseFrontmatter?: boolean;
}

const remarkPlugins = [remarkMath, remarkGfm];
const rehypePlugins = [rehypeSlug, rehypeMathjax, rehypeHighlight, rehypeRaw];

const serializeOptions = {
  mdxOptions: {
    remarkPlugins,
    rehypePlugins,
    format: "mdx",
  },
};

export const serializeMdx = async (mdx: string) => {
  const result = await serialize(mdx, serializeOptions);
  return result;
};

export default function MyMDXRemote({ source, uri }) {
  return (
    <MDXRemote
      source={source}
      components={{
        // bind uri argument to MdmImage but keep the other props
        // img: createImageComponent(uri),
      }}
    />
  );
}
