import {Outlet} from "react-router-dom";
import Menu from "./menu";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className="felx justify-start flex-grow  m-0 px-8 py-2 relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
