import {Link} from "react-router-dom";
import MenuNavLinks from "./MenuNavLinks";
import {EnvelopeIcon, GithubIcon, LinkedinIcon} from "../FawIcons";

export default function SideBar() {
  return (
    <nav className="flex flex-col bg-base-200 text-white menu min-h-full p-2 py-4 gap-2 w-64">
      <div className="flex justify-start items-center gap-2 text-primary font-bold">
        <Link className="btn btn-ghost" to="/" state="hero">
          <figure>
            <img src="/assets/Logo_green/horizontal-logo.png" alt="Logo" className="w-16 h-10 inline" />
          </figure>
        </Link>
        <p> Portfolio Page</p>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-1 justify-between flex-grow">
        <div className="flex flex-col gap-1">
          <MenuNavLinks />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="divider"></div>
          <nav className="grid grid-flow-col gap-2 md:place-self-center md:justify-self-end">
            <a className="hover:text-primary" href="mailto:rp.krisz123@gmail.com" target="_blank">
              <EnvelopeIcon size="xl" />
            </a>
            <a
              className="hover:text-primary"
              href="https://www.linkedin.com/in/rethey-prikkel-krisztian"
              target="_blank"
            >
              <LinkedinIcon size="xl" />
            </a>
            <a className="hover:text-primary" href="https://github.com/rpkrisz" target="_blank">
              <GithubIcon size="xl" />
            </a>
          </nav>
          <div className="divider"></div>
        </div>
      </div>
    </nav>
  );
}
