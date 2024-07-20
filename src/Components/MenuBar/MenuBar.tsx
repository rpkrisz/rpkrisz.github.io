import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/Components/ui/collapsible";
import {ModeToggle} from "@/Components/MenuBar/mode-toggle";
import {Link} from "react-router-dom";
import MenuLinks from "./MenuLinks";
import MenuNavLinks from "./MenuNavLinks";
import MenuThemeButtons from "./MenuThemeButtons";
import {Menu} from "lucide-react";

export default function MenuBar() {
  return (
    <nav className="bg-base-300 text-white p-2 gap-2 md:navbar md:flex md:flex-grow md:justify-between md:items-center">
      <Collapsible className="md:hidden">
        <div className=" flex flex-row flex-grow content-center justify-between">
          <Link className="btn btn-ghost hover:text-primary content-center" to="/">
            <img src="/assets/Logo_orange/horizontal-logo.png" alt="Logo" className="size-20 inline mr-2" />
          </Link>
          <CollapsibleTrigger className="p-3">
            <Menu />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col">
          <MenuNavLinks />
          <MenuLinks />
          <MenuThemeButtons />
        </CollapsibleContent>
      </Collapsible>
      <div className="hidden md:flex">
        <Link className="btn btn-ghost hover:text-primary self-start content-center" to="/">
          <img src="/assets/Logo_orange/mobile-logo.png" alt="Logo" className="size-12 inline" />
        </Link>
        <MenuNavLinks />
      </div>
      <div className="hidden md:flex">
        <MenuLinks />
        <ModeToggle />
      </div>
    </nav>
  );
}
