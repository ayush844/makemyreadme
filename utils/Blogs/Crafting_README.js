import React from "react";
import { marked } from "marked";
import "github-markdown-css";

const Crafting_README = () => {
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
						Crafting the Perfect README
					</h1>
					<p className="text-xl leading-relaxed text-gray-300">
						Your README is the face of your GitHub project. It's often the first
						thing users and contributors see, serving as both an introduction
						and a guide. A good README can make a huge difference in attracting
						contributors and making your project accessible.
					</p>
				</header>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Introduction: Why Your README Matters
					</h2>
					<p className="text-xl leading-relaxed text-gray-300">
						Your README is often the first impression users and contributors get
						of your project. A well-crafted README not only helps others
						understand the purpose and functionality of your project but also
						guides them through setting it up and contributing to it. Here's why
						it matters:
					</p>
					<ul className="list-disc list-inside mt-6 text-xl text-gray-300">
						<li>Spark interest in your project.</li>
						<li>Provide clarity on the problem your project solves.</li>
						<li>
							Offer straightforward steps for installation, usage, and
							contributions.
						</li>
						<li>
							Help users get started quickly, reducing the barriers to entry.
						</li>
					</ul>
					<p className="mt-6 text-xl leading-relaxed text-gray-300">
						Without a solid README, even the best projects can be overlooked or
						misunderstood. Think of it as your project's elevator pitch—an
						opportunity to engage users and collaborators quickly.
					</p>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Core Components of an Effective README
					</h2>
					<div className="space-y-14">
						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								1. Project Title
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								The title is the first thing users will see. Make it descriptive
								and clear, indicating the purpose of the project.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`# MakeMyReadme\nA tool to help you quickly create and customize professional READMEs for your projects.`
								)}
							</div>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								2. Description
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Write a compelling overview that highlights the problem your
								project solves and what makes it unique.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`## Description\nMakeMyReadme is a tool designed to help developers create comprehensive and professional README files quickly and easily. It automates the generation of basic sections like installation, usage, and contributing guidelines.\n\nFeatures:\n- Customizable templates\n- Easy-to-use CLI\n- Built-in Markdown support.`
								)}
							</div>
						</div>

						<hr className="border-t-2 border-gray-600 my-8" />

						<div>
							<h3 className="text-3xl font-semibold mb-4 text-white">
								3. Installation Instructions
							</h3>
							<p className="text-xl text-gray-300 leading-relaxed">
								Provide step-by-step installation instructions that are easy to
								follow. Make sure to include dependencies and any required
								environment variables.
							</p>
							<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
								{Markdown(
									`## Installation\nClone the repository:\n\`\`\`bash\ngit clone https://github.com/yourusername/makemyreadme.git\n\`\`\`\nNavigate to the project directory:\n\`\`\`bash\ncd makemyreadme\n\`\`\`\nInstall dependencies:\n\`\`\`bash\nnpm install\n\`\`\``
								)}
							</div>
						</div>
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-3xl font-semibold mb-6 text-white leading-snug">
						4. Usage Guidelines
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						Help users understand how to use your project effectively. Provide
						examples, commands, and configurations they can quickly try out.
					</p>
					<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
						{Markdown(
							`## Usage\nTo start generating your README file, run the following command:\n\`\`\`bash\nmakemyreadme init --template=basic\n\`\`\`\nTo customize your README further, use:\n\`\`\`bash\nmakemyreadme customize --section=installation --add\n\`\`\``
						)}
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-3xl font-semibold mb-6 text-white leading-snug">
						5. Contribution Details
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						Encourage others to contribute by providing clear guidelines on how
						to do so. This will make it easier for the community to collaborate.
					</p>
					<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
						{Markdown(
							`## Contributing\nFork the repository:\n\`\`\`bash\ngit clone https://github.com/yourusername/makemyreadme.git\n\`\`\`\nCreate a feature branch:\n\`\`\`bash\ngit checkout -b feature-name\n\`\`\`\nSubmit a pull request with a detailed explanation of your changes.`
						)}
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-3xl font-semibold mb-6 text-white leading-snug">
						6. License
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						A clear license section informs users of their rights to use,
						modify, and distribute your project. It's essential for legal
						clarity.
					</p>
					<div className="p-8 bg-[#1f2937] rounded-xl mt-8">
						{Markdown(
							`## License\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.`
						)}
					</div>
				</section>

				<hr className="border-t-2 border-gray-600 my-8" />

				<section className="mb-20">
					<h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
						Best Practices for Exceptional READMEs
					</h2>
					<ul className="list-disc list-inside mt-6 text-xl text-gray-300 leading-relaxed">
						<li>Be concise and clear—avoid jargon wherever possible.</li>
						<li>Structure the README logically—prioritize key information.</li>
						<li>Use proper Markdown formatting for easy navigation.</li>
						<li>
							Provide relevant links to documentation, issues, and pull
							requests.
						</li>
						<li>Update the README regularly as your project evolves.</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default Crafting_README;
