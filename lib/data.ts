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
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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
  },
  {
    title: "Aspiring Future Consultancy",
    description:
      "Students who want to study abroad can register and later will be contacted by professional consultants.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: afcImg,
  },
  {
    title: "Infinity",
    description:
      "A public web socila media app. It allows users to add friends and share posts.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Framer"],
    imageUrl: infinityImg,
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
