"use client";
// import Crafting_README from "@/utils/Blogs/Crafting_README";
// import Good_README from "@/utils/Blogs/Good_README";
// import Markdown_Tips from "@/utils/Blogs/Markdown_Tips";
import React, { Suspense, useEffect, useState } from "react";
import { marked } from "marked";
// import { useSearchParams } from "next/navigation";
import "github-markdown-css";

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

const Blog = () => {
  // const searchParams = useSearchParams();
  // const name = searchParams.get("name");

  const [name, setBlogName] = useState("");

  // Ensure useSearchParams runs only on the client
  // const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const blogName = params.get("name") || "Crafting_README";

      // const blogName = searchParams.get("name");
      setBlogName(blogName || ""); // Default to empty string if no name found
    }
  }, []);

  return (
    <Suspense>
      {name === "Crafting_README" && (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans mt-16">
          <div className="max-w-5xl mx-auto p-12 text-xl font-medium">
            <header className="mb-16">
              <h1 className="text-6xl font-extrabold mb-8 text-white leading-tight">
                Crafting the Perfect README
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                Your README is the face of your GitHub project. Its often the
                first thing users and contributors see, serving as both an
                introduction and a guide. A good README can make a huge
                difference in attracting contributors and making your project
                accessible.
              </p>
            </header>
            <hr className="border-t-2 border-gray-600 my-8" />
            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Introduction: Why Your README Matters
              </h2>
              <p className="text-xl leading-relaxed text-gray-300">
                Your README is often the first impression users and contributors
                get of your project. A well-crafted README not only helps others
                understand the purpose and functionality of your project but
                also guides them through setting it up and contributing to it.
                Here s why it matters:
              </p>
              <ul className="list-disc list-inside mt-6 text-xl text-gray-300">
                <li>Spark interest in your project.</li>
                <li>Provide clarity on the problem your project solves.</li>
                <li>
                  Offer straightforward steps for installation, usage, and
                  contributions.
                </li>
                <li>
                  Help users get started quickly, reducing the barriers to
                  entry.
                </li>
              </ul>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">
                Without a solid README, even the best projects can be overlooked
                or misunderstood. Think of it as your project elevator pitch—an
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
                    The title is the first thing users will see. Make it
                    descriptive and clear, indicating the purpose of the
                    project.
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
                    Provide step-by-step installation instructions that are easy
                    to follow. Make sure to include dependencies and any
                    required environment variables.
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
                Help users understand how to use your project effectively.
                Provide examples, commands, and configurations they can quickly
                try out.
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
                Encourage others to contribute by providing clear guidelines on
                how to do so. This will make it easier for the community to
                collaborate.
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
                modify, and distribute your project. Its essential for legal
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
                <li>
                  Structure the README logically—prioritize key information.
                </li>
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
      )}
      {name === "Markdown_Tips" && (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans mt-16">
          <div className="max-w-5xl mx-auto p-12 text-xl font-medium">
            <header className="mb-16">
              <h1 className="text-6xl font-extrabold mb-8 text-white leading-tight">
                Markdown Tips for a Polished README
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                When someone visits your GitHub project, the README file is
                often the first thing they see. A polished README can mean the
                difference between gaining users and contributors or being
                overlooked. In this guide, we will explore how to use Markdown
                effectively to create a clean, professional, and user-friendly
                README that leaves a lasting impression.
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
                formatting syntax to create structured documents. Its
                simplicity, readability, and ease of use make it the default
                choice for GitHub README files.
              </p>
              <h3 className="text-3xl font-semibold text-white mt-8">
                Why is a polished README important?
              </h3>
              <p className="text-xl leading-relaxed text-gray-300">
                Your README serves as your project front door. A clear,
                engaging, and visually appealing README:
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
                  Improves accessibility: A well-structured README makes it
                  easier for everyone to understand your work.
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
                    navigate. Use them to divide your README into logical
                    sections, such as Introduction, Features, Installation, and
                    Usage.
                  </p>
                  <div className="p-8 bg-[#1f2937] rounded-xl mt-8">
                    {Markdown(
                      `# MyProject\n\n## Features\n- Easy to use\n- Cross-platform support\n\n## Installation\n1. Clone the repository.\n2. Run the setup script.`
                    )}
                  </div>
                  <p className="mt-6 text-xl text-gray-300">
                    Tip: Always use # for the main title, and do not skip
                    heading levels for consistent structure.
                  </p>
                </div>
                <hr className="border-t-2 border-gray-600 my-8" />
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">
                    2. Lists: Presenting Information Clearly
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Lists are a great way to organize information into
                    digestible chunks.
                  </p>
                  <div className="p-8 bg-[#1f2937] rounded-xl mt-8">
                    {Markdown(
                      `### Benefits\n- Lightweight\n- Open-source\n- Easy to learn\n\n### How to Get Started\n1. Fork the repository.\n2. Clone it to your local machine.\n3. Install dependencies.\n4. Start the application.`
                    )}
                  </div>
                  <p className="mt-6 text-xl text-gray-300">
                    Tip: Mix ordered and unordered lists for complex
                    instructions.
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
                      `[Visit GitHub](https://github.com)\n\n![Sample Image](https://via.placeholder.com/300)`
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
                        `    print("Hello, World!")\n` +
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
                    Badges are an excellent way to display key project
                    information, like build status, license, or downloads.
                  </p>
                  <div className="p-8 bg-[#1f2937] rounded-xl mt-8">
                    {Markdown(
                      `![Build Status](https://img.shields.io/badge/build-passing-brightgreen)\n![License](https://img.shields.io/badge/license-MIT-blue)`
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
                A polished README is more than documentation—its your project
                pitch. By mastering Markdown, you can create a README thats
                informative, visually appealing, and a joy to read.
              </p>
              <div className="text-xl text-gray-300 mt-6">
                Quick Action Tips:
                <ul className="list-disc list-inside mt-6">
                  <li>
                    Structure your README with clear headings and logical
                    sections.
                  </li>
                  <li>
                    Use visual elements like badges and images to engage
                    readers.
                  </li>
                  <li>Preview your README before committing changes.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      )}
      {name === "Good_README" && (
        <div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans mt-16 ">
          <div className="max-w-5xl mx-auto p-12 text-xl font-medium">
            <header className="mb-16">
              <h1 className="text-6xl font-extrabold mb-8 text-white leading-tight">
                Why a Good README Matters
              </h1>
              <p className="text-xl leading-relaxed text-gray-300">
                In software development, documentation often takes a backseat to
                coding. Yet, the importance of clear, comprehensive
                documentation cannot be overstated, particularly for projects
                intended to be used or extended by others. At the heart of
                effective project documentation is the README file—a simple yet
                powerful document that can make or break a project success.
              </p>
            </header>

            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Introduction: What is a README File?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                The README file, often named <code>README.md</code> in most
                repositories, serves as the entry point for anyone interacting
                with your project. It offers an overview of what the project
                does, how to use it, and how others can contribute. In short,
                its the user manual of your project.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mt-4">
                For developers, its the primary document to communicate the
                purpose and features of the project. For contributors, it acts
                as a roadmap, highlighting how they can participate effectively.
              </p>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Purpose of a README File
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A good README serves multiple audiences with different needs:
              </p>
              <ul className="list-disc list-inside mt-6 text-xl text-gray-300 leading-relaxed">
                <li>
                  <strong>For Users:</strong> It provides clear instructions on
                  installing, running, and using the project, ensuring a smooth
                  onboarding experience.
                </li>
                <li>
                  <strong>For Contributors:</strong> It outlines how they can
                  help, from adhering to coding standards to creating pull
                  requests, making collaboration seamless.
                </li>
                <li>
                  <strong>For Stakeholders:</strong> It highlights the projects
                  objectives, showcasing its current state, potential, and
                  impact.
                </li>
              </ul>
              <p className="mt-6 text-xl text-gray-300">
                Without a README—or with an inadequate one—barriers arise for
                users, developers, and collaborators, often leading to missed
                opportunities for engagement or growth.
              </p>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Why Does a Good README Matter?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A README file is the face of your project. It communicates
                professionalism, care, and attention to detail, inspiring trust
                and confidence. Heres why a good README matters:
              </p>
              <ul className="list-disc list-inside mt-6 text-xl text-gray-300 leading-relaxed">
                <li>
                  <strong>Facilitates Understanding:</strong> It provides
                  essential context for users and contributors to quickly grasp
                  the projects purpose and functionality.
                </li>
                <li>
                  <strong>Sets the First Impression:</strong> A well-structured
                  README reflects professionalism and invites users and
                  contributors to engage with your project.
                </li>
                <li>
                  <strong>Encourages Collaboration:</strong> Clear documentation
                  reduces onboarding friction, fostering a collaborative and
                  inclusive environment.
                </li>
                <li>
                  <strong>Attracts Feedback and Contributions:</strong> By
                  outlining contribution guidelines, you make it easier for
                  others to get involved, leading to valuable feedback and
                  project growth.
                </li>
              </ul>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Key Components of an Effective README
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A good README is structured, concise, and detailed. Here are the
                essential components to include:
              </p>
              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    1. Project Overview
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Provide a brief overview that includes:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-xl text-gray-300">
                    <li>What the project is and its primary purpose.</li>
                    <li>
                      Why it exists, explaining the problem it solves or the gap
                      it addresses.
                    </li>
                    <li>Key features and functionalities of the project.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    2. Installation Instructions
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Detail the steps required to set up the project:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-xl text-gray-300">
                    <li>
                      List prerequisites, such as software dependencies,
                      libraries, or tools.
                    </li>
                    <li>
                      Provide step-by-step setup commands and expected outputs.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    3. Usage Guidelines
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Explain how users can interact with the project:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-xl text-gray-300">
                    <li>Include examples of common use cases.</li>
                    <li>
                      Add screenshots, GIFs, or videos for clarity and
                      engagement.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    4. Contribution Guidelines
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Outline how developers can contribute:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-xl text-gray-300">
                    <li>Steps for forking and cloning the repository.</li>
                    <li>Standards for coding, commit messages, and testing.</li>
                    <li>
                      Details on submitting pull requests and addressing
                      reviews.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-semibold mb-8 text-white leading-snug">
                Conclusion: README as a Reflection of Your Project
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A README is a gateway to your project, reflecting its quality
                and accessibility. A well-crafted README demonstrates your
                commitment to providing value to users and contributors while
                inviting engagement and collaboration.
              </p>
            </section>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default Blog;
