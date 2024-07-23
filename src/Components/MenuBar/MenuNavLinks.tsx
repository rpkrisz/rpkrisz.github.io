import {NavLink} from "react-router-dom";
import { FolderGit2, FileText} from "lucide-react";

export default function MenuNavLinks() {
  return (
    <>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/projects">
        Projects <FolderGit2 />
      </NavLink>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/resume">
        Resume <FileText />
      </NavLink>
    </>
  );
}
