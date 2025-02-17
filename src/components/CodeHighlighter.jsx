import React, {useEffect} from "react";
import Prism from "prismjs";
import "../style/synthwave.css";
import "prismjs/components/prism-markup";
import copyToClipboard from "../utils/copier";
const CodeHighlighter = ({code, language = "javascript"}) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight code on mount
  }, []);

  return (
    <div className="p- border-t-1 border-b-1 border-l-1 border-r-1 br-1 border-color-jira my-3">
      <div
        className="d-flex flex-row justify-content-between bg-dark"
        style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}
      >
        <i className="wh-2 gt-4 m-3">{language === "markup" ? "HTML" : language}</i>
        <span className="px-1 m-3 btn btn-outline-primary py-0 gt-5 br-1 cursor-ptr" onClick={()=>{
            copyToClipboard(code, "code copied!!!", "failed to copy.")
        }}>
          copy
        </span>
      </div>
      <div
        className="overflow-hidden px-2"
        style={{backgroundColor: "#282A36"}}
      >
        <pre className="w-100  overflow-x-scroll sb-i m-0 br-0 gt-4">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeHighlighter;
