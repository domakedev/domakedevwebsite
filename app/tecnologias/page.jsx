import PageTittle from '@/components/PageTittle/PageTittle'
import TechCard from '@/components/TechCard/TechCard'
import TechSection from '@/components/TechSection/TechSection'
import {basicTechs, frontendTechs, backendTechs} from '@/utils/TechList'


const page = () => {
    return (
        <div className='px-7 w-full h-full flex items-center flex-col gap-10 mb-5'>
            {/* Titulo */}
            <PageTittle
                title="Tecnologías"
                preTitle="Principales"
            />
            {/* Seccion de Techs */}
            <TechSection techsType="basics">
                {basicTechs?.map((tech, index) => (
                    <TechCard
                        key={index}
                        img={tech.img}
                        techName={tech.techName}
                        techColor={tech.techColor}
                        contraste={tech.contraste}
                    />
                ))}
            </TechSection>
            <TechSection techsType="frontend">
                {frontendTechs?.map((tech, index) => (
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
                {backendTechs?.map((tech, index) => (
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



