import TemplatePreview from "@/components/TemplatePreview";
import Link from "next/link";
import React from "react";

const Template = () => {
	const articles = [
		{
			imgSrc:
				"https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div className="container mx-auto py-10 relative min-h-[90vh]">
			{/* <div className="text-white text-center text-2xl md:text-left">
					{" "}
					Templates
				</div> */}
			<div className="md:grid md:grid-cols-12 gap-16">
				{articles.map((article, index) => (
					<TemplatePreview key={index} imgSrc={article.imgSrc} />
				))}
			</div>
			<button className="absolute left-[30%] -bottom-5 md:left-[70%] md:bottom-1 md:right-0 flex items-center justify-center h-11 px-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95 gap-2">
				<Link href="/editor">
					<span className="text-sm md:text-lg font-semibold text-white">
						Start from Scratch
					</span>
				</Link>
			</button>
		</div>
	);
};

export default Template;
