import Image from 'next/image'
import TechCard from '@/components/TechCard/TechCard'
import FrontendIcon from '@/assets/frontend-icon.svg'
import TechsList from '@/utils/TechList'

const page = () => {   
    return (
        <div className='px-7 w-full h-full flex justify-center items-center flex-col'>
            {/* Titulo */}
            <div className='mt-[33px]'>
                <span className='text-sm before:absolute before:-inset-1 before:-skew-y-3 before:bg-light-blue relative inline-block'>
                    <span class="relative text-white">Principales</span>
                </span>
                <h1 className='text-3xl font-bold mt-1'>Tecnologías</h1>
            </div>
            {/* Seccion de Techs */}
            <div className="flex">
                <div className='w-[284px] h-[450px] bg-gradient-to-r from-light-blue from-0% via-red via-80% to-yellow to-100% rounded-[18px] rounded-tr-none rounded-br-none mt-[17px] mb-[48px] 
           '>

                    {/* /// Titulo */}
                    <div className='flex justify-center gap-4 mt-4 items-center'>
                        <h2 className='text-white font-bold text-2xl'>FRONTEND</h2>
                        <Image
                            src={FrontendIcon}
                            alt='Frontend icono'
                        />
                    </div>
                    {/* /// TechCards */}
                    <div className=" overflow-y-scroll w-[284px] h-[360px] mt-2">
                        <div className="mt-[26px] flex flex-col items-center gap-5">
                            {/* TechCard */}
                            {TechsList.map((tech, index) => (
                                <TechCard
                                    key={index}
                                    img={tech.img}
                                    techName={tech.techName}
                                    techColor={tech.techColor}
                                    contraste={tech.contraste}
                                />
                            ))}
                        </div>
                    </div>

                </div>
                {/* FLotante */}
                <div className="w-[10px] h-[450px] bg-yellow mt-[17px] rounded-r-[18px]"></div>
            </div>
        </div>
    )
}

export default page



