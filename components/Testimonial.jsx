import React from "react";
import {Container}from "./Container";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Liam Carter",
      role: "Mobile dev",
      avatar: "/images/avatar/user3.jpg",
      message:
        "makemyREADME has transformed my workflow. Creating polished README files used to be time-consuming, but now it’s a breeze. I can customize everything, preview changes in real-time, and export it directly. A must-have for any developer!",
    },
    {
      name: "Elena Schmidt",
      role: "Marketing",
      avatar: "/images/avatar/user2.jpg",
      message:
        "As someone who’s not a developer, I was initially intimidated by GitHub README files. makemyREADME made it easy for me to create clear, visually appealing documentation for our team’s projects without needing to learn markdown from scratch!",
    },
    {
      name: "Ananya Iyer",
      role: "Developer",
      avatar: "/images/avatar/user1.jpg",
      message:
        "I’ve tried a few README generators, but makemyREADME stands out. The live preview and theme options save me time, and the templates are just what I need to create professional documentation. Love it!",
    },
    {
      name: " Hiroshi Tanaka",
      role: "Mobile dev",
      avatar: "/images/avatar/user4.jpg",
      message:
        "makemyREADME makes README creation feel effortless. It’s user-friendly, yet offers so many customization options. I especially like being able to add images and code snippets seamlessly—it’s the ideal tool for showcasing projects.",
    },
    {
      name: "Oliver Bennett",
      role: "Manager",
      avatar: "/images/avatar/user5.jpg",
      message:
        "Keeping project documentation consistent used to be a challenge for our team. With makemyREADME, everyone can create and customize README files without hassle, making our repos look polished and professional. Highly recommended!",
    },
    {
      name: "Arjun Patel",
      role: "Mobile dev",
      avatar: "/images/avatar/user6.jpg",
      message:
        "I used to struggle with markdown syntax and formatting. makemyREADME has made creating professional READMEs incredibly simple. I love the variety of templates and customization options—it's been a game-changer for my GitHub projects.",
    },
  ];

  return (
    <div className="text-gray-300" id="testimonials">
      <Container>
        <div className="mb-16 space-y-4 px-6 md:px-0 mt-28">
          <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
            We Have Some Happy Users.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-14 h-14 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  width="500"
                  height="500"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
