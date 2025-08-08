import {LinkedinIcon, EnvelopeIcon, GithubIcon} from "./FawIcons";

export default function Footer() {
  return (
    <footer className="footer-center md:footer text-neutral-content items-center p-4 bg-base-300 shadow-[0px_-5px_25px_-10px] shadow-primary">
      <aside className="grid-flow-col items-center">
        <img src="/assets/Logo_blue/horizontal-logo.png" alt="Logo" className="size-16 inline m-auto" />
      </aside>
      <aside className="my-4 grid-flow-col items-center md:m-auto">
        Copyright © {new Date().getFullYear()} - Réthey-Prikkel Kriszsztián
      </aside>
      <nav className="grid grid-flow-col gap-2 md:place-self-center md:justify-self-end">
        <a className="hover:text-primary" href="mailto:rp.krisz123@gmail.com" target="_blank">
          <EnvelopeIcon size="xl" />
        </a>
        <a className="hover:text-primary" href="https://www.linkedin.com/in/rethey-prikkel-krisztian" target="_blank">
          <LinkedinIcon size="xl" />
        </a>
        <a className="hover:text-primary" href="https://github.com/rpkrisz" target="_blank">
          <GithubIcon size="xl" />
        </a>
      </nav>
    </footer>
  );
}
