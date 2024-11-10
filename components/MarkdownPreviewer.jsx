"use client";
import React, { useState } from "react";

const MarkdownPreviewer = () => {
	const [markdown, setMarkdown] = useState("Markdown previewer...");

	const renderMarkdown = (text) => {
		return text.split("\n").map((str, index) => (
			<span key={index}>
				{str}
				<br />
			</span>
		));
	};

	return (
		<div
			className={`col-span-6 h-[90vh] flex flex-col max-w-full p-4 rounded-lg shadow-lg bg-[#0f172a] border border-gray-700 mx-2`}
		>
			<div className="p-4 border border-gray-700 rounded-lg shadow-inner flex-grow overflow-auto bg-gray-800 text-white">
				{renderMarkdown(markdown)}
			</div>

			<button className="w-full h-12 mt-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 text-xl font-semibold text-white">
				Export
			</button>
		</div>
	);
};

export default MarkdownPreviewer;
