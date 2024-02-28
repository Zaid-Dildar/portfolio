"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gray-800 text-white py-1 px-2 max-sm:pb-3 lg:px-4">
      <div className="container mx-auto flex max-md:flex-col justify-between items-center">
        <div className="flex items-center">
          <img
            id="navbarImage"
            src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488892/Portfolio/portfolioImg_rpcxyk.jpg"
            alt="Your Name"
            className="w-14 h-14 mr-2 rounded-full"
          />
          <h1 className="text-2xl font-bold">Muhammad Zaid Dildar</h1>
        </div>
        <nav className="space-x-3 rounded-md max-md:mt-2">
          <Link
            href="/"
            className={`p-2 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`p-2 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/about" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/skills"
            className={`p-2 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/skills" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`p-2 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/projects" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
