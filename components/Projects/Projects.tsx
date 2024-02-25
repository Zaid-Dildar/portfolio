"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [yelpcampImgUrl, setYelpcampImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [aspiringImgUrl, setAspiringImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [infinityImgUrl, setInfinityImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response: Response = await fetch("../../api/projects");
    if (response.ok) {
      const data: {
        urls: { yelpcampImg: string; aspiringImg: string; infinityImg: string };
      } = await response.json();
      setYelpcampImgUrl(data.urls.yelpcampImg);
      setAspiringImgUrl(data.urls.aspiringImg);
      setInfinityImgUrl(data.urls.infinityImg);
    }
  };
  return (
    <div>
      <h2 className="text-2xl text-center font-bold underline mt-8">
        Project 1
      </h2>
      <div className="h-120 bg-white dark:bg-gray-200 rounded-3xl border-4 border-gray-800 shadow-md overflow-hidden md:max-w-2xl mt-2 ml-2 mr-2 sm:mx-auto">
        <div className="rounded-xl">
          <img
            id="yelpcampImage"
            className="h-56 w-full object-cover md:h-full md:w-full rounded-t-xl"
            src={yelpcampImgUrl}
            alt="Modern building architecture"
          />
        </div>
        <div className="h-100 p-8">
          <div className="uppercase tracking-wide text-md text-black font-semibold mb-2">
            YelpCamp
          </div>
          <Link
            href="https://yelp-camp-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Visit website
          </Link>
          <p className="mt-2 text-slate-500">
            This was the first ever compelete web application that I built from
            scratch. This web app is a yelp page for campgrounds where user can
            register and then add different campgrounds. Other reistered users
            can give their own reviews on campgrounds.
            <span className="hidden md:inline">
              I built this web app using vanilla javascript(i.e. no js
              framework). Additionally,I used mongodb to store data about users
              and campgrounds. For every resource request, my server returns an
              ejs(embeded javascript) file which is then rendered by the
              browser.
            </span>
          </p>
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold underline mt-8">
        Project 2
      </h2>
      <div className="h-120 bg-white dark:bg-gray-200 rounded-3xl border-4 border-gray-800 shadow-md overflow-hidden md:max-w-2xl mt-2 ml-2 mr-2 sm:mx-auto mb-4">
        <div className="rounded-xl">
          <img
            id="aspiringImage"
            className="h-56 w-full md:h-full md:w-full rounded-t-xl"
            src={aspiringImgUrl}
            alt="Modern building architecture"
          />
        </div>
        <div className="h-100 p-8">
          <div className="uppercase tracking-wide text-md text-black font-semibold mb-2">
            Aspiring Future Consultancy
          </div>
          <Link
            href="https://aspiring-future-consultancy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Visit website
          </Link>
          <p className="mt-2 text-slate-500">
            I built this web app using the NEXT js framework.In this app I used
            firebase to store data about registered users. This web app allows
            students who aspire to study abroad register and get adviced by
            experienced career counselors.
            <span className="hidden md:inline">
              People who visit the website can view different universities in
              their favourite study destinations and decide accordingly.
            </span>
          </p>
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold underline mt-8">
        Project 3
      </h2>
      <div className="h-120 bg-white dark:bg-gray-200 rounded-3xl border-4 border-gray-800 shadow-md overflow-hidden md:max-w-2xl mt-2 ml-2 mr-2 sm:mx-auto mb-4">
        <div className="rounded-xl">
          <img
            id="infinityImage"
            className="h-56 w-full md:h-full md:w-full rounded-t-xl"
            src={infinityImgUrl}
            alt="Modern building architecture"
          />
        </div>
        <div className="h-100 p-8">
          <div className="uppercase tracking-wide text-md text-black font-semibold mb-2">
            Infinity
          </div>
          <Link
            href="https://infinity-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Visit website
          </Link>
          <p className="mt-2 text-slate-500">
            I built this web app once again using the NEXT js framework and I
            used firebase to store data about registered users. This web app
            allows users to share posts which could contain images or videos
            with other users. Users can also send and receive texts from other
            users.
            <span className="hidden md:inline">
              The images/videos are stored on cloudinary and their corresponding
              URls are stored in the database. Additionally for designing the
              front end I used tailwind css along with flowbite.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
