import {LinkedinIcon, EnvelopeIcon, SquareFacebookIcon, GithubIcon, InstagramIcon} from "./FawIcons";

export default function Footer() {
  return (
    <footer className="footer text-neutral-content items-center p-4 bg-gray-800">
      <aside className="grid-flow-col items-center">
        <img src="./assets/horizontal-logo.png" alt="Logo" className="size-16 inline" />
        <p>Copyright © ${new Date().getFullYear()} - Réthey-Prikkel Kriszsztián</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/rethey-prikkel-krisztian" target="_blank">
          <LinkedinIcon size="xl" />
        </a>
        <a href="mailto:rp.krisz123@gmail.com" target="_blank">
          <EnvelopeIcon size="xl" />
        </a>
        <a href="https://www.facebook.com/krisztian.retheyprikkel" target="_blank">
          <SquareFacebookIcon size="xl" />
        </a>
        <a href="https://www.instagram.com/retheyprikkelkrisz" target="_blank">
          <InstagramIcon size="xl" />
        </a>
        <a href="https://github.com/rpkrisz" target="_blank">
          <GithubIcon size="xl" />
        </a>
      </nav>
    </footer>
  );
}
