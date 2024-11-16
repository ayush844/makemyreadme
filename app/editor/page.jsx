"use client";
import React, { useState } from "react";
import ComponentsModal from "@/components/ComponentsModal";
import ReadmeEditor from "@/components/ReadmeEditor";
import Image from "next/image";
import MarkdownPreviewer from "@/components/MarkdownPreviewer";

const Editor = () => {
  const [markdown, setMarkdown] = useState(`
# Welcome to the Markdown Previewer!

## Features

- **Real-time Preview:** See your Markdown rendered instantly.
- **Syntax Highlighting:** Perfect for code snippets.
- **Export Options:** Download your Markdown as a \`.md\` or \`.html\` file.

## Usage

Just type Markdown text in the editor to see it rendered here!

### Examples

#### Headings

\`\`\`markdown
# This is a Heading 1
## This is a Heading 2
### This is a Heading 3
\`\`\`

#### Lists

1. First item
2. Second item
3. Third item

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

#### Links

[Visit GitHub](https://github.com)

#### Images

![Sample Image](https://via.placeholder.com/150)

#### Code

\`\`\`javascript
// JavaScript example
function greet() {
  console.log("Hello, World!");
}
\`\`\`

#### Blockquotes

> "Markdown is amazing!" - Some Developer

#### Tables

| Feature       | Description                       |
| ------------- | --------------------------------- |
| Real-time     | Instant feedback                  |
| Easy to read  | Markdown is simple and readable   |
| Customizable  | Supports various custom elements  |

Happy writing in Markdown!
  `);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((modal) => !modal);
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div className="min-h-[90vh] w-screen lg:flex items-center justify-center relative py-6 hidden">
      <button
        onClick={toggleModal}
        className="bg-primary border-white border-2 py-3 px-3  transition-all w-fit flex items-center justify-center gap-4  hover:scale-105 left-5 z-30 rounded-full absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 "
      >
        <Image src={"/images/cubes.png"} width={40} height={40} alt="blocks" />
        {/* <span className='text-black font-bold text-xl'>{modal ? "Hide Components":"Add Components"}</span> */}
      </button>

      {modal && (
        <>
          <div
            onClick={toggleModal}
            className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"
          ></div>
          <ComponentsModal
            appendMarkdown={(newMarkdown) =>
              setMarkdown((prev) => prev + newMarkdown)
            }
          />
        </>
      )}
      <div className="grid grid-cols-12 w-screen container mx-auto">
        <ReadmeEditor setMarkdown={setMarkdown} markdown={markdown} />
        <MarkdownPreviewer markdown={markdown} />
      </div>
    </div>
  );
};

export default Editor;
