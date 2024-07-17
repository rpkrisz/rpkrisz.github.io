import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Projects from "./Projects";
import Layout from "./layout";
import Resume from "./Resume/Resume";
import Home from "./Home";
import About from "./About";
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
