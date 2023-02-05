import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProps {
  value: string;
}

function Code({ value }: CodeProps) {
  return (
    <SyntaxHighlighter language={"javascript"} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
}

export default Code;
