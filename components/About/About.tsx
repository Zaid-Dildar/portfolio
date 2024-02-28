"use client";

import React from "react";

const About = () => {
  const aboutInfo =
    '{\n "age":21,\n "contact":"03064069779",\n "gender":"male",\n "location":"Lahore, Pakistan",\n "name":"Muhammad Zaid Dildar",\n}';
  return (
    <div className="container flex-1 mx-auto my-8 px-2 lg:px-4">
      <h2 className="text-4xl text-center font-bold mb-4">About Me</h2>
      <div className="flex justify-center mb-4">
        <pre className="lg:text-lg px-4 text-black  dark:text-white">
          {aboutInfo}
        </pre>
      </div>
      <h3 className="lg:px-40 text-2xl font-bold mb-2">Education</h3>
      <p className="text-md lg:px-40 leading-7 text-gray-700 dark:text-gray-200">
        I compeleted my secondary and higher secondary education from
        beaconhouse school system scoring straight A's in both O level's and A
        level's. Right now I am a student of bachelors in software engineering
        in National University of Sciences and Technology (NUST).
      </p>
      <h3 className="lg:px-40 text-2xl font-bold mb-2 mt-4 ">
        Interests and Hobbies
      </h3>
      <p className="text-md lg:px-40 leading-7 text-gray-700 dark:text-gray-200">
        I am very fond of travelling and I make sure to travel every opportunity
        I get to discover scenic landscapes in remote areas. Additionally, I
        have been a sports lover since my childhood. My favourite sports are
        football and cricket. I also enjoy playing vedio games like fifa.
      </p>
      <h3 className="lg:px-40 text-2xl font-bold mb-2 mt-4">
        Personal Philosophy
      </h3>
      <p className="text-md lg:px-40 leading-7 text-gray-700 dark:text-gray-200">
        I have always beleived in living in the moment not worrying about what
        the future holds. I try to help other in any way I can. For my work my
        basic principal is to always fulfill my commitments and never give false
        hopes to anyone. I follow this principal as I prefer quality over
        quantity.
      </p>
    </div>
  );
};

export default About;
