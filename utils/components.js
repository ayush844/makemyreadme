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
      "![Project Logo](https://images.unsplash.com/photo-1558983467-5dd0595a81a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\nA quick logo or branding image to introduce your project visually.\n",
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
    name: "📖 Table of Contents",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "### Table of Contents\n\n" +
      "- [About the Project](#about-the-project)\n" +
      "- [Getting Started](#getting-started)\n" +
      "- [Features](#features)\n" +
      "- [Documentation](#documentation)\n" +
      "- [Contributing](#contributing)\n" +
      "- [License](#license)\n" +
      "- [Contact](#contact)\n" +
      "- [Acknowledgments](#acknowledgments)\n\n",
  },
  {
    name: "🦸 Hero Section",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "# Project Name\n![Project Banner](https://images.unsplash.com/photo-1685478237595-f452cb125f27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\nWelcome to the **Project Name**! This project provides an efficient solution to [specific problem]. With cutting-edge technology and an easy-to-follow structure, it aims to deliver [key benefit]. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, p\n\n\n",
  },
  {
    name: "📝 Description",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, \n\n\n",
  },
  {
    name: "🌟 Feature Highlights",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Highlights\n\n✨ **Feature 1:** Explanation of the standout feature.\n\n✨ **Feature 2:** Explanation of the second feature.\n\n✨ **Feature 3:** Explanation of the third feature.\n\nA short, visual list of your project's highlights or key benefits.\n\n\n",
  },

  {
    name: "⚡ Quick Start Guide",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Quick Start Guide\n\nFollow these steps to get started quickly:\n\n1. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n2. **Navigate to the project directory**:\n   ```bash\n   cd project-name\n   ```\n\n3. **Install dependencies**:\n   ```bash\n   npm install\n   ```\n\n4. **Run the project**:\n   ```bash\n   npm start\n   ```\n\nThat's it! Your project should be up and running on [localhost:3000](http://localhost:3000).\n\n\n",
  },
  {
    name: "💻 Installation Section",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Installation\n\nTo install this project, follow the instructions below:\n\n1. **Ensure Node.js is installed**:\n   Check by running:\n   ```bash\n   node -v\n   ```\n\n2. **Clone the repository**:\n   ```bash\n   git clone https://github.com/username/project-name.git\n   ```\n\n3. **Navigate to the project folder**:\n   ```bash\n   cd project-name\n   ```\n\n4. **Install dependencies**:\n   ```bash\n   npm install\n   ```\n\n\n",
  },
  {
    name: "🔍 Usage Example",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Usage\n\nHere’s how to use this project:\n\n```javascript\n// Import the library\nimport { coolFeature } from 'project-name';\n\n// Use the feature to get results\nconst result = coolFeature('inputData');\nconsole.log(result);\n```\n\nThe above example demonstrates the main functionality of the project and outputs the expected result when provided with the right data.\n\n\n",
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
      "```\n\n\n",
  },
  {
    name: "🛠️ Technologies Used",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Technologies Used\n\n![React](https://img.shields.io/badge/React-16.13.1-blue.svg)\n![Node.js](https://img.shields.io/badge/Node.js-14.15.4-green.svg)\n![Express](https://img.shields.io/badge/Express-4.17.1-blue.svg)\n![MongoDB](https://img.shields.io/badge/MongoDB-4.4.3-green.svg)\n\nList of technologies and tools used, represented with badges.\n\n\n",
  },
  {
    name: "✨ Features",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Features\n\nThis project offers the following features:\n\n- **User Authentication**: Secure login and registration functionality.\n- **Responsive Design**: Fully optimized for all devices.\n- **Real-time Data**: Updated data directly from the API in real-time.\n- **Modular Code Structure**: Easy to navigate and extend.\n\nThese features make the project robust, scalable, and user-friendly.\n\n\n",
  },
  {
    name: "🖼️ Screenshots / Images",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Screenshots\n\n![Screenshot 1](/images/home.png)\n\n![Screenshot 2](/images/editor.png)\n\n![image](https://images.unsplash.com/photo-1610018556010-6a11691bc905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n\n",
  },
  // Major Sections

  {
    name: "❓ FAQ",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## FAQ\n\n**Q: Can I use this project for commercial purposes?**\nA: Yes, as long as you comply with the license terms.\n\n**Q: How can I contribute?**\nA: Feel free to open a pull request or issue on GitHub.\n\n**Q: What technologies does this project use?**\nA: This project leverages React, Node.js, and Express.\n\n\n",
  },

  {
    name: "🤝 Contributing Guidelines",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Contributing\n\nWe welcome contributions! Please follow the steps below:\n1. Fork the repository.\n2. Create a new branch.\n3. Make your changes and commit.\n4. Push to your branch.\n5. Submit a pull request.\n\nFor more details, see [CONTRIBUTING.md](CONTRIBUTING.md).\n\n\n",
  },
  {
    name: "📄 License",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## License\n\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.\n\nFeel free to use, modify, and distribute the project as per the license conditions. Contributions are welcome!\n\n\n",
  },

  {
    name: "📚 Additional Resources",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "### Additional Resources\n\n" +
      "- [API Documentation](https://yourdomain.com/docs)\n" +
      "- [Developer Wiki](https://yourdomain.com/wiki)\n" +
      "- [Community Forum](https://yourdomain.com/forum)\n" +
      "- [Support Center](https://yourdomain.com/support)\n\n",
  },
  {
    name: "📬 Contact Information",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "### Contact Information\n\n" +
      "- **Email**: support@yourcompany.com\n" +
      "- **Phone**: +1 (123) 456-7890\n" +
      "- **Support Portal**: [Submit a Ticket](https://yourdomain.com/support/tickets)\n" +
      "- **Twitter**: [@yourcompany](https://twitter.com/yourcompany)\n" +
      "- **LinkedIn**: [Your Company Profile](https://linkedin.com/company/yourcompany)\n\n",
  },
  {
    name: "💡 Tips for Success",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "### Tips for Success\n\n" +
      "- Follow best practices for coding and documentation.\n" +
      "- Stay updated with industry trends.\n" +
      "- Engage actively with the community.\n" +
      "- Provide feedback and contribute to open-source projects.\n\n",
  },
  {
    name: "🛠️ Development Roadmap",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "### Development Roadmap\n\n" +
      "#### Phase 1: MVP Development\n" +
      "- Implement core features.\n" +
      "- Set up CI/CD pipelines.\n" +
      "#### Phase 2: Feature Expansion\n" +
      "- Add advanced analytics.\n" +
      "- Integrate third-party tools.\n" +
      "#### Phase 3: Scaling and Optimization\n" +
      "- Optimize for high-traffic use.\n" +
      "- Introduce machine learning features.\n\n",
  },

  {
    name: "🤲 Support",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Support\n\nIf you find this project useful, please consider giving it a star 🌟 and sharing it with others!\n\nFor additional support, reach out through GitHub Issues or contact us via email.\n\n\n",
  },
  {
    name: "🌐 Social Links",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "[![Follow on Twitter](https://img.shields.io/twitter/follow/yourusername?style=social)](https://twitter.com/yourusername)\n" +
      "[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://linkedin.com/in/yourusername)\n" +
      "[![GitHub followers](https://img.shields.io/github/followers/yourusername.svg?style=social&label=Follow)](https://github.com/yourusername)\n" +
      "[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red.svg)](https://youtube.com/yourchannel)\n\n\n",
  },
  {
    name: "📜 Changelog",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Changelog\n\nAll notable changes to this project will be documented in this section.\n\n- **v1.0.0** - Initial release with core features\n- **v1.1.0** - Added new API endpoints\n- **v1.2.0** - Improved UI and fixed bugs\n\n\n",
  },
  {
    name: "🙏 Attribution",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Acknowledgments\n\nSpecial thanks to:\n- [Contributor 1](https://github.com/contributor1) for initial development\n- [Contributor 2](https://github.com/contributor2) for design assets\n\nThis project draws inspiration from [Awesome Project](https://github.com/awesome/project).\n\n\n",
  },

  {
    name: "🚀 Call to Action",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "## Get Started\n\n[![Get Started](https://img.shields.io/badge/Get%20Started-%23FFA500.svg)](https://your-get-started-url.com)\n\nEncourage readers to take the next steps with a prominent button or link.\n\n\n",
  },
  {
    name: "🖋️ Footer Credits",
    tailwindClasses:
      "bg-blue-800 text-white font-bold text-2xl py-4 px-6 rounded-lg text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
    markdownCode:
      "---\n\n> Made with ❤️ by [Your Name](https://your-profile-url.com) • [Contribute](https://github.com/yourusername/repo) • [Report Issues](https://github.com/yourusername/repo/issues)\n\nA personalized footer to add a friendly touch.\n\n\n",
  },
];

export default components;
