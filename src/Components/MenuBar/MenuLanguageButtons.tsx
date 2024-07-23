import {Button} from "../ui/button";
import {useTranslation} from "react-i18next";

export default function MenuLanguageButtons() {
  const {i18n} = useTranslation("translation");

  return (
    <div className="flex flex-row items-center justify-center gap-2 ">
      <Button variant="ghost" size="icon" onClick={() => i18n.changeLanguage("hu")}>
        <span>HU</span>
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={() => i18n.changeLanguage("en")}>
        <span>EN</span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
