import {Link, NavLink} from "react-router-dom";
import {LinkedinIcon, GithubIcon} from "./Components/FawIcons";

export default function Menu() {
  return (
    <nav className="navbar flex flex-grow justify-between bg-gray-800 text-white  items-center p-2 gap-2">
      <div>
        <Link className="btn btn-ghost text-xl hover:text-primary self-start" to="/">
          <img src="./assets/mobile-logo.png" alt="Logo" className="size-12 inline" />
        </Link>
        <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/about">
          About
        </NavLink>
        <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/projects">
          Projects
        </NavLink>
        <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/resume">
          Resume
        </NavLink>
      </div>
      <div>
        <Link
          className="btn btn-ghost text-xl hover:text-primary "
          to="https://www.linkedin.com/in/rethey-prikkel-krisztian"
          target="_blank"
        >
          Linkedin
          <LinkedinIcon />
        </Link>
        <Link className="btn btn-ghost text-xl hover:text-primary " to="https://github.com/rpkrisz" target="_blank">
          GitHub
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
