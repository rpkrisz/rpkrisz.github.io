import {NavLink} from "react-router-dom";
import {FolderGit2, FileText} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function MenuNavLinks() {
  const {i18n} = useTranslation("translation", {keyPrefix: ""});
  const menu: string[] = i18n.getResourceBundle(i18n.language, "translation").menu;

  return (
    <>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/projects">
        {menu[1]} <FolderGit2 />
      </NavLink>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/resume">
        {menu[2]}
        <FileText />
      </NavLink>
    </>
  );
}
