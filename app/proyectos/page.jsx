import PageTittle from "@/components/PageTittle/PageTittle";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import projects from "@/utils/Projects";

const page = () => {

  const sortByActiveProjects = projects.sort((a,b) => b.active - a.active); 
  return (
    <div className="self-start flex flex-col items-center px-10">
      <PageTittle
        preTitle="Principales"
        title="Proyectos"
      />

      {/* Lista de proyectos */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center mb-8">
        {sortByActiveProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
