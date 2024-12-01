import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "github-markdown-css";

const MarkdownPreviewer = ({ markdown, ref, handleScroll, toggleThankYou }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const html = marked(markdown || "");
  const cleanHtml = DOMPurify.sanitize(html);

  const exportMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown-preview.md";
    link.click();
  };

  return (
    <div
      className={`col-span-6 max-h-[90vh] flex flex-col max-w-full p-4 rounded-lg shadow-lg bg-[#0f172a] border border-gray-700 mx-2`}
    >
      <div
        className="markdown-body p-4 border border-gray-700 rounded-lg shadow-inner flex-grow overflow-auto bg-gray-800 text-white"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
        ref={ref}
        onScroll={handleScroll}
      ></div>

      <button
        onClick={() => {
          exportMarkdown();
          toggleThankYou();
        }}
        className="w-full min-h-12 mt-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 text-xl font-semibold text-white"
      >
        Export
      </button>
    </div>
  );
};

export default MarkdownPreviewer;
