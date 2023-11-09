import Image from 'next/image'
import FrontendIcon from '@/assets/frontend-icon.svg'

const page = () => {
    return (
        <div className='px-7 w-full h-full flex justify-center items-center flex-col'>
            {/* Titulo */}
            <div className='mt-[33px] self-start'>
                <span className='text-sm'>Principales</span>
                <h1 className='text-3xl font-bold'>Tecnologías</h1>
            </div>
            {/* Seccion de Techs */}
            <div className='w-[284px] h-[443px] bg-gradient-to-r from-dmd-light-blue from-0% via-dmd-red via-80% to-dmd-yellow to-100% rounded-[18px] mt-[17px] mb-[48px]'>
                {/* /// Titulo */}
                <div className='flex justify-center gap-4 mt-4 items-center'>
                    <h2 className='text-dmd-white font-bold text-2xl'>FRONTEND</h2>
                    <Image
                        src={FrontendIcon}
                        alt='Frontend icono'
                    />
                </div>
                {/* /// TechCards */}

            </div>
            {/* Seccion de Techs */}
        </div>
    )
}

export default page
