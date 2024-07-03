import HTMLLogo from "@/assets/techs/frontend/html.svg";
import CSSLogo from "@/assets/techs/frontend/css.svg";
import JsLogo from "@/assets/techs/js.svg";
import ReactLogo from "@/assets/techs/frontend/react.svg";
import TailwindLogo from "@/assets/techs/frontend/tailwindcss.svg";
import NextJsLogo from "@/assets/techs/frontend/next-js.svg";
import GitLogo from "@/assets/techs/git.svg";
import ReactNativeLogo from "@/assets/techs/frontend/react-native.svg";
import ReduxLogo from "@/assets/techs/frontend/redux.svg";
import TypescriptLogo from "@/assets/techs/typescript.svg";
import NodeJsLogo from "@/assets/techs/backend/nodejs.svg";
import StyledComponentsLogo from "@/assets/techs/frontend/styled-components.png";
import ApolloGraphQLLogo from "@/assets/techs/graphql.svg";
import JestLogo from "@/assets/techs/frontend/jest.svg";
import AxiosLogo from "@/assets/techs/frontend/axios.svg";
import MongoDBLogo from "@/assets/techs/backend/mongodb.svg";
import MongooseLogo from "@/assets/techs/backend/mongoose.png";
import ExpressJsLogo from "@/assets/techs/backend/express.svg";
import JwtLogo from "@/assets/techs/jwt.svg";
import EsLintLogo from "@/assets/techs/eslint.svg";
import PrettierLogo from "@/assets/techs/prettier.svg";
import PostgreSQLLogo from "@/assets/techs/backend/postgresql.svg";
import PrismaLogo from "@/assets/techs/backend/prisma.svg";

export const logos = {
  html: HTMLLogo,
  css: CSSLogo,
  js: JsLogo,
  react: ReactLogo,
  tailwindcss: TailwindLogo,
  nextjs: NextJsLogo,
  git: GitLogo,
  reactNative: ReactNativeLogo,
  redux: ReduxLogo,
  typescript: TypescriptLogo,
  nodejs: NodeJsLogo,
  styledComponents: StyledComponentsLogo,
  apolloGraphQL: ApolloGraphQLLogo,
  jest: JestLogo,
  mongodb: MongoDBLogo,
};

const javascript = {
  img: JsLogo,
  techName: "JavaScript",
  techColor: "bg-javascript",
  contraste: true,
};
const git = {
  img: GitLogo,
  techName: "Git",
  techColor: "bg-git",
};

const html = {
  img: HTMLLogo,
  techName: "HTML",
  techColor: "bg-html",
};

const css = {
  img: CSSLogo,
  techName: "CSS",
  techColor: "bg-css",
};

const react = {
  img: ReactLogo,
  techName: "React",
  techColor: "bg-react-js",
  contraste: true,
};

const tailwindCss = {
  img: TailwindLogo,
  techName: "Tailwind",
  techColor: "bg-tailwindcss",
};

const nextJs = {
  img: NextJsLogo,
  techName: "NextJs",
  techColor: "bg-next-js",
};

const reactNative = {
  img: ReactNativeLogo,
  techName: "React Native",
  techColor: "bg-react-native",
};

const redux = {
  img: ReduxLogo,
  techName: "Redux",
  techColor: "bg-redux",
};

const typescript = {
  img: TypescriptLogo,
  techName: "Typescript",
  techColor: "bg-typescript",
};

const styledComponents = {
  img: StyledComponentsLogo,
  techName: "Styled C.",
  techColor: "bg-styled-components",
};

const apolloGraphQL = {
  img: ApolloGraphQLLogo,
  techName: "GraphQL",
  techColor: "bg-apolloGraphQL",
  contraste: true,
};

const jest = {
  img: JestLogo,
  techName: "Jest",
  techColor: "bg-jest",
};

const nodeJs = {
  img: NodeJsLogo,
  techName: "NodeJs",
  techColor: "bg-node-js",
};

const mongoDb = {
  img: MongoDBLogo,
  techName: "MongoDB",
  techColor: "bg-mongodb",
  contraste: true,
};

const axios = {
  img: AxiosLogo,
  techName: "Axios",
  techColor: "bg-axios",
};

const mongoose = {
  img: MongooseLogo,
  techName: "Mongoose",
  techColor: "bg-mongoose",
};

const esLint = {
  img: EsLintLogo,
  techName: "EsLint",
  techColor: "bg-esLint",
};
const prettier = {
  img: PrettierLogo,
  techName: "Prettier",
  techColor: "bg-prettier",
};

const expressJs = {
  img: ExpressJsLogo,
  techName: "Express",
  techColor: "bg-express-js",
};

const jwt = {
  img: JwtLogo,
  techName: "JWT",
  techColor: "bg-jwt",
};

const postgresql = {
  img: PostgreSQLLogo,
  techName: "PostgreSQL",
  techColor: "bg-postgresql",
};

const prisma = {
  img: PrismaLogo,
  techName: "Prisma",
  techColor: "bg-prisma",
};

export const allTechs = {
  javascript,
  git,
  html,
  css,
  react,
  tailwindCss,
  nextJs,
  reactNative,
  redux,
  typescript,
  styledComponents,
  apolloGraphQL,
  jest,
  nodeJs,
  mongoDb,
  axios,
  expressJs,
  mongoose,
  jwt,
  esLint,
  prettier,
  postgresql,
  prisma,
};

export const basicTechs = [javascript, git, esLint, prettier];

export const frontendTechs = [
  html,
  css,
  react,
  tailwindCss,
  nextJs,
  reactNative,
  redux,
  typescript,
  styledComponents,
  apolloGraphQL,
  jest,
  axios,
  jwt,
];

export const backendTechs = [
  typescript,
  nodeJs,
  apolloGraphQL,
  mongoDb,
  mongoose,
  expressJs,
  jwt,
  postgresql,
  prisma,
];
