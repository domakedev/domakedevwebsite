'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/proyecto-ejemplo.png'
import TechPill from '../TechPill/TechPill'
import WebIconWhite from "@/assets/web-white.svg"
import GHIconWhite from "@/assets/github-white.svg"
import SummaryIconWhite from "@/assets/summary-white.svg"
import EyeIcon from "@/assets/eye.svg"

import Swal from 'sweetalert2'


const ProjectCard = ({ project }) => {
    return (
        <div className='w-[200px] h-[236px] bg-black rounded-[18px] p-3 flex flex-col items-center justify-between
        
        sm:w-[505px] sm:h-[251px] sm:flex-row-reverse
        
        md:w-[700px] md:h-[348px] md:p-5
        
        '>
            <Image
                alt='lala'
                src={project?.img || Logo}
                className='w-[175px] h-[124px] object-cover rounded-md
                 
                sm:w-[317px] sm:h-[225px]
                
                md:w-[439px] md:h-full  
                '
            />

            <div className="flex flex-row justify-between w-full h-[82px] 
            
            sm:h-full sm:flex-col-reverse sm:justify-end

            md:justify-between
            ">
                <div className="flex flex-col w-full h-full gap-2
                
                sm:h-auto sm:gap-0 sm:mt-[57px]

                md:mt-0
                ">
                    <div className="font-bold text-lg text-white -mt-1 mb-1 
                    
                    sm:text-3xl sm:mb-0

                    md:mb-0
                    ">
                        {project?.title}
                    </div>
                    <button className="hidden max-w-[94px] min-h-[26px] bg-yellow rounded-sm text-xs 
                    
                    sm:flex justify-center items-center gap-1
                    md:mb-12 md:min-w-[130px] md:h-[37px] md:text-base"                        onClick={() => Swal.fire("Pagina de detalles en construcción...")}
                    >
                        Ver más
                        <Image
                            src={EyeIcon}
                            alt='Icono de web'
                            width={13}
                        />
                    </button>

                    <div className="flex flex-wrap gap-1 max-h-[120px] overflow-y-auto scroll-personalizado
                    
                    sm:max-h-[60px] sm:mt-[27px] sm:mr-2 sm:items-start
                    md:mt-0 md:max-h-[100px] md:min-h-[100px]
                    md:items-center md:content-start
                    ">
                        {project?.techs?.map((tech, index) => (
                            <TechPill key={index} techName={tech} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center gap-2 min-w-[30px] px-[5px]
                
                sm:flex-row sm:justify-start
                md:gap-6

                ">
                    <a href={project?.links?.web} target='_blank'>
                        <Image
                            src={WebIconWhite}
                            alt='Icono de web'
                            width={20}
                            className='sm:w-[25px] md:w-[34px] '
                        />
                    </a>
                    <a href={project?.links?.github} target='_blank'>
                        <Image
                            src={GHIconWhite}
                            alt='Icono de web'
                            width={20}
                            className='sm:w-[25px] md:w-[34px]'

                        />
                    </a>

                    <a href={project?.links?.summary} target='_blank'>
                        <Image
                            src={SummaryIconWhite}
                            alt='Icono de web'
                            width={20}
                            className='hidden'

                        />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
