import React from "react";
import Link from "next/link";
import { FacebookIcon, WhatsAppIcon, InstagramIcon } from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen bg-gray-800 text-white py-4">
      <div className="container flex text-center">
        <p className="mx-auto my-auto">&copy; 2024 M.Zaid Dildar</p>
        <span className="flex mr-5">
          <Link
            href="https://www.facebook.com/rzdildar?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://wa.me/03064069779"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <WhatsAppIcon />
          </Link>
          <Link
            href="https://www.instagram.com/rana_zaid.02?igsh=MXVvcWRwOWd1M2htNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <InstagramIcon />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
