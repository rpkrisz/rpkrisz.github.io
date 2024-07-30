import {Outlet} from "react-router-dom";
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <>
      <header>
        <MenuBar />
      </header>
      <main className="felx justify-start flex-grow m-0 px-8 py-2 relativ min-h-svh md:px-40">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
