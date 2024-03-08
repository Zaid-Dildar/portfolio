import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yelpcampImg from "@/public/yelpcamp.png";
import afcImg from "@/public/afc.png";
import infinityImg from "@/public/infinity.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Lahore, Pakistan",
    description:
      "I graduated after 6 months of studying. I immediately started building projects as a front-end developer to enhance my skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Lahore, Pakistan",
    description:
      "I worked as a front-end developer for 3 years remotely. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "YelpCamp",
    description:
      "I worked as a full-stack developer on this project. Users can give their feedback on campgrounds they have visited.",
    tags: ["EJS", "Node.js", "MongoDB", "Bootstrap", "Express"],
    imageUrl: yelpcampImg,
    link: "https://yelp-camp-omega.vercel.app/",
  },
  {
    title: "Aspiring Future Consultancy",
    description:
      "Students who want to study abroad can register and later will be contacted by professional consultants.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: afcImg,
    link: "https://aspiring-future-consultancy.vercel.app",
  },
  {
    title: "Infinity",
    description:
      "A public web socila media app. It allows users to add friends and share posts.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Framer"],
    imageUrl: infinityImg,
    link: "https://infinity-iota.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Flowbite",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "Express",
  "Cloudinary",
  "Firebase",
  "Framer Motion",
] as const;
