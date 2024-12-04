"use client";
import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import { motion } from "motion/react";

const CallToAction = () => {
	return (
		<div className="relative py-16 mt-24">
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
			</div>

			<Container>
				<div className="relative">
					{/* Title and subtitle */}
					<motion.div
						className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, scale: 1 }}
						viewport={{ amount: 0.4 }}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
					>
						<h1 className="text-center text-4xl font-bold text-white md:text-5xl">
							Jump In Today
						</h1>
						<p className="text-center text-xl text-gray-300">
							Discover the easiest way to create polished and standout README
							files with makemyREADME.
						</p>

						{/* Call-to-action buttons */}
						<div className="flex flex-wrap justify-center gap-6">
							<Link
								href="/editor"
								className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
							>
								<span className="relative text-base font-semibold text-white ">
									Start Crafting
								</span>
							</Link>
							<Link
								href="/blogs"
								className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
							>
								<span className="relative text-base font-semibold text-white">
									Explore Our Blog
								</span>
							</Link>
						</div>
					</motion.div>
				</div>
			</Container>
		</div>
	);
};

export default CallToAction;
