import React from "react";
import Router from "./routes";
import Navbar from "./components/global/Navbar";
import { CookiesProvider } from "react-cookie";
import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/filtros.css";
import "./styles/perfil.css";
import "./styles/home.css";

export const App = () => (
  <div>
    <CookiesProvider defaultSetOptions={{ path: '/' }} >
      <Navbar />
      <Router />
    </CookiesProvider>
  </div>
);
