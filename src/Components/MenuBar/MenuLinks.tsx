import {Link} from "react-router-dom";
import {LinkedinIcon, GithubIcon} from "../FawIcons";

export default function MenuLinks() {
  return (
    <>
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
    </>
  );
}
