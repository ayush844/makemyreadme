"use client";

import React from "react";
import { Container } from "./Container";
import Link from "next/link";

import { motion } from "motion/react";
import { delay } from "motion";

const Articles = ({ heading, description }) => {
  const articles = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Crafting the Perfect README for Your GitHub Project",
      description: `Your README is the face of your GitHub project. It's often the first
						thing users and contributors see, serving as both an introduction
						and a guide. A good README can make a huge difference in attracting
						contributors and making your project accessible.`,
      name: "Crafting_README",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Markdown Tips for a Polished README",
      description: `When someone visits your GitHub project, the README file is often
						the first thing they see. A polished README can mean the difference
						between gaining users and contributors or being overlooked. In this
						guide, we'll explore how to use Markdown effectively to create a
						clean, professional, and user-friendly README that leaves a lasting
						impression.`,
      name: "Markdown_Tips",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Why a Good README Matters",
      description: `In software development, documentation often takes a backseat to
						coding. Yet, the importance of clear, comprehensive documentation
						cannot be overstated, particularly for projects intended to be used
						or extended by others. At the heart of effective project
						documentation is the README file—a simple yet powerful document that
						can make or break a project's success.`,
      name: "Good_README",
    },
  ];

  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center mt-20">
          {heading == "Latest Articles" ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white"
              >
                {heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
                className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300"
              >
                {description}
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white"
              >
                {heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
                className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300"
              >
                {description}
              </motion.p>
            </>
          )}
        </div>

        {heading == "Latest Articles" ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                // animate={{
                //   opacity: 1,
                //   scale: 1,
                // }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
              >
                <Link
                  className="inline-block"
                  href={{
                    pathname: "/blogs/blog",
                    query: { name: article.name },
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={article.imgSrc}
                      alt="art cover"
                      loading="lazy"
                      width="1000"
                      height="667"
                      className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 relative">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {article.title}
                    </h3>
                    <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
                      {article.description}
                    </p>

                    <span className="text-info dark:text-blue-300">
                      Read more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
              >
                <Link
                  className="inline-block"
                  href={{
                    pathname: "/blogs/blog",
                    query: { name: article.name },
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={article.imgSrc}
                      alt="art cover"
                      loading="lazy"
                      width="1000"
                      height="667"
                      className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 relative">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {article.title}
                    </h3>
                    <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
                      {article.description}
                    </p>

                    <span className="text-info dark:text-blue-300">
                      Read more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Articles;
