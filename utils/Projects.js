import TigodImg from "@/assets/projects/tigod.png"
import PortafolioImg from "@/assets/projects/portafolio.png"
import MERNTasks from "@/assets/projects/mern-tasks.png"

const projects = [ {
    title: 'Portafolio',
    img: PortafolioImg,
    active: true,
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
    active: false,
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
}, {
    title: 'Tasks',
    img: MERNTasks,
    active: true,
    techs: [
        'html',
        'css',
        'git',
        'react',
        'javascript',
        'axios',
        'jest',
        'nodeJs',
        'mongoDb',
        'expressJs',
        'mongoose',
        'jwt',
    ],
    links: {
        github: 'https://github.com/domakedev/Mern-tasks-cliente',
        web: 'https://merntasks-cliente-domakedev.netlify.app/',
        summary: ""
    }
} ]

export default projects