import PageTittle from '@/components/PageTittle/PageTittle'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import projects from '@/utils/Projects'

const page = () => {
   

    return (
        <div className='self-start flex flex-col items-center'>
            <PageTittle preTitle="Principales" title="Proyectos" />

            {/* Lista de proyectos */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center mb-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default page