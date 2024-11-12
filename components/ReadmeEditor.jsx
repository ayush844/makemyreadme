import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

export default function Editor({ markdown, setMarkdown }) {
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
					onChange={(e) => setMarkdown(e.target.value)}
				></textarea>
			</div>

			<div className="flex justify-between items-center mt-4 space-x-3">
				<button className="flex items-center justify-center h-11 px-4 rounded-full bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95">
					<span className="text-md font-semibold">Format</span>
				</button>
				<button className="flex items-center justify-center h-11 px-4 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-105 active:scale-95">
					<IoMdAddCircle className="text-3xl text-white" />
				</button>
			</div>
		</div>
	);
}
