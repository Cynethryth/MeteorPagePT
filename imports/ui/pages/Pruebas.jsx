import React from "react";
import { Cookies } from "react-cookie";
import jwt from "jwt-simple";
import CreateSitter from "../components/CreateSitter";
import PrepararEstados from "../components/prepararEstados";
import PrepararCiudades from "../components/PrepararCiudads";
import PrepararPT from "../components/PrepararPT";

export default function Pruebas() {
  return (
    <div>
      <PrepararEstados />
      <PrepararCiudades />
      <PrepararPT/>
      <CreateSitter />
    </div>
  );
}
