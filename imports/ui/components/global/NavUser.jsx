import React, { useState } from "react";
import jwt from "jwt-simple";
import { Cookies } from "react-cookie";
export default function NavUser({ data }) {
  const cookie = new Cookies();
  const [Estado, setEstado] = useState(false);
  const perfil = jwt.decode(data, "PalabraSecreta");
  const signOut = () => {
    alert("Tu sesión se ha cerrado");
    cookie.remove("user");
    window.location.href = "/";
  };
  return (
    <div>
      <div
        className="ProfileLbl"
        onClick={() => {
          setEstado(!Estado);
        }}
      >
        {perfil.nombre}
      </div>
      <div className={!Estado ? "UserMenu" : "UserMenu activo"}>
        <a href="#" title="Opciones de perfil" className="label">
          Opciones
        </a>
        <button
          onClick={() => {
            signOut();
          }}
          className="label"
        >
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
}
