import { handleDelete } from "@/utils/handleDelete";
import { handleUpload } from "@/utils/handleUpload";
import React, { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { GoHeading, GoBold, GoItalic, GoListUnordered } from "react-icons/go";
import { PiBracketsCurly } from "react-icons/pi";
import { BsQuote } from "react-icons/bs";
export default function Editor({
  markdown,
  setMarkdown,
  ref,
  handleScroll,
  toggleThankYou,
  url,
  setUrl,
  template,
}) {
  const [temp, setTemp] = useState("Default Template");
  useEffect(() => {
    if (template == "basic") {
      setTemp("Basic Template");
    } else if (template == "os") {
      setTemp("Open Source Template");
    } else if (template == "doc") {
      setTemp("Documentation Template");
    } else if (template == "business") {
      setTemp("Business Template");
    }
  }, [template, temp]);
  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [markdown]);
  return (
    <div className="col-span-6 h-[90vh] flex flex-col max-w-full p-4 bg-[#0f172a] text-white border border-gray-700 rounded-lg shadow-lg mx-2">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center h-11 px-4">
          <span className="text-2xl font-semibold">{`${temp}`}</span>
        </div>
        {/* <button className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95 gap-2">
					<FaPlay className="text-white" />
					<span className="text-md font-semibold">Run</span>
				</button> */}
        <button
          className="flex items-center justify-center h-11 w-11 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-105 active:scale-95"
          aria-label="copy"
          onClick={() => {
            navigator.clipboard
              .writeText(markdown)
              .then(() => {
                if (url.length > 0) handleDelete(url);
              })
              .catch((err) => {
                console.error("Failed to copy markdown:", err);
                toast.error("Failed to copy. Please try again.");
              });
            toggleThankYou();
          }}
        >
          <FaCopy className="text-xl text-white" />
        </button>
      </div>

      <div className="flex-grow flex flex-col border border-gray-700 rounded-lg overflow-hidden bg-gray-900 p-4 shadow-inner">
        <textarea
          className="w-full h-full p-4 bg-transparent text-white text-lg outline-none resize-none rounded-md placeholder-gray-400"
          placeholder="Write your README here..."
          value={markdown}
          ref={ref}
          onScroll={handleScroll}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>

      <div className="flex justify-between items-center mt-4 space-x-3">
        {/* <button
			
				{/* <button className="flex items-center justify-center h-11 px-4 rounded-full bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95">
          <span className="text-md font-semibold">Format</span>
        </button> */}
        <div className="flex space-x-1">
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() =>
              setMarkdown(
                markdown +
                  "\n\n" +
                  "# Heading1" +
                  "\n" +
                  "## Heading2" +
                  "\n" +
                  "### Heading3"
              )
            }
          >
            <GoHeading className="text-2xl text-white" />
          </button>
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() => setMarkdown(markdown + "\n\n" + "**bold**")}
          >
            <GoBold className="text-2xl text-white" />
          </button>
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() => setMarkdown(markdown + "\n\n" + "*italic*")}
          >
            <GoItalic className="text-2xl text-white" />
          </button>
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() => setMarkdown(markdown + "\n\n" + "> quote")}
          >
            <BsQuote className="text-2xl text-white" />
          </button>
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() =>
              setMarkdown(
                markdown + "\n\n" + "- list1" + "\n- list2" + "\n- list3"
              )
            }
          >
            <GoListUnordered className="text-2xl text-white" />
          </button>
          <button
            className="flex items-center justify-center h-11 px-4 cursor-pointer"
            onClick={() =>
              setMarkdown(
                markdown + "\n\n" + "```bash" + "\n" + "code" + "\n" + "```"
              )
            }
          >
            <PiBracketsCurly className="text-2xl text-white" />
          </button>
        </div>

        <button
          className="flex items-center justify-center h-11 px-4 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            type="file"
            id="file-input"
            accept="image/*"
            // onChange={(event) => {
            // 	if (handleUpload(event, setUrl, setMarkdown, markdown)) {
            // 		toast.info(
            // 			"Image uploaded successfully! and will be displayed soon. Remember it will be removed from our server after 3 hours, or if you click the 'Copy' or 'Export' button. (As it is just for your preview.)",
            // 			{
            // 				autoClose: false,
            // 			}
            // 		);
            // 	} else {
            // 		toast.error("Image upload failed. Please try again.");
            // 	}
            // }}
            onChange={async (event) => {
              const isSuccess = await handleUpload(
                event,
                setUrl,
                setMarkdown,
                markdown
              );
              if (isSuccess) {
                // toast.info(
                //   "Image uploaded successfully! and will be displayed soon. Remember it will be removed from our server after 3 hours, or if you click the 'Copy' or 'Export' button. (As it is just for your preview.)",
                //   { autoClose: false }
                // );
              } else {
                toast.error(
                  "Image upload failed. Please try again or check the file type."
                );
              }
            }}
            style={{ display: "none" }}
          />
          {/* <IoMdAddCircle className="text-3xl text-white" /> */}
          <RiImageAddLine className="text-3xl text-white" />
        </button>
        {/* <button
          className="flex items-center justify-center h-11 px-4 rounded-full bg-red-600 hover:bg-red-500 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => handleDelete(url)}
        >
          Delete Image
        </button> */}
      </div>
    </div>
  );
}
