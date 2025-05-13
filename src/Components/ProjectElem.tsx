import {FC, useState} from "react";
import H2 from "./H2";
import ProjectDetailModal from "@/Components/ProjectDetailModal";
import {ProjectTYPE} from "@/data/Types";

const ProjectElem: FC<{project: ProjectTYPE}> = ({project}) => {
  const [openModal, setOpenModal] = useState(false);
  const {name, description, images, webLink} = project;
  return (
    <li className="flex flex-col justify-center mx-auto zero:max-w-32 xs:min-w-72 sm:max-w-screen-2xl sm:min-w-96 md:min-h-dvh min-h-full">
      <ProjectDetailModal openModal={openModal} setter={setOpenModal} project={project}></ProjectDetailModal>
      <div className="flex flex-row justify-between items-center">
        <H2>{name}</H2>
        <button className="btn btn-primary btn-sm md:btn-md" onClick={() => setOpenModal(true)}>
          More
        </button>
      </div>
      <div className="flex flex-wrap">
        <p>{description}</p>
      </div>
      <a
        href={webLink}
        className="flex self-center justify-center p-1 zero:max-w-32 xs:min-w-72 sm:max-w-5xl sm:min-w-96 hover:bg-accent hover:rounded-2xl"
      >
        <div className="mockup-browser bg-neutral border">
          <div className="mockup-browser-toolbar">
            <div className="input text-white">{webLink}</div>
          </div>
          <div className="bg-base-200 flex justify-center ">
            <img src={images[0].src} alt={images[0].src} className="w-full" />
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProjectElem;
