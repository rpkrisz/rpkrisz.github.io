import {Outlet} from "react-router-dom";
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <>
      <header className="h-16">
        <MenuBar />
      </header>
      <main className="felx justify-start flex-grow m-0 mx-32 px-40 py-2 relativ min-h-svh md:px-60">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
