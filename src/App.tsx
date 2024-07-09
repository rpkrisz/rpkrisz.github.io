import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Projects from "./Projects";
import Layout from "./layout";
import Resume from "./Resume/Resume";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
