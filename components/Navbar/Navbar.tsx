"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [imgUrl, setImgUrl] = useState<string>(
    "https://tse1.mm.bing.net/th?id=OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106"
  );
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response: Response = await fetch("../../api/home");
    if (response.ok) {
      const data: {
        urls: { navbarImg: string };
      } = await response.json();
      setImgUrl(data.urls.navbarImg);
      // setImgUrl(response.imgUrl);
    }
  };

  const pathname = usePathname();
  return (
    <header className="bg-gray-800 text-white py-4 px-2 lg:px-4">
      <div className="container mx-auto flex max-md:flex-col justify-between items-center">
        <div className="flex items-center">
          <img
            id="navbarImage"
            src={imgUrl}
            alt="Your Name"
            className="w-10 h-10 mr-2 rounded-full"
          />
          <h1 className="text-2xl font-bold">Muhammad Zaid Dildar</h1>
        </div>
        <nav className="space-x-3 rounded-md max-md:mt-2">
          <Link
            href="/"
            className={`p-2 pb-3 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`p-2 pb-3 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/about" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/skills"
            className={`p-2 pb-3 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
              pathname === "/skills" && "text-blue-400 focus:text-blue-400"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`p-2 pb-3 px-3 rounded-md hover:text-gray-300 hover:bg-gray-700 ${
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
