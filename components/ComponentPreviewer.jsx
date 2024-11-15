// import React from "react";
// import { marked } from "marked";
// import DOMPurify from "dompurify";
// import "github-markdown-css";

// const ComponentPreviewer = ({ markdown }) => {
//   marked.setOptions({
//     breaks: true,
//     gfm: true,
//   });

//   const html = marked(markdown || "");
//   const cleanHtml = DOMPurify.sanitize(html);

//   return (
//     <div className="col-span-2 bg-slate-950 h-full w-full rounded-md border border-gray-200 flex flex-col gap-10 items-center justify-center overflow-y-auto overflow-x-hidden">
//       <div
//         className="markdown-body p-4 border border-gray-700 rounded-lg shadow-inner flex-grow overflow-auto bg-gray-800 text-white"
//         dangerouslySetInnerHTML={{ __html: cleanHtml }}
//       ></div>
//     </div>
//   );
// };

// export default ComponentPreviewer;

import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "github-markdown-css";

const ComponentPreviewer = ({ markdown }) => {
  // Configure marked for consistent Markdown rendering
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const html = marked(markdown || "");
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div className="col-span-2 bg-slate-950 h-full w-full rounded-md border border-gray-200 flex flex-col gap-10 items-center justify-center overflow-y-auto overflow-x-hidden">
      <div
        className="markdown-body p-4 border border-gray-700 rounded-lg shadow-inner flex-grow overflow-auto bg-gray-800 text-white w-full break-words"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      ></div>
    </div>
  );
};

export default ComponentPreviewer;
