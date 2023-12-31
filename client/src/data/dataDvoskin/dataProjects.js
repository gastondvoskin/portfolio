import videogameshubImg from "../../assets/projectsImages/videogameshubImg.png";
import viandaexpressImg from "../../assets/projectsImages/viandaexpressImg.png";
// import brendadvoskinImg from "../../assets/projectsImages/brendadvoskinImg.png";
import portfolioImg from "../../assets/projectsImages/portfolioImg.png";
import vibiImg from "../../assets/projectsImages/vibiImg.png";

const dataDvoskinProjects = [
  {
    name: "Vibi",
    description:
      "Vibi is a startup dedicated to democratizing access to first homes in Peru. During my internship at Vibi, I served as a Front-end Developer, responsible for rendering the 'Comprar' section. This section encompasses property listings, their details, and various filters. Please note that this website is currently under construction.",
    technologies: ["TypeScript", "React", "NextJS", "Tailwind", "Figma", "NodeJs", "Express", "Prisma"],
    deploy: "https://vibi.vercel.app",
    youtube: "",
    repository: "https://github.com/gastondvoskin/vibi",
    image: vibiImg,
  },

  {
    name: "Videogames Hub",
    description:
      "Development of an individual full-stack application with the aim of rendering and filtering video games from an API and a proprietary database.",
    technologies: ["JavaScript", "React", "Redux", "CSS", "NodeJs", "Express", "PostgreSQL", "Sequelize"],
    deploy: "https://videogameshub.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=nJ4NmMCn320&ab_channel=Gast%C3%B3nDvoskin",
    repository: "https://github.com/gastondvoskin/PI-Videogames",
    image: videogameshubImg,
  },

  {
    name: "Vianda express",
    description:
      "Development of a healthy meal Ecommerce platform that allows customers to filter, add products to their cart, make online purchases, edit their data, access their favorites, and leave reviews. The admin can view statistics, manage orders, and make modifications to the products.",
    technologies: ["JavaScript", "React", "Redux", "ToolKit", "CSS", "Auth0", "Sweet Alert", "Font Awesome", "NodeJs", "Express", "NodeMailer", "MercadoPago", "Cloudinary", "PostgreSQL", "Sequelize"],
    deploy: "https://viandaexpress.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=9LU6qFour2M&ab_channel=SilvioJuarez",
    repository: "https://www.github.com/gastondvoskin/PFecommerce11B",
    image: viandaexpressImg,
  },

  // {
  //   name: "Brenda Dvoskin",
  //   description:
  //     "Front-end development of Brenda Dvoskin's portfolio, Doctor in Law graduated from Harvard Law School.",
  //   technologies: ["JavaScript", "React", "CSS"],
  //   deploy: "",
  //   youtube: "",
  //   repository: "https://github.com/gastondvoskin/Brenda-Dvoskin-Web.git",
  //   image: brendadvoskinImg,
  // },

  {
    name: "Portfolio",
    description:
      "Feel free to explore the repository housing my portfolio and discover the technologies I employed to build it. The portfolio offers a glimpse into my background, including a self-description, a showcase of my projects, the key technologies I utilize, along with my contact information and CV. This project features both a light and dark theme, ensuring a visually appealing experience across all devices with complete responsiveness.",
    technologies: ["JavaScript", "React", "Tailwind", "Font Awesome", "NodeJs", "Express", "NodeMailer", "PostgreSQL", "Sequelize"],
    // deploy: "https://gastondvoskin.com/",
    youtube: "",
    repository: "https://github.com/gastondvoskin/portfolio",
    image: portfolioImg,
  },
];

export { dataDvoskinProjects };
