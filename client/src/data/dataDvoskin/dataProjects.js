import videogameshubImg from "../../assets/projectsImages/videogameshubImg.png";
import viandaexpressImg from "../../assets/projectsImages/viandaexpressImg.png";
// import brendadvoskinImg from "../../assets/projectsImages/brendadvoskinImg.png";
// import portfolioImg from "../../assets/projectsImages/portfolioImg.png";
import vibiImg from "../../assets/projectsImages/vibiImg.png";
import condesImg from "../../assets/projectsImages/condesImg.png";
import fornielesImg from "../../assets/projectsImages/fornielesImg.png";
import cuerdosImg from "../../assets/projectsImages/cuerdosImg.png";
import cenitImg from "../../assets/projectsImages/cenitImg.png";
import pomodoroAppImg from "../../assets/projectsImages/pomodoroAppImg.png";
import aiChatbotDemoImg from "../../assets/projectsImages/aiChatbotDemoImg.png";
import patientManagerImg from "../../assets/projectsImages/patientManagerImg.png";
import colivingBaImg from "../../assets/projectsImages/colivingBaImg.png";
import readymindPowerPlatformImg from "../../assets/projectsImages/readymindPowerPlatformImg.png";

const dataDvoskinProjects = [
  {
    name: "Readymind Power Platform",
    description:
      "Implemented the front-end of the corporate page for Readymind focused on Microsoft Power Platform services. It highlights value proposition, service pillars, and calls to action with a modern, conversion-oriented design. This site helps the company to showcase their services and attract new clients.",
    technologies: ["JavaScript", "Astro"],
    image: readymindPowerPlatformImg,
  },

  {
    name: "AI Chatbot Demo",
    description:
      "Developed an interactive web chatbot demo that leverages the OpenAI API to enable conversational question-and-answer functionality, with support for uploading files such as PDFs and images to provide contextual responses. This tool is intended to showcase potential applications for Readymind clients.",
    technologies: ["TypeScript", "React", "NextJS", "OpenAI", "Tailwind"],
    deploy: "https://ai-playground-demo.vercel.app/multi-turn",
    image: aiChatbotDemoImg,
  },

  {
    name: "Cuerdos Vocales",
    description:
      "Developed and maintained Cuerdos Vocales site for 4 years. The site helped with the vocal group's digital presence and highlights their major achievements: performing at the Cosquín Festival (10,000+ attendees), winning awards from the National Arts Fund and National Music Institute, and recording with Teresa Parodi and Juan Quintero.",
    technologies: ["TypeScript", "React", "Tailwind"],
    deploy: "https://cuerdosvocales.com",
    // youtube: "",
    repository: "https://github.com/gastondvoskin/cuerdos-vocales",
    image: cuerdosImg,
  },


  {
    name: "Las Condes",
    description:
      "Developed the front-end of the intranet used daily by over 1,000 employees at Las Condes Municipality (Chile), which renders personalized data for each user, supporting the municipality's digital transformation. I developed and maintained this project for Readymind's client.",
    technologies: ["TypeScript", "React", "SPFx"],
    // deploy: "",
    // youtube: "",
    // repository: "",
    image: condesImg,
  },

  {
    name: "CENIT - Bot with AI",
    description:
      "Developed a chatbot for CENIT, the leading transportation and logistics company for liquid hydrocarbons in Colombia. Built using OpenAI and the Copilot Studio platform, the chatbot enables users to receive assistance, obtain information about the company's services, and submit inquiries, complaints, claims, and suggestions.",
    technologies: ["OpenAI", "Copilot Studio Platform"],
    deploy: "https://cenit-transporte.com/",
    // youtube: "",
    // repository: "",
    image: cenitImg,
  },

  {
    name: "Patient Manager",
    description:
      "Implemented a responsive dashboard for managing patient records through a card-based UI. This project was developed during a 3 days challenge.",
    technologies: ["TypeScript", "React", "Tailwind"],
    deploy: "https://light-it-challenge-front.vercel.app/",
    image: patientManagerImg,
  },

  {
    name: "Vianda express",
    description:
      "Led the front-end team of a healthy meal Ecommerce platform that allows customers to filter, add products to their cart, make online purchases, edit their data, access their favorites, and leave reviews. The admin can view statistics, manage orders, and make modifications to the products.",
    technologies: ["JavaScript", "React", "Redux", "ToolKit", "CSS", "Auth0", "Sweet Alert", "Font Awesome", "NodeJs", "Express", "NodeMailer", "MercadoPago", "Cloudinary", "PostgreSQL", "Sequelize"],
    deploy: "https://viandaexpress.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=9LU6qFour2M&ab_channel=SilvioJuarez",
    repository: "https://github.com/gastondvoskin/viandaexpress",
    image: viandaexpressImg,
  },

  {
    name: "Vibi",
    description:
      "Developed the filters and main pages of Vibi, a startup dedicated to democratizing access to first homes in Peru. During my internship at Vibi, I served as a Front-end Developer, responsible for rendering the 'Comprar' section. This section encompasses property listings, their details, and various filters. Please note that this website is currently under construction.",
    technologies: ["TypeScript", "React", "NextJS", "Tailwind", "Figma", "NodeJs", "Express", "Prisma"],
    // deploy: "https://vibi.vercel.app",
    youtube: "",
    repository: "https://github.com/gastondvoskin/vibi",
    image: vibiImg,
  },

  {
    name: "Coliving BA",
    description:
      "Developed the MVP of a property detail experience for a coliving offering in Buenos Aires, including amenities, occupancy details, and photo gallery sections. The page goal is to migrate from an Airbnb business model to a coliving business model.",
    technologies: ["JavaScript", "React", "Tailwind"],
    image: colivingBaImg,
  },

  {
    name: "Fornieles Lawyers",
    description:
      "Implemented a web app used by Fornieles Lawyers, a Readymind client. It enables conversion of contract templates into final documents through form completion, thereby enhancing enterprise productivity.",
    technologies: ["TypeScript", "React", "Redux"],
    // deploy: "",
    // youtube: "",
    // repository: "",
    image: fornielesImg, 
  },


  {
    name: "Pomodoro App",
    description:
      "Implemented a Pomodoro App with React Native, as part of a PoC for Readymind.",
    technologies: ["TypeScript", "React Native", "Expo"],
    image: pomodoroAppImg,
  },

  {
    name: "Videogames Hub",
    description:
      "Developed an individual full-stack application with the aim of rendering and filtering video games from an API and a proprietary database.",
    technologies: ["JavaScript", "React", "Redux", "CSS", "NodeJs", "Express", "PostgreSQL", "Sequelize"],
    deploy: "https://videogameshub.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=nJ4NmMCn320&ab_channel=Gast%C3%B3nDvoskin",
    repository: "https://github.com/gastondvoskin/PI-Videogames",
    image: videogameshubImg,
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

  // {
  //   name: "Portfolio",
  //   description:
  //     "Feel free to explore the repository housing my portfolio and discover the technologies I employed to build it. The portfolio offers a glimpse into my background, including a self-description, a showcase of my projects, the key technologies I utilize, along with my contact information and CV. This project features both a light and dark theme, ensuring a visually appealing experience across all devices with complete responsiveness.",
  //   technologies: ["JavaScript", "React", "Tailwind", "Font Awesome", "NodeJs", "Express", "NodeMailer", "PostgreSQL", "Sequelize"],
  //   // deploy: "https://gastondvoskin.com/",
  //   youtube: "",
  //   repository: "https://github.com/gastondvoskin/portfolio",
  //   image: portfolioImg,
  // },
];

export { dataDvoskinProjects };
