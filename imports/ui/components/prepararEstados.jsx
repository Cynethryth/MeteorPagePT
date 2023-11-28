import axios from "axios";
import React, { useState } from "react";

export default function PrepararEstados() {
  const [Progreso, setProgreso] = useState(0);
  const Estados = [
    { id: 1, nombre: "Veracruz" },
    { id: 2, nombre: "Nuevo León" },
    { id: 3, nombre: "Tabasco" },
    { id: 4, nombre: "Baja California Sur" },
    { id: 5, nombre: "San Luis Potosí" },
    { id: 6, nombre: "Jalisco" },
    { id: 7, nombre: "Coahuila" },
    { id: 8, nombre: "Morelos" },
    { id: 9, nombre: "Guanajuato" },
    { id: 10, nombre: "Tlaxcala" },
  ];

  function forEachConRetardo(array, callback, delay) {
    array.forEach((item, index) => {
      setTimeout(() => {
        callback(item, index);
      }, index * delay);
    });
  }
  const fetch = () => {
    forEachConRetardo(
      Estados,
      (item, index) => {
        axios.post("http://localhost:5000/users/postState", { data: item }).then(response =>{
            setProgreso((index + 1) * 10)
        }) ;
      },
      1000
    );
  };
  return (
    <div>
      <button onClick={fetch}>PrepararEstados</button>
      <span>
        Progreso: {Progreso == 100 ? <>Finalizado!!</> : <>{Progreso}%</>}
      </span>
    </div>
  );
}
