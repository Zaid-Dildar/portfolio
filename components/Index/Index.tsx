"use client";

import React, { useEffect, useState } from "react";

const Index: React.FC = () => {
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
        urls: { homeImg: string; navbarImg: string };
      } = await response.json();
      setImgUrl(data.urls.homeImg);
      // setImgUrl(response.imgUrl);
    }
  };

  return (
    <div className="container flex-1 mx-auto my-8 px-2 lg:px-4">
      <img
        id="myImage"
        src={imgUrl}
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
