import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MdCode = (props: any) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  if (match) {
    return (
      <div className="mdcode">
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          language={match[1]}
          style={oneDark}
        >
          {children ? String(children).replace(/\n$/, "") : ""}
        </SyntaxHighlighter>
      </div>
    );
  } else {
    return (
      <code {...rest} className={className + " mdcode"}>
        {children}
      </code>
    );
  }
};

export default MdCode;
