import rehypeSlug from "rehype-slug";
// plugin
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import codeTitle from "remark-code-title";
import collapse from "remark-collapse";  
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import MdCode from "./components/code/MdCode";
import "./markdown.style.scss";

interface Props {
  children: string;
  urlTransform?: (url: string) => string;
}

const MarkDown = ({ children, urlTransform, ...otherProps }: Props) => {
  if (!children) {
    return <div className="Markdown"></div>;
  }

  return (
    <div className="Markdown" {...otherProps}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm, collapse, codeTitle]}
        rehypePlugins={[rehypeKatex, rehypeSlug]}
        urlTransform={urlTransform}
        components={{
          code: MdCode as any,
          // image: MdImage as any,
          // img: MdImage as any,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
//https://github.com/kevinzunigacuellar/remark-code-title
//https://github.com/zestedesavoir/zmarkdown/tree/HEAD/packages/remark-iframes#readme
//https://github.com/remarkjs/react-markdown/issues/622
