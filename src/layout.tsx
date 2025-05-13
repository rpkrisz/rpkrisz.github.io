import {Outlet} from "react-router-dom";
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer";
import SideBar from "./Components/MenuBar/SideBar";
import {ModeToggle} from "./Components/MenuBar/ModeToggle";
import LanguageToggle from "./Components/MenuBar/LanguageToggle";

function Layout() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full">
          <div className="flex justify-between items-center lg:hidden bg-base-100 p-2">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-primary drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <LanguageToggle />
            </div>
          </div>
          <div className="hidden lg:flex">
            <header className="h-16">
              <MenuBar />
            </header>
          </div>
        </div>
        {/* Page content here */}
        <main className="felx justify-start flex-grow m-0 px-32 py-2 relativ min-h-svh md:px-40">
          <Outlet />
        </main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <SideBar />
      </div>
    </div>
  );
}

export default Layout;
