import H1 from "@/Components/H1";
import ProjectElem from "../Components/ProjectElem";
import {ProjectTYPE} from "../data/Types";
import {useTranslation} from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("translation", {keyPrefix: "projects"});
  const projects: ProjectTYPE[] = i18n.getResourceBundle(i18n.language, "translation").projects.items;

  return (
    <>
      <H1>{t("title")}</H1>
      <ul className="flex flex-col justify-center gap-4">
        {projects.map(project => {
          return <ProjectElem key={project.name} project={project} />;
        })}
      </ul>
    </>
  );
};

export default Projects;
