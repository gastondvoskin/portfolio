import videogameshubImg from "../../assets/projectsImages/videogameshubImg.png";
import viandaexpressImg from "../../assets/projectsImages/viandaexpressImg.png";
import brendadvoskinImg from "../../assets/projectsImages/brendadvoskinImg.png";
import portfolioImg from "../../assets/projectsImages/portfolioImg.png";
import vibiImg from "../../assets/projectsImages/vibiImg.png";

const dataDvoskinProjects = [
  {
    name: "Vibi",
    description:
      "Vibi is a startup committed to democratizing access to the first home in Peru. This web is under construction",
    technologies: [
      "TypeScript",
      "React",
      "NextJS",
      "Tailwind",
      "Figma",
      "NodeJs",
      "Express",
      "Prisma",
    ],
    tasks: [

    ],
    deploy: "https://vi-373evpjot-eugeniagramajo-s-team.vercel.app/home",
    youtube:
      "",
    repository: "https://github.com/EugeniaGramajo/vibi",
    image: vibiImg,
  },

  {
    name: "Videogames Hub",
    description:
      "Development of an individual full-stack application with the aim of rendering and filtering video games from an API and a proprietary database.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "CSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    tasks: [
      "Complete the entire full-stack application individually following the guidelines specified by Soy Henry",
    ],
    deploy: "https://videogameshub.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=nJ4NmMCn320&t=3s&ab_channel=Gast%C3%B3nDvoskin",
    repository: "https://github.com/gastondvoskin/PI-Videogames",
    image: videogameshubImg,
  },

  {
    name: "Vianda express",
    description:
      "Development of a healthy meal Ecommerce platform that allows customers to filter, add products to their cart, make online purchases, edit their data, access their favorites, and leave reviews. The admin can view statistics, manage orders, and make modifications to the products.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "ToolKit",
      "CSS",
      "Auth0",
      "Sweet Alert",
      "Font Awesome",
      "NodeJs",
      "Express",
      "NodeMailer",
      "MercadoPago",
      "Cloudinary",
      "PostgreSQL",
      "Sequelize",
    ],
    tasks: [
      "Diagrama E/R",
      "Desarrollo de diversos EndPoints para el funcionamiento de la app",
      "Implementacion de Cludinary en los EndPoints necesarios",
      "Desarrollo de gran parte del Panel Administrativo",
      "Filtros combinados en el front tanto para el cliente como para el administrador",
      "Implementacion de Graficos para el administrador con NivoCharts",
    ],
    deploy: "https://viandaexpress.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=9LU6qFour2M&ab_channel=SilvioJuarez",
    repository: "https://www.github.com/gastondvoskin/PFecommerce11B",
    image: viandaexpressImg,
  },


  {
    name: "Brenda Dvoskin",
    description:
      "Front-end development of Brenda Dvoskin's portfolio, the first Argentine woman in becoming Doctor in Law graduated from Harvard Law School",
    technologies: [
      "JavaScript",
      "React",
      "CSS",
    ],
    tasks: [
      "Complete the entire front-end application",
    ],
    deploy: "",
    youtube:
      "",
    repository: "https://github.com/gastondvoskin/Brenda-Dvoskin-Web.git",
    image: brendadvoskinImg,
  },

  {
    name: "Portfolio",
    description:
      "This portoflio was developed from scratch by Gastón Dvoskin and Santiago Rovaletti.",
    technologies: [
      "JavaScript",
      "React",
      "Tailwind",
      "Font Awesome",
      "NodeJs",
      "Express",
      "NodeMailer",
      "PostgreSQL",
      "Sequelize",
    ],
    tasks: [

    ],
    deploy: "https://gaston-dvoskin.vercel.app/",
    youtube:
      "",
    repository: "https://github.com/santirova/Portfolio",
    image: portfolioImg,
  },

  
];

export { dataDvoskinProjects };
