"use client";

import React, { useEffect, useState } from "react";

const Skills = () => {
  const [htmlImgUrl, setHtmlImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [cssImgUrl, setCssImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [reactImgUrl, setReactImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [tailwindImgUrl, setTailwindImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [nextImgUrl, setNextImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [mernImgUrl, setMernImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [mongoImgUrl, setMongoImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  const [firebaseImgUrl, setFirebaseImgUrl] = useState<string>(
    "https://tse3.mm.bing.net/th?id=OIP.vtf-jyhOiv_kTT3YF7248gHaEj&pid=Api&P=0&h=220"
  );
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response: Response = await fetch("../../api/skills");
    if (response.ok) {
      const data: {
        urls: {
          htmlImg: string;
          cssImg: string;
          reactImg: string;
          tailwindImg: string;
          nextImg: string;
          mernImg: string;
          mongoImg: string;
          firebaseImg: string;
        };
      } = await response.json();
      setHtmlImgUrl(data.urls.htmlImg);
      setCssImgUrl(data.urls.cssImg);
      setReactImgUrl(data.urls.reactImg);
      setTailwindImgUrl(data.urls.tailwindImg);
      setNextImgUrl(data.urls.nextImg);
      setMernImgUrl(data.urls.mernImg);
      setMongoImgUrl(data.urls.mongoImg);
      setFirebaseImgUrl(data.urls.firebaseImg);
    }
  };
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
                src={htmlImgUrl}
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
                src={cssImgUrl}
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
                src={reactImgUrl}
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
                src={tailwindImgUrl}
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
                src={nextImgUrl}
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
                src={mernImgUrl}
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
                  src={mongoImgUrl}
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
                  src={firebaseImgUrl}
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
