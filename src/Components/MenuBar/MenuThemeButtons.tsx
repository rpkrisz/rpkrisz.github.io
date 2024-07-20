import {Moon, Sun, SunMoon} from "lucide-react";
import {Button} from "../ui/button";
import {useTheme} from "../theme-provider";

export default function MenuThemeButtons() {
  const {setTheme} = useTheme();

  return (
    <div className="flex flex-row items-center justify-center gap-2 ">
      <Button variant="ghost" className="bg-primary dark:btn-ghost" size="icon" onClick={() => setTheme("light")}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute dark:-rotate-90" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" className="dark:bg-primary" size="icon" onClick={() => setTheme("dark")}>
        <Moon className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all absolute dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setTheme("system")}>
        <SunMoon className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all absolute dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
