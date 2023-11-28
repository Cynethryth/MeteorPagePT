import axios from "axios";
import React, { useState } from "react";

export default function PrepararPT() {
  const [Progreso, setProgreso] = useState(0);
  const Estados = [
    { id: 153648, nombre: "Exóticos" },
    { id: 971330, nombre: "Reptiles" },
    { id: 1298038, nombre: "Aves" },
    { id: 1420404, nombre: "Perros" },
    { id: 1775543, nombre: "Gatos" },
    { id: 2356239, nombre: "Serpientes" },

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
        axios.post("http://localhost:5000/petType/create", { data: item }).then(response =>{
            setProgreso(((index + 1) * (100/6)).toFixed(2))
        }) ;
      },
      1000
    );
  };
  return (
    <div>
      <button onClick={fetch}>Preparar PetsType</button>
      <span>
        Progreso: {Progreso == 100 ? <>Finalizado!!</> : <>{Progreso}%</>}
      </span>
    </div>
  );
}
