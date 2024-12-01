"use client";
import Crafting_README from "@/utils/Blogs/Crafting_README";
import Good_README from "@/utils/Blogs/Good_README";
import Markdown_Tips from "@/utils/Blogs/Markdown_Tips";
import React from "react";
import { useSearchParams } from "next/navigation";

const Blogs = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get("name");
	let componentToRender = null;

	if (name === "Crafting_README") {
		componentToRender = <Crafting_README />;
	} else if (name === "Good_README") {
		componentToRender = <Good_README />;
	} else if (name === "Markdown_Tips") {
		componentToRender = <Markdown_Tips />;
	}

	if (!componentToRender) {
		return null;
	}
	return <>{componentToRender}</>;
};

export default Blogs;
