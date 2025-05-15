import {Button} from "../ui/button.tsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "../ui/dropdown-menu.tsx";
import {useTranslation} from "react-i18next";

export default function LanguageToggle() {
  const [t, i18n] = useTranslation("translation");
  const changeLanguage = () => {
    if (i18n.language === "hu") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("hu");
    }
  };
  return (
    <Button variant="ghost" size="icon" className="uppercase" onClick={changeLanguage}>
      {i18n.language}
    </Button>
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span>{t("language")}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => i18n.changeLanguage("hu")}>HU</DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>EN</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
