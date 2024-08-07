"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/proyecto-ejemplo.png";
import TechPill from "../TechPill/TechPill";
import WebIconWhite from "@/assets/web-white.svg";
import GHIconWhite from "@/assets/github-white.svg";
import SummaryIconWhite from "@/assets/summary-white.svg";
import EyeIcon from "@/assets/eye.svg";

import Swal from "sweetalert2";
import Tooltip from "../Tooltip/Tooltip";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-[300px]  bg-black rounded-[18px] p-3 flex flex-col items-center justify-start gap-2 relative
        
        sm:w-[550px] sm:h-[300px] sm:flex-row-reverse
        
        md:w-[700px] md:h-[348px] md:p-5
        
        "
    >
      {/* Imagen */}
      <a
        href={project?.links?.web}
        className="w-[263px] h-[186px]                 
                sm:min-w-[317px] sm:h-[225px]                
                md:min-w-[439px] md:h-full  
                "
        target="_blank"
      >
        <Image
          alt="Imagen del proyecto"
          src={project?.img || Logo}
          className="object-cover rounded-md min-w-full h-full              
                "
        />
      </a>
      {/* Titulo y techs */}
      <div
        className="flex flex-row justify-between w-full h-full        
            sm:h-full sm:flex-col-reverse sm:justify-end
            md:justify-end"
      >
        <div
          className="flex flex-col w-full h-full gap-2              
                sm:h-auto sm:gap-0 sm:mt-[57px]
                md:mt-0"
        >
          {/*  */}
          <div className="flex justify-start gap-2 items-start sm:mb-0 md:mb-0 sm:-mt-9 md:mt-10">
            <p className="text-white mb-5 sm:mb-1 flex flex-col gap-1">
              <span className="font-bold text-2xl sm:text-3xl ">
                {project?.title}
              </span>
              <span className="text-sm">{project?.description}</span>
            </p>
            <p
              className={`text-xs py-[2px] px-[6px] mt-2  w-fit h-5 rounded-sm ${
                project?.active ? "bg-green text-white" : "bg-yellow text-black"
              }
                    
                        sm:hidden sm:leading-[18px]
                        md:text-sm md:py-[4px] md:px-[8px] md:leading-[12px]
                        `}
            >
              {project?.active ? "Activo" : "Inactivo"}
            </p>
          </div>
          {/* <button
            className="hidden max-w-[94px] min-h-[26px] bg-yellow rounded-sm text-xs  
                    
                        sm:flex justify-center items-center gap-1
                        md:mb-12 md:min-w-[130px] md:h-[37px] md:text-base"
            onClick={() => Swal.fire("Pagina de detalles en construcción...")}
          >
            Ver más
            <Image src={EyeIcon} alt="Icono de web" width={13} />
          </button> */}

          <div
            className="flex flex-wrap gap-1  overflow-y-auto scroll-personalizado 
                    
                    sm:max-h-[105px] sm:mt-[27px] sm:mr- sm:items-start
                    md:mt-0 md:max-h-[144px] md:min-h-[100px]
                    md:items-center md:content-start
                    "
          >
            {project?.techs?.map((tech, index) => (
              <TechPill
                key={index}
                techName={tech}
              />
            ))}
          </div>
        </div>
        {/* Top of Card in Large */}
        <div
          className="flex flex-col justify-start items-center gap-2 min-w-[30px] px-[5px] 
                
                sm:flex-row sm:justify-start sm:pl-0 sm:gap-1
                md:gap-2

                "
        >
          {/* PRoject status */}
          <Tooltip
            text={
              project?.active ? "Puedes usar la app ✅" : "En mantenimiento 🧹"
            }
          >
            <p
              className={`hidden text-xs py-[2px] px-[6px]  w-fit h-5 rounded-sm ${
                project?.active ? "bg-green text-white" : "bg-yellow text-black"
              }
                        
                        sm:block sm:leading-[16px]
                        md:text-sm md:py-[4px] md:px-[8px] md:leading-[14px]
                        `}
            >
              {project?.active ? "Online" : "Offline"}
            </p>
          </Tooltip>
          {/* Proyect Ver Codigo */}
          <Tooltip text="Ver código 🐱🐙">
            <a
              href={project?.links?.github}
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <Image
                src={GHIconWhite}
                alt="Icono de web"
                width={20}
                className="sm:w-[25px] md:w-[34px]"
              />
              <span className="bg-white rounded-sm p-2 font-semibold hidden sm:inline">
                Ver codigo
              </span>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
