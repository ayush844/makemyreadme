import React from "react";
import { marked } from "marked";
import "github-markdown-css";

const Markdown_Tips = () => {
	const Markdown = (markdown) => {
		marked.setOptions({
			breaks: true,
			gfm: true,
		});

		const html = marked(markdown || "");
		return (
			<div
				className="markdown-body p-8 border border-gray-700 rounded-xl shadow-lg flex-grow overflow-auto text-gray-900"
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
		);
	};
	return (
		<div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans mt-16">
			<div className="max-w-5xl mx-auto p-12 text-xl font-medium">
				<header className="mb-16">
					<h1 className="text-6xl font-extrabold mb-8 text-white leading-tight">
						Markdown Tips for a Polished README
					</h1>
					<p className="text-xl leading-relaxed text-gray-300">
						When someone visits your GitHub project, the README file is often
						the first thing they see. A polished README can mean the difference
						between gaining users and contributors or being overlooked. In this
						guide, we'll explore how to use Markdown effectively to create a
						clean, professional, and user-friendly README that leaves a lasting
						impression.
					</p>
				</header>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Introduction
					</h2>
					<h3 className="text-3xl font-semibold text-white">
						What is Markdown?
					</h3>
					<p className="text-xl leading-relaxed text-gray-300">
						Markdown is a lightweight markup language that uses plain text
						formatting syntax to create structured documents. Its simplicity,
						readability, and ease of use make it the default choice for GitHub
						README files.
					</p>

					<h3 className="text-3xl font-semibold text-white mt-8">
						Why is a polished README important?
					</h3>
					<p className="text-xl leading-relaxed text-gray-300">
						Your README serves as your project's front door. A clear, engaging,
						and visually appealing README:
					</p>
					<ul className="list-disc list-inside mt-6 text-xl text-gray-300">
						<li>
							Attracts users: Shows the value of your project at a glance.
						</li>
						<li>
							Engages contributors: Provides the necessary context and
							instructions for collaboration.
						</li>
						<li>
							Improves accessibility: A well-structured README makes it easier
							for everyone to understand your work.
						</li>
					</ul>
					<p className="mt-6 text-xl leading-relaxed text-gray-300">
						Did you know? Studies show that repositories with comprehensive
						READMEs are more likely to gain stars and contributors!
					</p>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Core Markdown Elements
					</h2>
					<div className="space-y-14">
						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								1. Headings: Organizing Your Content
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Headings help structure your README and make it easier to
								navigate. Use them to divide your README into logical sections,
								such as Introduction, Features, Installation, and Usage.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`# MyProject\n\n## Features\n- Easy to use\n- Cross-platform support\n\n## Installation\n1. Clone the repository.\n2. Run the setup script.`
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Tip: Always use # for the main title, and don't skip heading
								levels for consistent structure.
							</p>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								2. Lists: Presenting Information Clearly
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Lists are a great way to organize information into digestible
								chunks.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`### Benefits\n- Lightweight\n- Open-source\n- Easy to learn\n\n### How to Get Started\n1. Fork the repository.\n2. Clone it to your local machine.\n3. Install dependencies.\n4. Start the application.`
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Tip: Mix ordered and unordered lists for complex instructions.
							</p>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								3. Links and Images: Adding Visual Appeal
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Markdown makes it easy to include hyperlinks and images to
								enhance usability and context.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`[Visit GitHub](https:github.com)\n\n![Sample Image](https:via.placeholder.com/300)`
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Pro Tip: Use relative paths to link to files within your
								repository.
							</p>
						</div>
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Advanced Features
					</h2>
					<div className="space-y-14">
						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								1. Tables: Displaying Data Effectively
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Tables are great for organizing structured information like
								feature comparisons or data summaries.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`| Feature         | Description              |\n|-----------------|--------------------------|\n| Cross-platform  | Works on Windows, MacOS, Linux |\n| Open-source     | Free to use and contribute |`
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Tip: Use Table Generators to create complex tables easily.
							</p>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								2. Code Blocks and Syntax Highlighting
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Code examples are crucial for technical documentation.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									"```python\n" +
										"def greet():\n" +
										'    print("Hello, World!")\n' +
										"```"
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Pro Tip: Highlight specific lines in longer code blocks for
								emphasis.
							</p>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								3. Badges: Adding Visual Indicators
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Badges are an excellent way to display key project information,
								like build status, license, or downloads.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`![Build Status](https:img.shields.io/badge/build-passing-brightgreen)\n![License](https:img.shields.io/badge/license-MIT-blue)`
								)}
							</div>
							<p className="mt-6 text-xl text-gray-300">
								Tip: Include relevant badges for your project, such as:
							</p>
							<ul className="list-disc list-inside mt-6 text-xl text-gray-300">
								<li>Build status (e.g., CI/CD)</li>
								<li>Coverage reports</li>
								<li>Version information</li>
								<li>Social proof (e.g., stars or forks)</li>
							</ul>
						</div>
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section>
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Conclusion
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						A polished README is more than documentation—it's your project's
						pitch. By mastering Markdown, you can create a README that's
						informative, visually appealing, and a joy to read.
					</p>

					<div className="text-xl text-gray-300 mt-6">
						Quick Action Tips:
						<ul className="list-disc list-inside mt-6">
							<li>
								Structure your README with clear headings and logical sections.
							</li>
							<li>
								Use visual elements like badges and images to engage readers.
							</li>
							<li>Preview your README before committing changes.</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Markdown_Tips;
