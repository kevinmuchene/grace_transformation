"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center bg-white rounded-xl shadow-lg py-3 w-full">
      {/* Mobile toggle button */}
      <button
        className="md:hidden text-blue-700 hover:text-blue-900 focus:outline-none z-10 p-1 "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5h16M4 12h16M4 19h16"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Navigation links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:static top-full left-0 m-2 rounded-lg bg-gray-400 md:bg-transparent w-full md:flex md:justify-center md:items-center md:space-x-8 mt-2 md:mt-0 z-20`}
      >
        <Link
          href="/message"
          className="block text-black hover:text-gray-800 md:py-0 py-2 px-4 md:px-0 text-lg"
        >
          Message
        </Link>

        <Link
          href="/contact"
          className="block text-black hover:text-gray-800 md:py-0 py-2 px-4 md:px-0 text-lg"
        >
          Contact
        </Link>
        <Link
          href="/give"
          className="block text-black hover:text-gray-800 md:py-0 py-2 px-4 md:px-0 text-lg"
        >
          Give
        </Link>
      </nav>
    </header>
  );
};

export default Header;
