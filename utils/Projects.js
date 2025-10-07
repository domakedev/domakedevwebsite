import TigodImg from "@/assets/projects/tigod.png";
import PortafolioImg from "@/assets/projects/portafolio.png";
import MERNTasksImg from "@/assets/projects/mern-tasks.png";
import ZupportImg from "@/assets/projects/zupport.png";
import RepasoActivo from "@/assets/projects/repaso-activo.png";
import Dejardejugarlol from "@/assets/projects/dejardejugarlol.png";
import Tokitask from "@/assets/projects/tokitask.png";

const projects = [
  //   {
  //     title: "Portafolio",
  //     img: PortafolioImg,
  //     active: true,
  //     techs: ["nextJs", "react", "javascript", "git", "css"],
  //     links: {
  //       github: "https://github.com/domakedev/domakedevwebsite",
  //       web: "https://domakedev.com",
  //       summary: "",
  //     },
  //   },
  {
    title: "TIGOD",
    img: TigodImg,
    active: false,
    description: "👩‍🎓Plataforma orientada a la orientación vocacional.",
    techs: [
      // 'html',
      // 'css',
      "git",
      "react",
      "javascript",
      "axios",
      "apolloGraphQL",
      "jest",
      "redux",
      "nodeJs",
      "mongoDb",
      "expressJs",
      "mongoose",
    ],
    links: {
      github: "https://github.com/domakedev/tigod",
      web: "https://tigod.netlify.app/",
      summary: "",
    },
  },
  {
    title: "Tasks",
    img: MERNTasksImg,
    active: false,
    description: "✍️Plataforma para crear proyectos y tareas.",
    techs: [
      "html",
      "css",
      "git",
      "react",
      "javascript",
      "axios",
      "jest",
      "nodeJs",
      "mongoDb",
      "expressJs",
      "mongoose",
      "jwt",
    ],
    links: {
      github: "https://github.com/domakedev/Mern-tasks-cliente",
      web: "https://merntasks-cliente-domakedev.netlify.app/",
      summary: "",
    },
  },
  ,
  {
    title: "Zupport",
    img: ZupportImg,
    active: false,
    description: "🗺️Plataforma para crear comunidades y ayudar.",
    techs: [
      "html",
      "css",
      "git",
      "esLint",
      "prettier",
      "react",
      "javascript",
      "redux",
      "axios",
      "nodeJs",
      "mongoDb",
      "expressJs",
      "mongoose",
      "jwt",
    ],
    links: {
      github: "https://github.com/domakedev/zupport-cliente/tree/dev",
      web: "https://zupport.netlify.app/",
      summary: "",
    },
  },
  {
    title: "Repaso Activo",
    img: RepasoActivo,
    active: true,
    description: "📚Plataforma para estudiar y crear apuntes.",
    techs: [
      "html",
      "css",
      "git",
      "esLint",
      "prettier",
      "javascript",
      "react",
      "nextJs",
      "tailwindCss",
      "redux",
      "jwt",
      "postgresql",
      "prisma",
    ],
    links: {
      github: "https://github.com/domakedev/recallcards-frontend",
      web: "https://www.repasoactivo.com/",
      summary: "",
    },
  },
  {
    title: "dejardejugarlol",
    img: Dejardejugarlol,
    active: true,
    description: "🎮 App para controlar el tiempo de juego.",
    techs: [
      "html",
      "css",
      "git",
      "javascript",
      "react",
      "nextJs",
      "tailwindCss",
      "typescript",
      "firebase"
    ],
    links: {
      github: "https://github.com/domakedev/afk-lol",
      web: "https://www.dejardejugarlol.com/",
      summary: "App para controlar el tiempo de juego en League of Legends.",
    },
  },
  {
    title: "TokiTask",
    img: Tokitask,
    active: true,
    description: "⌛Organiza tu tiempo y rastrea hábitos",
    techs: [
      "html",
      "css",
      "git",
      "javascript",
      "react",
      "nextJs",
      "tailwindCss",
      "typescript",
      "firebase"
    ],
    links: {
      github: "https://github.com/domakedev/tokitask",
      web: "https://www.tokitask.com/",
      summary: "",
    },
  },
];

export default projects;
