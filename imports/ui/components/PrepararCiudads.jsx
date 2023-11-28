import axios from "axios";
import React, { useState } from "react";

export default function PrepararCiudades() {
  const [Progreso, setProgreso] = useState(0);
  const Estados = [
    { id: 1, nombre: "Aguascalientes", estadoid: 9 },
    { id: 2, nombre: "Cancún", estadoid: 3 },
    { id: 3, nombre: "Celaya", estadoid: 2 },
    { id: 4, nombre: "Chetumal", estadoid: 6 },
    { id: 5, nombre: "Chihuahua", estadoid: 4 },
    { id: 6, nombre: "Ciudad de México", estadoid: 7 },
    { id: 7, nombre: "Colima", estadoid: 9 },
    { id: 8, nombre: "Córdoba", estadoid: 7 },
    { id: 9, nombre: "Acatzingo", estadoid: 7 },
    { id: 10, nombre: "Apodaca", estadoid: 10 },
    { id: 11, nombre: "Comitán", estadoid: 3 },
    { id: 12, nombre: "Cholula", estadoid: 4 },
    { id: 13, nombre: "Iguala", estadoid: 1 },
    { id: 14, nombre: "Jiutepec", estadoid: 1 },
    { id: 15, nombre: "Linares", estadoid: 1 },
    { id: 16, nombre: "Nogales", estadoid: 2 },
    { id: 17, nombre: "Piedras Negras", estadoid: 8 },
    { id: 18, nombre: "San Juan del Río", estadoid: 9 },
    { id: 19, nombre: "Silao", estadoid: 8 },
    { id: 20, nombre: "Tehuacán", estadoid: 1 },
    { id: 21, nombre: "Teziutlán", estadoid: 10 },
    { id: 22, nombre: "Tizayuca", estadoid: 8 },
    { id: 23, nombre: "ZamoraCuernavaca", estadoid: 10 },
    { id: 24, nombre: "Culiacán", estadoid: 6 },
    { id: 25, nombre: "Durango", estadoid: 3 },
    { id: 26, nombre: "Ensenada", estadoid: 7 },
    { id: 27, nombre: "Guadalajara", estadoid: 6 },
    { id: 28, nombre: "Hermosillo", estadoid: 2 },
    { id: 29, nombre: "La Paz", estadoid: 9 },
    { id: 30, nombre: "León", estadoid: 6 },
    { id: 31, nombre: "Los Mochis", estadoid: 8 },
    { id: 32, nombre: "Mazatlán", estadoid: 7 },
    { id: 33, nombre: "Mérida", estadoid: 8 },
    { id: 34, nombre: "Mexicali", estadoid: 2 },
    { id: 35, nombre: "Monterrey", estadoid: 1 },
    { id: 36, nombre: "Morelia", estadoid: 6 },
    { id: 37, nombre: "Nuevo Laredo", estadoid: 5 },
    { id: 38, nombre: "Oaxaca de Juárez", estadoid: 10 },
    { id: 39, nombre: "Pachuca", estadoid: 1 },
    { id: 40, nombre: "Puebla", estadoid: 1 },
    { id: 41, nombre: "Puerto Vallarta", estadoid: 9 },
    { id: 42, nombre: "Querétaro", estadoid: 7 },
    { id: 43, nombre: "Reynosa", estadoid: 10 },
    { id: 44, nombre: "Saltillo", estadoid: 4 },
    { id: 45, nombre: "San Cristóbal de las Casas", estadoid: 4 },
    { id: 46, nombre: "San Luis Potosí", estadoid: 7 },
    { id: 47, nombre: "Tampico", estadoid: 9 },
    { id: 48, nombre: "Tijuana", estadoid: 2 },
    { id: 49, nombre: "Toluca", estadoid: 4 },
    { id: 50, nombre: "Torreón", estadoid: 6 },
    { id: 51, nombre: "Tuxtla Gutiérrez", estadoid: 6 },
    { id: 52, nombre: "Uruapan", estadoid: 4 },
    { id: 53, nombre: "Veracruz", estadoid: 4 },
    { id: 54, nombre: "Villahermosa", estadoid: 8 },
    { id: 55, nombre: "Xalapa", estadoid: 8 },
    { id: 56, nombre: "Zacatecas", estadoid: 4 },
    { id: 57, nombre: "Acapulco", estadoid: 6 },
    { id: 58, nombre: "Aguascalientes", estadoid: 4 },
    { id: 59, nombre: "Campeche", estadoid: 6 },
    { id: 60, nombre: "Cancún", estadoid: 5 },
    { id: 61, nombre: "Celaya", estadoid: 5 },
    { id: 62, nombre: "Chetumal", estadoid: 9 },
    { id: 63, nombre: "Chihuahua", estadoid: 8 },
    { id: 64, nombre: "Ciudad de México", estadoid: 2 },
    { id: 65, nombre: "Colima", estadoid: 6 },
    { id: 66, nombre: "Córdoba", estadoid: 3 },
    { id: 67, nombre: "Cuernavaca", estadoid: 8 },
    { id: 68, nombre: "Culiacán", estadoid: 5 },
    { id: 69, nombre: "Durango", estadoid: 2 },
    { id: 70, nombre: "Ensenada", estadoid: 5 },
    { id: 71, nombre: "Guadalajara", estadoid: 2 },
    { id: 72, nombre: "Hermosillo", estadoid: 5 },
    { id: 73, nombre: "La Paz", estadoid: 8 },
    { id: 74, nombre: "León", estadoid: 1 },
    { id: 75, nombre: "Los Mochis", estadoid: 3 },
    { id: 76, nombre: "Mazatlán", estadoid: 6 },
    { id: 77, nombre: "Mérida", estadoid: 8 },
    { id: 78, nombre: "Mexicali", estadoid: 2 },
    { id: 79, nombre: "Monterrey", estadoid: 4 },
    { id: 80, nombre: "Morelia", estadoid: 8 },
    { id: 81, nombre: "Nuevo Laredo", estadoid: 6 },
    { id: 82, nombre: "Oaxaca de Juárez", estadoid: 3 },
    { id: 83, nombre: "Pachuca", estadoid: 4 },
    { id: 84, nombre: "Puebla", estadoid: 6 },
    { id: 85, nombre: "Puerto Vallarta", estadoid: 2 },
    { id: 86, nombre: "Querétaro", estadoid: 7 },
    { id: 87, nombre: "Reynosa", estadoid: 1 },
    { id: 88, nombre: "Saltillo", estadoid: 6 },
    { id: 89, nombre: "San Cristóbal de las Casas", estadoid: 4 },
    { id: 90, nombre: "San Luis Potosí", estadoid: 8 },
    { id: 91, nombre: "Tampico", estadoid: 9 },
    { id: 92, nombre: "Tijuana", estadoid: 8 },
    { id: 93, nombre: "Toluca", estadoid: 8 },
    { id: 94, nombre: "Torreón", estadoid: 8 },
    { id: 95, nombre: "Tuxtla Gutiérrez", estadoid: 9 },
    { id: 96, nombre: "Uruapan", estadoid: 8 },
    { id: 97, nombre: "Veracruz", estadoid: 7 },
    { id: 98, nombre: "Villahermosa", estadoid: 10 },
    { id: 99, nombre: "Xalapa", estadoid: 7 },
    { id: 100, nombre: "Zacatecas", estadoid: 8 },
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
        axios
          .post("http://localhost:5000/users/postCity", { data: item })
          .then((response) => {
            setProgreso((index + 1) * 1);
          });
      },
      900
    );
  };
  return (
    <div>
      <button onClick={fetch}>Preparar Ciudades</button>
      <span>
        Progreso: {Progreso == 100 ? <>Finalizado!!</> : <>{Progreso}%</>}
      </span>
    </div>
  );
}
