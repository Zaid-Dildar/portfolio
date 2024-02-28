"use client";

import React from "react";

const Index: React.FC = () => {
  return (
    <div className="container flex-1 mx-auto my-8 px-2 lg:px-4">
      <img
        id="myImage"
        src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706477818/Portfolio/Portoflio%20Image.jpg"
        alt="Home Image"
        className="w-80 h-80 rounded-3xl m-auto"
      />
      <p className="text-center mt-8 lg:mb-20 text-lg lg:text-xl leading-7 text-black mx-5 md:mx-20 lg:mx-40 dark:text-gray-200">
        Welcome to my portfolio home page. I'm a passionate and creative
        developer with a focus on building amazing web applications. My goal is
        to bring ideas to life through elegant and efficient code. Explore my
        projects and learn more about me on the other pages.
      </p>
    </div>
  );
};

export default Index;
