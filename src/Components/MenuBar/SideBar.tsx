import {Link} from "react-router-dom";
import MenuNavLinks from "./MenuNavLinks";
import { EnvelopeIcon, GithubIcon, LinkedinIcon } from "../FawIcons";

export default function SideBar() {
  return (
    <nav className="flex flex-col bg-base-200 text-white menu min-h-full p-2 gap-2 w-64">
      <div className="flex justify-center items-center">
        <Link className="btn btn-ghost hover:text-primary content-center" to="/" state="hero">
          <figure>
            <img src="/assets/Logo_orange/horizontal-logo.png" alt="Logo" className="size-20 inline mr-2" />
          </figure>
        </Link>
      </div>
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


