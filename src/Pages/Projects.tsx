import H1 from "@/Components/H1";
import ProjectElem from "../Components/ProjectElem";
import data from "../data/data.json";
import {ProjectTYPE} from "../data/Types";

const Projects = () => {
  const projects: ProjectTYPE[] = data.hungarian.projects;
  return (
    <>
      <H1>My Pojects</H1>
      <ul className="flex flex-col justify-center gap-3">
        {projects.map(project => {
          return <ProjectElem key={project.name} project={project} />;
        })}
      </ul>
    </>
  );
};

export default Projects;
