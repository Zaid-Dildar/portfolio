"use client";

import React from "react";

const Skills = () => {
  return (
    <div className="container mx-auto my-8 px-2 lg:px-4">
      <div className="m-3">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">
          Front-end Skills
        </h2>

        <div className="md:grid grid-cols-2 gap-2">
          <div className="border-2 border-gray-800 rounded p-2 mb-8 md:mb-0">
            <figure>
              <img
                id="htmlImage"
                className="m-auto h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488889/Portfolio/html_mvyrvl.png"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                Hyper Text Markup Language(HTML)
              </figcaption>
            </figure>
          </div>
          <div className="border-2 border-gray-800 rounded p-2 mb-8 md:mb-0">
            <figure>
              <img
                id="cssImage"
                className="m-auto h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488889/Portfolio/css_ubegc4.png"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                Cascading Style Sheets(CSS)
              </figcaption>
            </figure>
          </div>
          <div className="border-2 border-gray-800 rounded p-2 mb-8">
            <figure>
              <img
                id="reactImage"
                className="m-auto h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488895/Portfolio/react_bipoxh.webp"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                React js
              </figcaption>
            </figure>
          </div>
          <div className="border-2 border-gray-800 rounded p-2 mb-8">
            <figure>
              <img
                id="tailwindImage"
                className="m-auto h-64 max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488889/Portfolio/tailwind_cbjvq6.jpg"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                Tailwind
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="m-3 mt-12">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">
          Full Stack Skills
        </h2>

        <div className="md:grid grid-cols-2 gap-2">
          <div className="border-2 border-gray-800 rounded p-2 mb-8">
            <figure>
              <img
                id="nextImage"
                className="m-auto h-52 max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488891/Portfolio/next_s7oepa.jpg"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                NEXT js
              </figcaption>
            </figure>
          </div>
          <div className="border-2 border-gray-800 rounded p-2 mb-8">
            <figure>
              <img
                id="mernImage"
                className="m-auto h-52 max-w-full rounded-lg"
                src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488890/Portfolio/mern_bqh2og.jpg"
                alt=""
              />
              <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                MERN stack
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="m-3 mt-12">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">
            Data Management Skills
          </h2>

          <div className="md:grid grid-cols-2 gap-2">
            <div className="border-2 border-gray-800 rounded p-2 mb-8">
              <figure>
                <img
                  id="mongoImage"
                  className="m-auto h-52 max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488890/Portfolio/mongo_bsck1u.jpg"
                  alt=""
                />
                <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                  Mongo db
                </figcaption>
              </figure>
            </div>
            <div className="border-2 border-gray-800 rounded p-2 mb-8">
              <figure>
                <img
                  id="firebaseImage"
                  className="m-auto h-52 max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dmx66oic1/image/upload/v1706488890/Portfolio/firebase_w7p7jb.jpg"
                  alt=""
                />
                <figcaption className="mt-2 text-lg text-center font-semibold text-gray-800 dark:text-gray-400">
                  Firebase
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
