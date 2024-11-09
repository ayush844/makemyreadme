import React from "react";
import {Container} from "./Container";
import Link from "next/link";

const Articles = () => {
  const articles = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Crafting the Perfect README for Your GitHub Project",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae id magna quis aliquet aptent scelerisque adipiscing quam curabitur. Vestibulum ullamcorper phasellus ultricies pharetra commodo accumsan cubilia tempor potenti. Vitae ullamcorper ullamcorper egestas nostra hendrerit. Taciti elementum fames purus imperdiet; viverra consectetur. Inceptos ac vitae quis non commodo dolor nullam tincidunt. Acras condimentum ad; velit primis faucibus bibendum cubilia. Diam a iaculis arcu phasellus ut urna ultrices rutrum lacinia. Hendrerit libero malesuada, semper nisl tincidunt dis. Feugiat pharetra ad consequat primis platea. Libero euismod himenaeos iaculis curae hendrerit taciti. Est volutpat tempor a tempor blandit ex porta purus ullamcorper. Aliquet aliquam pretium aptent molestie, integer dui ex. Nulla maecenas eu libero erat pellentesque;",
      link: "/",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Markdown Tips for a Polished README",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae id magna quis aliquet aptent scelerisque adipiscing quam curabitur. Vestibulum ullamcorper phasellus ultricies pharetra commodo accumsan cubilia tempor potenti. Vitae ullamcorper ullamcorper egestas nostra hendrerit. Taciti elementum fames purus imperdiet; viverra consectetur. Inceptos ac vitae quis non commodo dolor nullam tincidunt. Acras condimentum ad; velit primis faucibus bibendum cubilia. Diam a iaculis arcu phasellus ut urna ultrices rutrum lacinia. Hendrerit libero malesuada, semper nisl tincidunt dis. Feugiat pharetra ad consequat primis platea. Libero euismod himenaeos iaculis curae hendrerit taciti. Est volutpat tempor a tempor blandit ex porta purus ullamcorper. Aliquet aliquam pretium aptent molestie, integer dui ex. Nulla maecenas eu libero erat pellentesque;",
      link: "/",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Why a Good README Matters",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae id magna quis aliquet aptent scelerisque adipiscing quam curabitur. Vestibulum ullamcorper phasellus ultricies pharetra commodo accumsan cubilia tempor potenti. Vitae ullamcorper ullamcorper egestas nostra hendrerit. Taciti elementum fames purus imperdiet; viverra consectetur. Inceptos ac vitae quis non commodo dolor nullam tincidunt. Acras condimentum ad; velit primis faucibus bibendum cubilia. Diam a iaculis arcu phasellus ut urna ultrices rutrum lacinia. Hendrerit libero malesuada, semper nisl tincidunt dis. Feugiat pharetra ad consequat primis platea. Libero euismod himenaeos iaculis curae hendrerit taciti. Est volutpat tempor a tempor blandit ex porta purus ullamcorper. Aliquet aliquam pretium aptent molestie, integer dui ex. Nulla maecenas eu libero erat pellentesque;",
      link: "/",
    },
  ];

  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center mt-24">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Explore insights, tips, and best practices for crafting professional README files that make an impact.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
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
                <Link className="inline-block" href={article.link}>
                  <span className="text-info dark:text-blue-300">Read more</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Articles;
