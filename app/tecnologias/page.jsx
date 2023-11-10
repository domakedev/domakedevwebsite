import Image from 'next/image'
import TechCard from '@/components/TechCard/TechCard'
import FrontendIcon from '@/assets/frontend-icon.svg'
import GitLogo from "@/assets/git.svg"
import CSSLogo from '@/assets/css.svg'

const page = () => {

    const TechsList = [ {
        img: CSSLogo,
        techName: 'CSS',
        techColor: "bg-css"
    }, {
        img: GitLogo,
        techName: 'Git',
        techColor: "bg-git"
    }, {
        img: CSSLogo,
        techName: 'CSS',
        techColor: "bg-css"
    }, {
        img: GitLogo,
        techName: 'Git',
        techColor: "bg-git"
    }
    ]

    return (
        <div className='px-7 w-full h-full flex justify-center items-center flex-col'>
            {/* Titulo */}
            <div className='mt-[33px] self-start'>
                <span className='text-sm'>Principales</span>
                <h1 className='text-3xl font-bold'>Tecnologías</h1>
            </div>
            {/* Seccion de Techs */}
            <div className='w-[284px] h-[443px] bg-gradient-to-r from-light-blue from-0% via-red via-80% to-yellow to-100% rounded-[18px] mt-[17px] mb-[48px] overflow-y-scroll'>
                {/* /// Titulo */}
                <div className='flex justify-center gap-4 mt-4 items-center'>
                    <h2 className='text-white font-bold text-2xl'>FRONTEND</h2>

                    <Image
                        src={FrontendIcon}
                        alt='Frontend icono'
                    />
                </div>
                {/* /// TechCards */}
                <div className="mt-[26px] flex flex-col items-center gap-5">
                    {/* TechCard */}
                    {TechsList.map((tech, index) => (
                        <TechCard
                            key={index}
                            img={tech.img}
                            techName={tech.techName}
                            techColor={tech.techColor}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default page



