import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as CodeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import style from "./MdCode.module.scss";

const MdCode = (props: any) => {
  const { node, children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  if (match) {
    return (
      <div className={style.mdcode}>
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          language={match[1]}
          style={CodeStyle}
        >
          {String(children).replace(/\n$/, "")}
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
