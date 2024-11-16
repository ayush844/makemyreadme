import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

export default function Editor({ markdown, setMarkdown, ref, handleScroll }) {
  const [url, setUrl] = React.useState([]);
  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 3 MB. Please upload a smaller image.");
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;

      try {
        const response = await fetch("/api/upload-Image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: base64data }),
        });

        const data = await response.json();
        if (data.url) {
          setUrl((prevUrl) => [...prevUrl, data.url]);
          setMarkdown(
            markdown + "\n\n" + "![Uploaded Image](" + data.url + ")"
          );
        }
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    };
  };

  const handleDelete = async (event) => {
    try {
      const response = await fetch("/api/delete-Image", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ urls: url }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        const error = await response.json();
        console.error("Delete error:", error.error);
      }
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  return (
    <div className="col-span-6 h-[90vh] flex flex-col max-w-full p-4 bg-[#0f172a] text-white border border-gray-700 rounded-lg shadow-lg mx-2">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center h-11 px-4">
          <span className="text-2xl font-semibold">Editor</span>
        </div>
        {/* <button className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95 gap-2">
					<FaPlay className="text-white" />
					<span className="text-md font-semibold">Run</span>
				</button> */}
        <button
          className="flex items-center justify-center h-11 w-11 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-105 active:scale-95"
          aria-label="copy"
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
        <button className="flex items-center justify-center h-11 px-4 rounded-full bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95">
          <span className="text-md font-semibold">Format</span>
        </button>
        <button
          className="flex items-center justify-center h-11 px-4 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            type="file"
            id="file-input"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
          <IoMdAddCircle className="text-3xl text-white" />
        </button>
        <button
          className="flex items-center justify-center h-11 px-4 rounded-full bg-red-600 hover:bg-red-500 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={() => handleDelete(url)}
        >
          Delete Image
        </button>
      </div>
    </div>
  );
}
