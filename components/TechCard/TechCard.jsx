import Image from 'next/image'


const TechCard = ({ img, techName, techColor, contraste }) => {

    return (
        <div className="bg-black w-[113px] h-[119px] rounded flex flex-col gap-3 justify-between items-center py-[7px] px-[10px] 
        
        md:min-w-[152px] md:h-[161px]

        ">
            <Image
                src={img}
                alt='Frontend icono'
                className='h-[70px] md:h-[94px] w-auto'
            />
            <div className={`w-[92px] h-[26px] ${contraste ? "text-black" : "text-white"} text-xs flex justify-center items-center rounded-sm ${techColor} font-bold

            md:w-[125px] md:h-[35px] md:text-base
            `}>
                <p>
                    {techName}
                </p>
            </div>
        </div>
    )
}

export default TechCard
