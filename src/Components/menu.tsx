import {Link, NavLink} from "react-router-dom";
import {LinkedinIcon, GithubIcon} from "./FawIcons";
import {ModeToggle} from "@/Components/mode-toggle";
import {Moon, Sun, SunMoon} from "lucide-react";
import {Button} from "./ui/button";
import {useTheme} from "./theme-provider";

export default function Menu() {
  const {setTheme} = useTheme();
  return (
    <nav className="bg-base-300 text-white p-2 gap-2 md:navbar md:flex md:flex-grow md:justify-between md:items-center">
      <details tabIndex={0} className="collapse collapse-arrow md:hidden">
        <summary className="collapse-title text-xl font-medium">Menu</summary>
        <div className="collapse-content flex flex-col">
          <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/about">
            About
          </NavLink>
          <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/projects">
            Projects
          </NavLink>
          <NavLink className="btn btn-ghost text-xl hover:text-primary" to="/resume">
            Resume
          </NavLink>
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
          <div className="flex flex-row items-center justify-between">
            <Button variant="default" size="icon" onClick={() => setTheme("light")}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute dark:-rotate-90" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="default" size="icon" onClick={() => setTheme("dark")}>
              <Moon className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all absolute dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="default" size="icon" onClick={() => setTheme("system")}>
              <SunMoon className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all absolute dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </details>
      <div className="hidden md:flex">
        <Link className="btn btn-ghost text-xl hover:text-primary self-start" to="/">
          <img src="/assets/Logo_orange/mobile-logo.png" alt="Logo" className="size-12 inline" />
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
      <div className="hidden md:flex">
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
        <ModeToggle />
      </div>
    </nav>
  );
}
