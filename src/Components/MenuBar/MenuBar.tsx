import {ModeToggle} from "@/Components/MenuBar/ModeToggle";
import {Link} from "react-router-dom";
import MenuLinks from "./MenuLinks";
import MenuNavLinks from "./MenuNavLinks";
import LanguageToggle from "./LanguageToggle";

export default function MenuBar() {
  return (
    <nav className="bg-base-200 text-white p-2 gap-2 min-w-full flex flex-grow md:navbar md:justify-between md:items-center fixed z-50">
      <div className="hidden md:flex">
        <Link className="btn btn-ghost hover:text-primary self-start content-center" to="/">
          <img src="/assets/Logo_blue/mobile-logo.png" alt="Logo" className="size-12 inline" />
        </Link>
        <MenuNavLinks />
      </div>
      <div className="hidden md:flex">
        <MenuLinks />
        <ModeToggle />
        <LanguageToggle />
      </div>
    </nav>
  );
}
