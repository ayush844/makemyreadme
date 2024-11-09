'use client'

import React, { useState } from 'react';

import { BsFileEarmarkTextFill } from "react-icons/bs";
import { Container } from './Container';
import Link from 'next/link';


export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="z-10 w-full  sticky top-0 bg-[#0f172a]" >
            <nav className="z-10 w-full  sticky top-0">
                <Container>
                    <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                        <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                            <Link href="/" aria-label="logo" className="flex space-x-2 items-center">
                                <BsFileEarmarkTextFill className=' text-purple-500 text-3xl' />
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">makemy<span className=' text-[#9333EA]'>README</span></h1>
                            </Link>

                            <div className="relative flex items-center lg:hidden max-h-10">
                                <button
                                    aria-label="hamburger"
                                    className="relative p-6 -mr-6"
                                    onClick={toggleNav}
                                >
                                    <div
                                        aria-hidden="true"
                                        className={`m-auto h-0.5 w-5 rounded transition duration-300 ${
                                            isNavOpen ? 'rotate-45 translate-y-1.5' : ''
                                        } bg-sky-900 dark:bg-gray-300`}
                                    ></div>
                                    <div
                                        aria-hidden="true"
                                        className={`m-auto mt-2 h-0.5 w-5 rounded transition duration-300 ${
                                            isNavOpen ? '-rotate-45 -translate-y-1' : ''
                                        } bg-sky-900 dark:bg-gray-300`}
                                    ></div>
                                </button>
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className={`fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 lg:hidden dark:bg-gray-900/70 ${
                                isNavOpen ? 'scale-y-100' : ''
                            }`}
                        ></div>

                        <div
                            className={`flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none  ${
                                isNavOpen ? 'visible opacity-100 scale-100  shadow-none bg-gray-800 border-gray-700' : ''
                            }`}
                        >
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                <ul className="tracking-wide font-medium lg:text-md flex-col flex lg:flex-row gap-6 lg:gap-0">
                                    <li>
                                        <Link href="/templates" className="block md:px-4 transition hover:text-[#9333ea]">
                                            <span>Templates</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs" className="block md:px-4 transition hover:text-[#9333ea]">
                                            <span>Blogs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="block md:px-4 transition hover:text-[#9333ea]">
                                            <span>Pricing</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <Link
                                    href="/editor"
                                    className=" bg-[#9333EA] relative flex h-9 w-full items-center justify-center px-4 before:absolute inset-0 rounded-full before:text-[#9333ea] transition duration-300 hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
                                >
                                    <span className="relative text-sm font-semibold text-white">Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
}
