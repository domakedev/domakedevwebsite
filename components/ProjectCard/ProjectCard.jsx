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
import Tooltip from '../Tooltip/Tooltip'


const ProjectCard = ({ project }) => {
    return (
        <div className='w-[200px] h-[236px] bg-black rounded-[18px] p-3 flex flex-col items-center justify-between relative
        
        sm:w-[505px] sm:h-[251px] sm:flex-row-reverse
        
        md:w-[700px] md:h-[348px] md:p-5
        
        '>
            <a href={project?.links?.web} className='w-[175px] h-[124px] 
                
                sm:min-w-[317px] sm:h-[225px]
                
                md:min-w-[439px] md:h-full  
                '
                target='_blank'
            >

                <Image
                    alt='Imagen del proyecto'
                    src={project?.img || Logo}
                    className='object-cover rounded-md min-w-full h-full              
                '
                />
            </a>

            <div className="flex flex-row justify-between w-full h-[82px] 
            
            sm:h-full sm:flex-col-reverse sm:justify-end

            md:justify-between
            ">
                <div className="flex flex-col w-full h-full gap-2
                
                sm:h-auto sm:gap-0 sm:mt-[57px]

                md:mt-0
                ">
                    <div className=" flex justify-start gap-2
                    
                    sm:mb-0

                    md:mb-0
                    ">

                        <p className='font-bold text-lg text-white -mt-1 mb-1 
                    
                    sm:text-3xl sm:mb-0

                    md:mb-0'>
                            {project?.title}
                        </p>
                        <p
                            className={`text-xs py-[2px] px-[6px]  w-fit h-5 rounded-sm ${project?.active ? "bg-green text-white" : "bg-yellow text-black"}
                    
                        sm:hidden sm:leading-[18px]
                        md:text-sm md:py-[4px] md:px-[8px] md:leading-[12px]
                        `}>
                            {project?.active ? "Online" : "Offline"}
                        </p>

                    </div>
                    <button
                        className="hidden max-w-[94px] min-h-[26px] bg-yellow rounded-sm text-xs  
                    
                        sm:flex justify-center items-center gap-1
                        md:mb-12 md:min-w-[130px] md:h-[37px] md:text-base"

                        onClick={() => Swal.fire("Pagina de detalles en construcción...")}
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
                
                sm:flex-row sm:justify-start sm:pl-0 sm:gap-0
                md:gap-2

                ">
                    <Tooltip text={project?.active ? "Puedes usar la app ✅" : "En mantenimiento 🧹"}>

                        <p
                            className={`hidden text-xs py-[2px] px-[6px]  w-fit h-5 rounded-sm ${project?.active ? "bg-green text-white" : "bg-yellow text-black"}
                        
                        sm:block sm:leading-[16px]
                        md:text-sm md:py-[4px] md:px-[8px] md:leading-[14px]
                        `}>
                            {project?.active ? "Online" : "Offline"}
                        </p>
                    </Tooltip>


                    <a href={project?.links?.summary} target='_blank'>
                        <Tooltip text="Visitar la app">
                            <Image
                                src={SummaryIconWhite}
                                alt='Icono de web'
                                width={20}
                                className='hidden'

                            />
                        </Tooltip>
                    </a>



                    {/* <a href={project?.links?.web} target='_blank'>
                        <Image
                            src={WebIconWhite}
                            alt='Icono de web'
                            width={20}
                            className='sm:w-[25px] md:w-[34px] '
                        />
                    </a> */}
                    <Tooltip text="Ver código 🐱🐙">

                    <a href={project?.links?.github} target='_blank'>
                        <Image
                            src={GHIconWhite}
                            alt='Icono de web'
                            width={20}
                            className='sm:w-[25px] md:w-[34px]'

                        />
                    </a>
                    </Tooltip>



                </div>
            </div>
        </div>
    )
}

export default ProjectCard
