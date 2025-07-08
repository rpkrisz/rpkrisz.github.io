import "./App.css";
import {ThemeProvider} from "@/Components/theme-provider";
import {RouterProvider, createHashRouter} from "react-router-dom";
import Projects from "./Pages/Projects";
import Layout from "./layout";
import Resume from "./Pages/Resume/Resume";
import Home from "./Pages/Hero";
import UiKit from "./UiKit";
import About from "./Pages/About";
import Print from "./Pages/Print";

const router = createHashRouter([
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
      {
        path: "print",
        element: <Print />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
