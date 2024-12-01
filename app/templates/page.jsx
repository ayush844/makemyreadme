import TemplatePreview from "@/components/TemplatePreview";
import Link from "next/link";
import React from "react";

const Template = () => {
  const articles = [
    {
      previewName: "Basic Template",
      templatePath: "basic",
      imgSrc:
        "https://images.unsplash.com/photo-1611079829957-1496f6270313?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      previewName: "Open Source Template",
      templatePath: "os",
      imgSrc:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      previewName: "Documentation Template",
      templatePath: "doc",
      imgSrc:
        "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      previewName: "Business Template",
      templatePath: "business",
      imgSrc:
        "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <TemplatePreview
            key={index}
            imgSrc={article.imgSrc}
            previewName={article.previewName}
            templatePath={article.templatePath}
          />
        ))}
      </div>
      <Link href={{ pathname: "/editor", query: { template: "default" } }}>
        <button className="absolute left-[30%] -bottom-5 md:left-[70%] md:bottom-1 md:right-0 flex items-center justify-center h-11 px-4 rounded-lg bg-[#9333EA] hover:bg-purple-600 transition duration-300 transform hover:scale-105 active:scale-95 gap-2">
          <span className="text-sm md:text-lg font-semibold text-white">
            Start from Scratch
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Template;
