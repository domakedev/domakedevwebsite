import Image from 'next/image'


const TechCard = ({ img, techName, techColor }) => {

    return (
        <div className="bg-black w-[113px] h-[119px] rounded flex flex-col gap-3 justify-between items-center py-[7px] px-[10px]">
            <Image
                src={img}
                alt='Frontend icono'
                className='w-[70px]'
            />
            <div className={`w-[92px] h-[26px] text-white text-xs flex justify-center items-center rounded-sm 
            ${techColor} font-bold
            `}>
                <p>
                    {techName}
                </p>
            </div>
        </div>
    )
}

export default TechCard
