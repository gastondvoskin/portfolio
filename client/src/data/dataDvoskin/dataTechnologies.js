import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
// import { SiReact } from "react-icons/si";               /* Search MaterialUI */
import { SiBootstrap } from "react-icons/si";
import { SiFigma } from "react-icons/si";


import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
// import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";


/* array of objects instead of an array of strings to access the names and map an icon, no matter the order of the elements in the array */
export const LANGUAGES = [
  { name: "JavaScript", Icon: SiJavascript, className: "text-yellow-500 bg-black" },
  { name: "TypeScript", Icon: SiTypescript, className: "text-blue-400 bg-black" },
];

export const FRONT = [
  { name: "React", Icon: SiReact, className: "text-blue-400" },
  { name: "Redux", Icon: SiRedux, className: "text-violet-700" },
  // { name: "NextJs", Icon: TbBrandNextjs, className: "text-gray-900 dark:text-gray-300" },
  { name: "Tailwind", Icon: SiTailwindcss, className: "text-blue-600" },
  { name: "Figma", Icon: SiFigma, className: "text-red-600" },
  /* { name: "MaterialUI", Icon: SiJavascript }, */
  { name: "Bootstrap", Icon: SiBootstrap, className: "text-violet-600" },
];

export const BACK = [
  { name: "NodeJs", Icon: BiLogoNodejs, className: "text-gray-800 dark:text-gray-100" },
  { name: "Express", Icon: SiExpress, className: "text-gray-800 dark:text-gray-300" },
  { name: "Sequelize", Icon: SiSequelize, className: "text-blue-600 dark:text-blue-400" },
  // { name: "Prisma", Icon: SiPrisma, className: "text-gray-900 dark:text-gray-200" },
  /* { name: "SQLite", Icon: SiSqlite }, */
  // { name: "PostgreSQL", Icon: SiPostgresql, className: "text-blue-700 dark:text-blue-400" },
];

// Databases: ["PostgreSQL"];
