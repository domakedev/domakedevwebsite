import PageTittle from '@/components/PageTittle/PageTittle'
import TechCard from '@/components/TechCard/TechCard'
import TechSection from '@/components/TechSection/TechSection'
import TechsList from '@/utils/TechList'


const page = () => {
    return (
        <div className='px-7 w-full h-full flex items-center flex-col gap-10'>
            {/* Titulo */}
            <PageTittle
                title="Tecnologias"
                preTitle="Principales"
            />
            {/* Seccion de Techs */}
            <TechSection techsType="frontend">
                {TechsList.map((tech, index) => (
                    <TechCard
                        key={index}
                        img={tech.img}
                        techName={tech.techName}
                        techColor={tech.techColor}
                        contraste={tech.contraste}
                    />
                ))}
            </TechSection>
            <TechSection techsType="backend">
                {TechsList.map((tech, index) => (
                    <TechCard
                        key={index}
                        img={tech.img}
                        techName={tech.techName}
                        techColor={tech.techColor}
                        contraste={tech.contraste}
                    />
                ))}
            </TechSection>
        </div>
    )
}

export default page



