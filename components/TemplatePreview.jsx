import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import { LuFilePlus2 } from "react-icons/lu";

const TemplatePreview = ({ imgSrc }) => {
	return (
		<div className="md:col-span-4 p-8 md:p-4">
			<Link href={"/editor"}>
				<div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 group cursor-pointer">
					{/* Image with smooth hover effect */}
					<img
						src={imgSrc}
						alt="Template preview"
						className="w-full h-48 md:h-72 object-cover rounded-3xl transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-2"
					/>

					{/* Dark overlay with icon that appears on hover */}
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						<span className="text-white text-4xl md:text-5xl font-bold group-hover:scale-110  transition-transform duration-500 ease-in-out">
							<LuFilePlus2 className="text-white text-4xl md:text-5xl transform scale-105 transition-transform duration-200 ease-in-out" />
						</span>
					</div>

					{/* Title or additional description */}
					<div className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-semibold opacity-100 transition-opacity duration-300">
						<span className="bg-black bg-opacity-50 px-3 py-1 rounded-full">
							<span className="text-sm md:text-base">Template Name</span>
						</span>
					</div>

					{/* Tags with icons */}
					<div className="absolute top-4 left-4 flex items-center space-x-2 opacity-100 transition-opacity duration-300">
						<span className="flex items-center bg-blue-500 text-white text-xs md:text-sm px-3 py-1 rounded-full">
							<FaTag className="mr-1 text-sm md:text-base" />
							New
						</span>
						<span className="flex items-center bg-green-500 text-white text-xs md:text-sm px-3 py-1 rounded-full">
							<FaTag className="mr-1 text-sm md:text-base" />
							Popular
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TemplatePreview;
