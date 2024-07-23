import {FC} from "react";
import {Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription} from "./ui/dialog";
import {Link} from "react-router-dom";
import {GithubIcon} from "./FawIcons";
import {Globe} from "lucide-react";
import {ProjectTYPE} from "@/data/Types";

const ProjectDetailModal: FC<{
  openModal: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  project: ProjectTYPE;
}> = ({openModal, setter, project}) => {
  const {name, description, extras, images, webLink, gitHubLink} = project;
  return (
    <>
      <Dialog open={openModal} onOpenChange={() => setter(false)}>
        <DialogContent className="flex flex-col justify-between overflow-auto w-10/12 h-5/6">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogTitle>A projektről</DialogTitle>
          <div className="flex flex-col justify-center gap-5">
            <p>{extras}</p>
            {images.map(image => {
              return (
                <div key={image.src} className="flex flex-col justify-center">
                  <p>{image.text}</p>
                  <img src={image.src} alt={image.alt} className=" m-auto" />
                </div>
              );
            })}
          </div>
          <DialogFooter>
            {gitHubLink && (
              <Link className="btn btn-ghost text-xl hover:text-primary " to={gitHubLink} target="_blank">
                GitHub
                <GithubIcon />
              </Link>
            )}
            {webLink && (
              <Link className="btn btn-ghost text-xl hover:text-primary " to={webLink} target="_blank">
                WebPage
                <Globe />
              </Link>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectDetailModal;
