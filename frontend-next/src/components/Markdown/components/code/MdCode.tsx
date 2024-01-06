import { Component, DetailedHTMLProps, HTMLAttributes } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

// plugin
// interface MdCodeProps
//   extends React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLElement>,
//     HTMLElement
//   > {
//   className?: string;
//   inline?: boolean;
// }

function MdCode({
  ...props
}:
  | Component<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>
  | undefined) {
  const match = /language-(\w+)/.exec(className || "");
  const classname = props.props.className;
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
  ) : (
    <code className={classname} {...props} />
  );
}

export default MdCode;
