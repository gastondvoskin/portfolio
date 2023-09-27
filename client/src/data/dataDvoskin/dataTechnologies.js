import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
// import { SiReact } from "react-icons/si";               /* Search MaterialUI */
import { SiBootstrap } from "react-icons/si";

import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
// import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";


/* array of objects instead of an array of strings to access the names and map an icon, no matter the order of the elements in the array */
export const LANGUAGES = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
];

export const FRONT = [
  { name: "React", Icon: SiReact },
  { name: "Redux", Icon: SiRedux },
  { name: "NextJs", Icon: TbBrandNextjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  /* { name: "MaterialUI", Icon: SiJavascript }, */
  { name: "Bootstrap", Icon: SiBootstrap },
];

export const BACK = [
  { name: "NodeJs", Icon: BiLogoNodejs },
  { name: "Express", Icon: SiExpress },
  { name: "Sequelize", Icon: SiSequelize },
  { name: "Prisma", Icon: SiPrisma },
  /* { name: "SQLite", Icon: SiSqlite }, */
  { name: "PostgreSQL", Icon: SiPostgresql },
];

// Databases: ["PostgreSQL"];
