import React from "react";
import {Container} from "./Container";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div id="features">
      <Container>
        <div className="md:w-2/3 lg:w-3/5 mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-[#FF8000]"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            {/* A technology-first approach to payments and finance */}
            An Intelligent Approach to README Creation and Project Documentation
          </h2>
          <p className="text-gray-300">
          makemyREADME combines innovation and simplicity to help developers generate professional, eye-catching README files. With beautifull components and templates, you can bring your GitHub projects to life with minimal effort—saving time and boosting your project’s appeal.
          </p>
        </div>

        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border  text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const FeatureCard = ({ imageSrc, title, description }) => (
  <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
    <div className="relative space-y-8 py-12 p-8">
      {/* <img src={imageSrc} className="w-12" alt="feature illustration" /> */}
      <Image src={imageSrc} alt="Description of image" width={70} height={30} priority  />
      <div className="space-y-2">
        <h5 className="text-xl font-semibold text-white transition group-hover:text-[#FF8000]">
          {title}
        </h5>
        <p className="text-gray-300">{description}</p>
      </div>
      <Link
        href="/blogs"
        className="flex items-center justify-between group-hover:text-[#FF8000]"
      >
        <span className="text-sm">Read more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  </div>
);

const featureData = [
  {
    imageSrc: "/icons/read.png",
    title: "Customizable Template",
    description: "Choose from a variety of templates to create a README that fits your project's style and requirements.",
  },
  {
    imageSrc: "/icons/eye-care.png",
    title: "Live Markdown Preview",
    description: "See your README as you build it, with real-time markdown preview that keeps your formatting on point.",
  },
  {
    imageSrc: "/icons/colors.png",
    title: "Theme Customization",
    description: "Switch between dark, light, GitHub, and Bitbucket themes to see exactly how your README will look.",
  },
  {
    imageSrc: "/icons/features.png",
    title: "More features",
    description: "Enhance your README with embedded visuals, convenient export options, and comprehensive markdown formatting tools.",
  },
];

export default Features;
