import {Outlet} from "react-router-dom";
import Menu from "./menu";

function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className="felx justify-start flex-grow  m-0 px-8 py-2 relative">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
        <p>© 2024 - Réthey-Prikkel Kriszsztián</p>
      </footer>
    </>
  );
}

export default Layout;
