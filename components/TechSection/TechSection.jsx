'use client'
import Image from "next/image"
import FrontendIcon from '@/assets/frontend-icon.svg'
import BackendIcon from "@/assets/backend-icon.svg"
import BasicsIcon from "@/assets/basics-icon.svg"

import "./asd.css"



const TechSection = ({ techsType, children }) => {
    const techsData = {
        "frontend": {
            title: "Frontend",
            "bgCard": "bg-gradient-to-r from-light-blue from-0% via-red via-80% to-yellow to-100%",
            icon: FrontendIcon,
            bgFlotanteY: "bg-yellow",
            bgFlotanteX: "md:bg-gradient-to-r md:from-light-blue md:from-0% md:via-red md:via-80% md:to-yellow to-100%"
        },
        "backend": {
            title: "Backend",
            "bgCard": "bg-gradient-to-r from-black from-0% to-green to-100%",
            icon: BackendIcon,
            bgFlotanteY: "bg-green",
            bgFlotanteX: "md:bg-gradient-to-r md:from-black md:from-0% md:to-green to-100%"
        },
        "basics": {
            title: "Generales",
            "bgCard": "bg-gradient-to-r from-gray from-0% to-black to-100%",
            "bgCard": "bg-gradient-to-r from-black from-0% to-gray to-100%",
            icon: BasicsIcon,
            bgFlotanteY: "bg-gray",
            bgFlotanteX: "md:bg-gradient-to-r md:from-gray md:from-0% md:to-black to-100%"
        }
    }

    return (
        <div className="flex relative md:w-full md:justify-center bg-red -ml-[5px]">
            <div className={`w-[284px] h-[450px]  rounded-[18px] ${techsData[ techsType ]?.bgCard} pl-[5px] bg-yellow
            
            md:w-4/5 md:flex md:flex-col md:gap-6 md:rounded-[18px]
            md:h-fit md:p-6


            `}>

                {/* /// Titulo */}
                <div className='flex justify-center gap-4 mt-4 items-center pl-[5px]  md:mt-0'>
                    <h2 className='text-white font-bold text-2xl'>{techsData[ techsType ]?.title.toUpperCase()}</h2>
                    <Image
                        src={techsData[ techsType ]?.icon}
                        alt='Frontend icono'
                        width={50}
                        height={50}
                    />
                </div>
                {/* /// TechCards */}
                <div className=" overflow-y-auto w-[284px] h-[360px] mt-2  scroll-personalizado
                
                md:w-full md:h-fit md:overflow-y-hidden
                md:flex md:justify-center md:items-center
                ">
                    <div className="mt-[26px] flex flex-wrap justify-center items-center gap-5 
                    
                    md:flex-row md:flex-wrap md:w-full md:mt-0 md:justify-center
                    ">
                        {/* TechCard */}
                        {children}
                    </div>
                </div>

            </div>
            {/* FLotante */}
            <div className={`w-[48px] h-[450px] rounded-[18px] -right-[10px] absolute -z-10 ${techsData[ techsType ]?.bgFlotanteY} 
                     
            md:hidden
            
            `}></div>
        </div >
    )
}

export default TechSection

// Diseño segun figma de Desktop para techs pero no me gusto
// la UX para el scroll al mostrar las techs, asi que mejor lo deje de uno solo todo, para movil si hay scroll porque tiene mas sentido

// 'use client'
// import Image from "next/image"
// import FrontendIcon from '@/assets/frontend-icon.svg'
// import BackendIcon from "@/assets/backend-icon.svg"

// import "./asd.css"



// const TechSection = ({ techsType, children }) => {
//     const techsData = {
//         "frontend": {
//             title: "Frontend",
//             "bgCard": "bg-gradient-to-r from-light-blue from-0% via-red via-80% to-yellow to-100%",
//             icon: FrontendIcon,
//             bgFlotanteY: "bg-yellow",
//             bgFlotanteX: "md:bg-gradient-to-r md:from-light-blue md:from-0% md:via-red md:via-80% md:to-yellow to-100%"
//         },
//         "backend": {
//             title: "Backend",
//             "bgCard": "bg-gradient-to-r from-black from-0% to-green to-100%",
//             icon: BackendIcon,
//             bgFlotanteY: "bg-green",
//             bgFlotanteX: "md:bg-gradient-to-r md:from-black md:from-0% md:to-green to-100%"
//         }
//     }

//     return (
//         <div className="flex relative md:w-full md:justify-center md:max-h-[220px] ">
//             <div className={`w-[284px] h-[450px]  rounded-[18px] mt-[17px] mb-[48px]  ${techsData[ techsType ]?.bgCard}
            
//             md:w-4/5 md:max-h-[220px] md:flex md:flex-row md:gap-6 md:px-4 md:rounded-[18px]


//             `}>

//                 {/* /// Titulo */}
//                 <div className='flex justify-center gap-4 mt-4 items-center pl-[10px]
                
//                 md:flex md:flex-col md:mt-0
                
//                 '>
//                     <h2 className='text-white font-bold text-2xl'>{techsData[ techsType ]?.title.toUpperCase()}</h2>
//                     <Image
//                         src={techsData[ techsType ]?.icon}
//                         alt='Frontend icono'
//                         width={50}
//                         height={50}
//                     />
//                 </div>
//                 {/* /// TechCards */}
//                 <div className=" overflow-y-scroll w-[284px] h-[360px] mt-2 
                
//                 md:overflow-y-hidden
//                 md:overflow-x-scroll 
//                 md:w-full md:h-full 
//                 md:mt-0 md:flex md:justify-center md:items-center
//                 ">
//                     <div className="mt-[26px] flex flex-col items-center gap-5 
                    
//                     md:flex-row md:w-full md:mt-0
//                     ">
//                         {/* TechCard */}
//                         {children}
//                     </div>
//                 </div>

//             </div>
//             {/* FLotante */}
//             <div className={`w-[48px] h-[450px]  mt-[17px] rounded-[18px] -right-[10px] absolute -z-10 ${techsData[ techsType ]?.bgFlotanteY} 
                     
//             md:w-4/5 md:h-[48px] md:flex md:flex-row md:gap-6 md:px-4 ${techsData[ techsType ]?.bgFlotanteX}

//             md:mt-[17px] md:rounded-b-[18px] md:-bottom-[35px] md:right-auto
            
//             `}></div>
//         </div >
//     )
// }

// export default TechSection
