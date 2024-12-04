"use client";

import React, { useRef } from "react";
import { Container } from "./Container";
import Image from "next/image";

import { motion, useScroll } from "motion/react";
import { delay } from "motion";

const Testimonials = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

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
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            // once: true,
            // margin: "-200px",
            amount: "all",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-16 space-y-4 px-6 md:px-0 mt-28"
        >
          <motion.h2
            className="text-center text-2xl font-bold text-white md:text-4xl overflow-hidden whitespace-nowrap"
            initial={{ opacity: 0, y: 200 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            We Have Some Happy Users.
          </motion.h2>
        </motion.div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              // style={{
              //   scale: scrollYProgress,
              //   opacity: scrollYProgress,
              // }}
              initial={{
                opacity: 0,
                scale: 0.25,
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
              key={index}
              ref={ref}
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
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-8">{testimonial.message}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
