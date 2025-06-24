import H1 from "@/Components/H1";
import ProjectElem from "../Components/ProjectElem";
import {ProjectTYPE} from "../data/Types";
import {useTranslation} from "react-i18next";
import ProjectDetailModal from "@/Components/ProjectDetailModal";
import {useState} from "react";

const Projects = () => {
  const [t, i18n] = useTranslation("translation", {keyPrefix: "projects"});
  const projects: ProjectTYPE[] = i18n.getResourceBundle(i18n.language, "translation").projects.items;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ProjectDetailModal openModal={openModal} setter={setOpenModal} />
      <H1>{t("title")}</H1>
      <ul className="flex flex-col justify-center gap-4">
        {projects.map(project => {
          return <ProjectElem key={project.name} project={project} setOpenModal={setOpenModal} />;
        })}
      </ul>
    </>
  );
};

export default Projects;
