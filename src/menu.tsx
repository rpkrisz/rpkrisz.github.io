import {Link, NavLink} from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar flex flex-grow gap-1 justify-start bg-gray-800 text-white  items-center p-2 gap-2">
      <Link className="btn btn-ghost text-xl hover:text-primary" to="/">
        <img src="./assets/mobile-logo.png" alt="Logo" className="size-12 inline" />
      </Link>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/projects">
        Projects
      </NavLink>
      <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/resume">
        Resume
      </NavLink>
      <Link
        className="btn btn-ghost text-xl hover:text-primary"
        to="https://www.linkedin.com/in/rethey-prikkel-krisztian"
        target="_blank"
      >
        Linkedin
      </Link>
    </nav>
  );
}
