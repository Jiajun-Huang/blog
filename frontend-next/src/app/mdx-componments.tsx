import ImageUrl from "@/util/imageurl";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

// plugin
interface MdCodeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

function MdmImage(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const alt = props.alt || "image";
  const src = ImageUrl(props.src);
  console.log("src", src);
  return (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
      alt={alt}
      src={src}
    />
  );
}

function MdCode({ className, inline, ...props }: MdCodeProps) {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

console.log("asdfasdf");
export default function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling
    img: MdmImage,
    code: MdCode,
    ...components,
  };
}
