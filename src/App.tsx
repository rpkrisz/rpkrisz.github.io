import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Projects from "./Pages/Projects";
import Layout from "./layout";
import Resume from "./Pages/Resume/Resume";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UiKit from "./UiKit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "ui",
        element: <UiKit />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
