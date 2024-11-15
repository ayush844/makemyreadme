// import components from '@/utils/components'
import React, { useState } from "react";
import Image from "next/image";
import ComponentPreviewer from "./ComponentPreviewer";

const ComponentsModal = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div
      className="bg-gray-900 w-[70vw] h-[80vh] text-white rounded-md border-2 border-primary grid grid-cols-3 p-6 gap-4
  absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <div className="col-span-1 bg-gray-950 rounded-md h-full w-full overflow-y-auto overflow-x-hidden border border-gray-200 p-8 flex flex-col gap-4 scrollbar-thin scrollbar-webkit">
        {components.map((component, index) => (
          <div
            key={index}
            onClick={() => setSelectedComponent(component)}
            className={`${component.tailwindClasses} cursor-pointer px-3 py-4 ${
              selectedComponent?.name === component.name
                ? "bg-gray-700 scale-105"
                : "bg-gray-900"
            }`}
          >
            {component.name}
          </div>
        ))}
      </div>
      {/* <div className="col-span-2 bg-slate-950 h-full w-full rounded-md border border-gray-200 flex flex-col gap-10 items-center justify-center overflow-y-auto overflow-x-hidden">
        <Image
          src={"/icons/namaste.png"}
          alt="Namaste"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-4xl font-extrabold text-orange-600">
          राम राम लाडले
        </h1>
      </div>
      <ComponentPreviewer markdown={components[0].markdownCode} /> */}

      <div className="col-span-2 bg-slate-950 h-full w-full rounded-md border border-gray-200 flex flex-col gap-10 items-center justify-center overflow-y-auto overflow-x-hidden ">
        {selectedComponent ? (
          <ComponentPreviewer markdown={selectedComponent.markdownCode} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/icons/namaste.png"}
              alt="Namaste"
              width={150}
              height={150}
              priority
            />
            <h1 className="text-4xl font-extrabold text-orange-600">
              राम राम लाडले
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentsModal;

// const components = [
//   {
//     name: "Title",
//     tailwindClasses: "bg-gray-800 text-white font-bold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Description",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Quick Start Guide",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Code Block",
//     tailwindClasses: "bg-gray-900 text-green-400 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-800 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Installation Instructions",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Usage Example",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Badges",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Features",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Table of Contents",
//     tailwindClasses: "bg-gray-800 text-gray-300 font-medium text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Subtitle",
//     tailwindClasses: "bg-gray-800 text-gray-300 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "License",
//     tailwindClasses: "bg-gray-800 text-gray-500 italic text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Contributing",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Contact Information",
//     tailwindClasses: "bg-gray-800 text-blue-400 underline text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Divider",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Acknowledgments",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Images or GIFs",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "API Documentation",
//     tailwindClasses: "bg-gray-800 text-blue-300 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Example Projects",
//     tailwindClasses: "bg-gray-800 text-gray-300 italic text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Support & Donations",
//     tailwindClasses: "bg-gray-800 text-pink-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "FAQ",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "References",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Version History",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Credits",
//     tailwindClasses: "bg-gray-800 text-green-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Security",
//     tailwindClasses: "bg-gray-800 text-red-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Deployment",
//     tailwindClasses: "bg-gray-800 text-yellow-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
// ];

// const components = [
//   // Frequently Used Components
//   {
//     name: "Heading",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "# Heading Text",
//   },
//   {
//     name: "Subheading",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "## Subheading Text",
//   },
//   {
//     name: "Description",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "This is a description of the project or section.",
//   },
//   {
//     name: "Code Block",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "```javascript\nconsole.log('Hello, world!');\n```",
//   },

//   // Major Sections
//   {
//     name: "Hero Section",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "# Project Name\nA brief introduction to your project.",
//   },
//   {
//     name: "Quick Start Guide",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Quick Start Guide\n1. Step one\n2. Step two\n3. Step three",
//   },
//   {
//     name: "Installation Section",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "## Installation\n```bash\nnpm install project-name\n```",
//   },
//   {
//     name: "Usage Example",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Usage\n```javascript\nimport { example } from 'project-name';\nexample();\n```",
//   },
//   {
//     name: "Features",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "## Features\n- Feature one\n- Feature two\n- Feature three",
//   },
//   {
//     name: "FAQ",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "## FAQ\n**Q: Question?**\nA: Answer.",
//   },
//   {
//     name: "License",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-purple-900 hover:scale-105 transition-transform duration-200",
//     markdownCode: "## License\nThis project is licensed under the MIT License.",
//   },
// ];

// const components = [
//   // Frequently Used Components
//   {
//     name: "Heading",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "# Project Title\nA catchy project title that immediately explains what the project is about.",
//   },
//   {
//     name: "Subheading",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Project Subtitle\nA subtitle providing additional context or goals for the project.",
//   },
//   {
//     name: "Description",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, ",
//   },
//   {
//     name: "Code Block",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "```javascript\n// Example usage of the main function\nimport { mainFunction } from 'project-name';\n\nmainFunction();\n```",
//   },

//   // Major Sections
//   {
//     name: "Hero Section",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "# Project Name\n![Project Banner](https://images.unsplash.com/photo-1685478237595-f452cb125f27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\nWelcome to the **Project Name**! This project provides an efficient solution to [specific problem]. With cutting-edge technology and an easy-to-follow structure, it aims to deliver [key benefit].Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, p",
//   },
//   {
//     name: "Quick Start Guide",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Quick Start Guide\n\nFollow these steps to get started quickly:\n\n1. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n2. **Navigate to the project directory**:\n   ```bash\n   cd project-name\n   ```\n\n3. **Install dependencies**:\n   ```bash\n   npm install\n   ```\n\n4. **Run the project**:\n   ```bash\n   npm start\n   ```\n\nThat's it! Your project should be up and running on [localhost:3000](http://localhost:3000).",
//   },
//   {
//     name: "Installation Section",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Installation\n\nTo install this project, follow the instructions below:\n\n1. **Ensure Node.js is installed**:\n   Check by running:\n   ```bash\n   node -v\n   ```\n\n2. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n3. **Navigate to the project folder**:\n   ```bash\n   cd project-name\n   ```\n\n4. **Install dependencies**:\n   ```bash\n   npm install\n   ```",
//   },
//   {
//     name: "Usage Example",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Usage\n\nHere’s how to use this project:\n\n```javascript\n// Import the library\nimport { coolFeature } from 'project-name';\n\n// Use the feature to get results\nconst result = coolFeature('inputData');\nconsole.log(result);\n```\n\nThe above example demonstrates the main functionality of the project and outputs the expected result when provided with the right data.",
//   },
//   {
//     name: "Features",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## Features\n\nThis project offers the following features:\n\n- **User Authentication**: Secure login and registration functionality.\n- **Responsive Design**: Fully optimized for all devices.\n- **Real-time Data**: Updated data directly from the API in real-time.\n- **Modular Code Structure**: Easy to navigate and extend.\n\nThese features make the project robust, scalable, and user-friendly.",
//   },
//   {
//     name: "FAQ",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## FAQ\n\n**Q: Can I use this project for commercial purposes?**\nA: Yes, as long as you comply with the license terms.\n\n**Q: How can I contribute?**\nA: Feel free to open a pull request or issue on GitHub.\n\n**Q: What technologies does this project use?**\nA: This project leverages React, Node.js, and Express.",
//   },
//   {
//     name: "License",
//     tailwindClasses:
//       "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//     markdownCode:
//       "## License\n\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.\n\nFeel free to use, modify, and distribute the project as per the license conditions. Contributions are welcome!",
//   },
// ];

const components = [
  // Frequently Used Components
  {
    name: "📢 Heading",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode: "# Project Title\n",
  },
  {
    name: "🌄 Project Logo",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "![Project Logo](/images/ourLogo.png)\n\nA quick logo or branding image to introduce your project visually.",
  },
  {
    name: "📑 Subheading",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode: "## Project Subtitle\n",
  },
  {
    name: "🏅 Badges",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)\n" +
      "![Build status](https://img.shields.io/badge/build-passing-brightgreen.svg)\n" +
      "![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)\n" +
      "![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)\n" +
      "![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)\n" +
      "![GitHub issues](https://img.shields.io/github/issues/username/repo.svg)\n" +
      "![GitHub forks](https://img.shields.io/github/forks/username/repo.svg?style=social)\n" +
      "![GitHub stars](https://img.shields.io/github/stars/username/repo.svg?style=social)\n" +
      "![GitHub watchers](https://img.shields.io/github/watchers/username/repo.svg?style=social)\n" +
      "![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)\n" +
      "![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)\n" +
      "![Coverage](https://img.shields.io/badge/coverage-85%25-yellow.svg)\n" +
      "![Code Style](https://img.shields.io/badge/code%20style-standard-blue.svg)\n" +
      "![Twitter Follow](https://img.shields.io/twitter/follow/yourusername?style=social)\n" +
      "![Awesome](https://img.shields.io/badge/awesome-yes-ff69b4.svg)\n",
  },
  {
    name: "📚 Table of Contents",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Table of Contents\n\n- [Hero Section](#hero-section)\n- [Quick Start Guide](#quick-start-guide)\n- [Installation Section](#installation-section)\n- [Usage Example](#usage-example)\n- [Features](#features)\n- [FAQ](#faq)\n- [License](#license)",
  },
  {
    name: "🦸 Hero Section",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "# Project Name\n![Project Banner](https://images.unsplash.com/photo-1685478237595-f452cb125f27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\nWelcome to the **Project Name**! This project provides an efficient solution to [specific problem]. With cutting-edge technology and an easy-to-follow structure, it aims to deliver [key benefit]. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, p",
  },
  {
    name: "📝 Description",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, ",
  },
  {
    name: "🌟 Feature Highlights",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Highlights\n\n✨ **Feature 1:** Explanation of the standout feature.\n\n✨ **Feature 2:** Explanation of the second feature.\n\n✨ **Feature 3:** Explanation of the third feature.\n\nA short, visual list of your project's highlights or key benefits.",
  },

  {
    name: "⚡ Quick Start Guide",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Quick Start Guide\n\nFollow these steps to get started quickly:\n\n1. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n2. **Navigate to the project directory**:\n   ```bash\n   cd project-name\n   ```\n\n3. **Install dependencies**:\n   ```bash\n   npm install\n   ```\n\n4. **Run the project**:\n   ```bash\n   npm start\n   ```\n\nThat's it! Your project should be up and running on [localhost:3000](http://localhost:3000).",
  },
  {
    name: "💻 Installation Section",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Installation\n\nTo install this project, follow the instructions below:\n\n1. **Ensure Node.js is installed**:\n   Check by running:\n   ```bash\n   node -v\n   ```\n\n2. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n3. **Navigate to the project folder**:\n   ```bash\n   cd project-name\n   ```\n\n4. **Install dependencies**:\n   ```bash\n   npm install\n   ```",
  },
  {
    name: "🔍 Usage Example",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Usage\n\nHere’s how to use this project:\n\n```javascript\n// Import the library\nimport { coolFeature } from 'project-name';\n\n// Use the feature to get results\nconst result = coolFeature('inputData');\nconsole.log(result);\n```\n\nThe above example demonstrates the main functionality of the project and outputs the expected result when provided with the right data.",
  },
  {
    name: "💻 Code Blocks",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "```javascript\n" +
      "// JavaScript Example\n" +
      "const greet = (name) => {\n" +
      "  return `Hello, ${name}!`;\n" +
      "};\n" +
      "console.log(greet('World'));\n" +
      "```\n\n" +
      "```python\n" +
      "# Python Example\n" +
      "def greet(name):\n" +
      '    return f"Hello, {name}!"\n' +
      "print(greet('World'))\n" +
      "```\n\n" +
      "```html\n" +
      "<!-- HTML Example -->\n" +
      "<!DOCTYPE html>\n" +
      "<html>\n" +
      "  <head><title>Hello</title></head>\n" +
      "  <body>\n" +
      "    <h1>Hello, World!</h1>\n" +
      "  </body>\n" +
      "</html>\n" +
      "```\n\n" +
      "```css\n" +
      "/* CSS Example */\n" +
      "body {\n" +
      "  font-family: Arial, sans-serif;\n" +
      "  background-color: #f0f0f0;\n" +
      "  color: #333;\n" +
      "}\n" +
      "```\n\n" +
      "```bash\n" +
      "# Bash Example\n" +
      'echo "Hello, World!"\n' +
      "```",
  },
  {
    name: "🛠️ Technologies Used",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Technologies Used\n\n![React](https://img.shields.io/badge/React-16.13.1-blue.svg)\n![Node.js](https://img.shields.io/badge/Node.js-14.15.4-green.svg)\n![Express](https://img.shields.io/badge/Express-4.17.1-blue.svg)\n![MongoDB](https://img.shields.io/badge/MongoDB-4.4.3-green.svg)\n\nList of technologies and tools used, represented with badges.",
  },
  {
    name: "✨ Features",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Features\n\nThis project offers the following features:\n\n- **User Authentication**: Secure login and registration functionality.\n- **Responsive Design**: Fully optimized for all devices.\n- **Real-time Data**: Updated data directly from the API in real-time.\n- **Modular Code Structure**: Easy to navigate and extend.\n\nThese features make the project robust, scalable, and user-friendly.",
  },
  {
    name: "🖼️ Screenshots / Images",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Screenshots\n\n![Screenshot 1](/images/home.png)\n\n![Screenshot 2](/images/editor.png)\n\n![image](https://images.unsplash.com/photo-1610018556010-6a11691bc905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
  // Major Sections

  {
    name: "❓ FAQ",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## FAQ\n\n**Q: Can I use this project for commercial purposes?**\nA: Yes, as long as you comply with the license terms.\n\n**Q: How can I contribute?**\nA: Feel free to open a pull request or issue on GitHub.\n\n**Q: What technologies does this project use?**\nA: This project leverages React, Node.js, and Express.",
  },

  {
    name: "🤝 Contributing Guidelines",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Contributing\n\nWe welcome contributions! Please follow the steps below:\n1. Fork the repository.\n2. Create a new branch.\n3. Make your changes and commit.\n4. Push to your branch.\n5. Submit a pull request.\n\nFor more details, see [CONTRIBUTING.md](CONTRIBUTING.md).",
  },
  {
    name: "📄 License",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## License\n\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.\n\nFeel free to use, modify, and distribute the project as per the license conditions. Contributions are welcome!",
  },

  {
    name: "📞 Contact Information",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Contact\n\nFor questions, feel free to reach out:\n\n- **Email**: example@example.com\n- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)\n- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)",
  },
  {
    name: "🤲 Support",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Support\n\nIf you find this project useful, please consider giving it a star 🌟 and sharing it with others!\n\nFor additional support, reach out through GitHub Issues or contact us via email.",
  },
  {
    name: "🌐 Social Links",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "[![Follow on Twitter](https://img.shields.io/twitter/follow/yourusername?style=social)](https://twitter.com/yourusername)\n" +
      "[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://linkedin.com/in/yourusername)\n" +
      "[![GitHub followers](https://img.shields.io/github/followers/yourusername.svg?style=social&label=Follow)](https://github.com/yourusername)\n" +
      "[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red.svg)](https://youtube.com/yourchannel)",
  },
  {
    name: "📜 Changelog",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Changelog\n\nAll notable changes to this project will be documented in this section.\n\n- **v1.0.0** - Initial release with core features\n- **v1.1.0** - Added new API endpoints\n- **v1.2.0** - Improved UI and fixed bugs",
  },
  {
    name: "🙏 Attribution",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Acknowledgments\n\nSpecial thanks to:\n- [Contributor 1](https://github.com/contributor1) for initial development\n- [Contributor 2](https://github.com/contributor2) for design assets\n\nThis project draws inspiration from [Awesome Project](https://github.com/awesome/project).",
  },

  {
    name: "🚀 Call to Action",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Get Started\n\n[![Get Started](https://img.shields.io/badge/Get%20Started-%23FFA500.svg)](https://your-get-started-url.com)\n\nEncourage readers to take the next steps with a prominent button or link.",
  },
  {
    name: "🖋️ Footer Credits",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "---\n\n> Made with ❤️ by [Your Name](https://your-profile-url.com) • [Contribute](https://github.com/yourusername/repo) • [Report Issues](https://github.com/yourusername/repo/issues)\n\nA personalized footer to add a friendly touch.",
  },
];
