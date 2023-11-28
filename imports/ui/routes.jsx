import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pruebas from "./pages/Pruebas";
import BuscarCuidador from "./pages/BuscarCuidador";
import Cuidadores from "./pages/Cuidadores";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/pruebas",
    element: <Pruebas />,
  },
  {
    path: "/buscarCuidador",
    element: <BuscarCuidador />,
  },
  {
    path: "/cuidadores",
    element: <Cuidadores />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
