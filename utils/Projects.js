import TigodImg from "@/assets/projects/tigod.png"
import PortafolioImg from "@/assets/projects/portafolio.png"
import { allTechs } from "./TechList"

const projects = [ {
    title: 'Portafolio',
    img: PortafolioImg,
    techs: [
        'nextJs',
        'react',
        'javascript',
        'git',
        'css',
    ],
    links: {
        github: 'https://github.com/domakedev/domakedevwebsite',
        web: 'https://domakedev.com',
        summary: ""
    }
}, {
    title: 'TIGOD',
    img: TigodImg,
    techs: [
        // 'html',
        // 'css',
        'git',
        'react',
        'javascript',
        'axios',
        'apolloGraphQL',
        'jest',
        'redux',
        'nodeJs',
        'mongoDb',
        'expressJs',
        'mongoose'
    ],
    links: {
        github: 'https://github.com/domakedev/tigod',
        web: 'https://tigod.netlify.app/',
        summary: ""
    }
} ]

export default projects