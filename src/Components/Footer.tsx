import {LinkedinIcon, EnvelopeIcon, GithubIcon} from "./FawIcons";

export default function Footer() {
  return (
    <footer className="footer text-neutral-content items-center p-4 bg-gray-800">
      <aside className="grid-flow-col items-center">
        <img src="/assets/horizontal-logo.png" alt="Logo" className="size-16 inline" />
        <p className="text-center">Copyright © {new Date().getFullYear()} - Réthey-Prikkel Kriszsztián</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="mailto:rp.krisz123@gmail.com" target="_blank">
          <EnvelopeIcon size="xl" />
        </a>
        <a href="https://www.linkedin.com/in/rethey-prikkel-krisztian" target="_blank">
          <LinkedinIcon size="xl" />
        </a>
        <a href="https://github.com/rpkrisz" target="_blank">
          <GithubIcon size="xl" />
        </a>
      </nav>
    </footer>
  );
}
