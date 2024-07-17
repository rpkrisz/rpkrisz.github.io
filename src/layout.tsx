import {Outlet} from "react-router-dom";
import Menu from "./Components/menu";
import Footer from "./Components/Footer";
import {ThemeProvider} from "@/Components/theme-provider";

function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <Menu />
      </header>
      <main className="felx justify-start flex-grow m-0 px-8 py-2 relativ min-h-svh">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
