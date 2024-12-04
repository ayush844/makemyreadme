"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./Container";

import { motion } from "motion/react";

export default function HeroSection() {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="relative" id="home">
      {/* <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div> */}
      <Container>
        <div className="relative pt-36 ml-auto">
          <motion.div
            initial="hidden"
            animate="show"
            whileInView="show"
            variants={fadeInUpAnimation}
            className="lg:w-2/3 text-center mx-auto"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className="text-white font-bold text-5xl md:text-6xl xl:text-7xl"
            >
              Create Stunning <span className="text-[#9333EA]">README</span>{" "}
              <span className="text-white">in Minutes.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUpAnimation}
              className="mt-8 text-lg text-gray-300"
            >
              Create polished README files effortlessly, giving your GitHub
              projects the attention they deserve. Streamline your documentation
              process with an intuitive tool designed to save time and enhance
              your project’s presentation.
            </motion.p>
            <motion.div
              variants={fadeInUpAnimation}
              className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"
            >
              <Link
                href="/editor"
                className="relative flex h-11 w-full items-center justify-center px-6 inset-0 rounded-full bg-[#9333EA] transition duration-300 hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </Link>
              <Link
                href="/templates"
                className="relative flex h-11 w-full items-center justify-center px-6 inset-0 rounded-full border border-transparent bg-gradient-to-b transition duration-300 hover:scale-105 active:duration-75 active:scale-95 border-gray-300 bg-gray-800 sm:w-max "
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  View templates
                </span>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUpAnimation}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
            >
              <div className=" flex flex-col items-center justify-center ">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Free and Accessible
                </h6>
                <p className="mt-2 text-gray-500">
                  Enjoy most of our features for free, making it easy for
                  everyone to create great README files.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Instant README Creation
                </h6>
                <p className="mt-2 text-gray-500">
                  Generate professional README files in just a few clicks—no
                  delays, just results.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Highly Trusted by Developers
                </h6>
                <p className="mt-2 text-gray-500">
                  Our users love how easy it is to create polished README files,
                  and you will too.
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        {[
                            'microsoft',
                            'airbnb',
                            'google',
                            'ge',
                            'netflix',
                            'google-cloud',
                        ].map((client, index) => (
                            <div key={index} className="p-4 grayscale transition duration-200 hover:grayscale-0">
                                <img
                                    src={`./images/clients/${client}.svg`}
                                    className="h-12 w-auto mx-auto"
                                    loading="lazy"
                                    alt={`${client} logo`}
                                />
                            </div>
                        ))}
                    </div> */}
        </div>
      </Container>
    </div>
  );
}
