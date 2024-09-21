"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-ebony text-wild_sand fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"}>
          <h1 className="text-2xl text-wild_sand font-semibold hover:text-sandrift active:text-sandrift transition">
            Giggles N Shit --Blog
          </h1>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              href="/"
              className="hover:underline hover:text-sandrift active:text-sandrift text-wild_sand font-bold px-3 py-2 transition"
              aria-current="page"
            >
              Home
            </Link>
            <a
              href="https://www.instagram.com/instagingagram"
              className="hover:text-sandrift active:text-sandrift text-wild_sand font-bold px-3 py-2 transition text-2xl mx-auto"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/GingaRanga"
              className="hover:text-sandrift active:text-sandrift text-wild_sand font-bold px-3 py-2 transition text-2xl mx-auto"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
