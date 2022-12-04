import "./styles.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Container/Header";
import Home from "./Container/Home";
import Contact from "./Container/Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
