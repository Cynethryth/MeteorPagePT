import React from "react";
import axios from "axios";
import randomId from "random-id";
export default function CreateSitter() {
  const Estados = [
    { id: 153648, nombre: "Exóticos" },
    { id: 971330, nombre: "Reptiles" },
    { id: 1298038, nombre: "Aves" },
    { id: 1420404, nombre: "Perros" },
    { id: 1775543, nombre: "Gatos" },
    { id: 2356239, nombre: "Serpientes" },
  ];

  function formatearFecha(fechaString) {
    const fecha = new Date(fechaString);
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, "0");
    const day = String(fecha.getDate()).padStart(2, "0");
    const fechaFormateada = `${year}-${month}-${day}`;
    return fechaFormateada;
  }

  function genAleatorio(numero) {
    return Math.floor(Math.random() * numero) + 1;
  }

  function forEachConRetardo(array, callback, delay) {
    array.forEach((item, index) => {
      setTimeout(() => {
        callback(item, index);
      }, index * delay);
    });
  }

  function genArrayAleatorio(arrayOriginal, cantidad) {
    const copiaArray = arrayOriginal.slice();
    const valoresAleatorios = [];
    if (cantidad > arrayOriginal.length) {
      console.error(
        "La cantidad solicitada es mayor que la longitud del array original."
      );
      return valoresAleatorios;
    }
    for (let i = 0; i < cantidad; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
      const valorAleatorio = copiaArray.splice(indiceAleatorio, 1)[0];
      valoresAleatorios.push(valorAleatorio);
    }
    return valoresAleatorios;
  }

  const registrar = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      const info = response.data.results[0];
      const data = {
        id: info.login.salt,
        Nombre: info.name.first,
        Apellidos: info.name.last,
        Email: info.email,
        Telefono: info.phone,
        PhotoURl: info.picture.large,
        Birth: formatearFecha(info.registered.date),
        Estado: genAleatorio(100),
      };

      axios
        .post(`http://localhost:5000/petsitter/registrar`, { data })
        .then((response) => {
          let newArray = genArrayAleatorio(Estados, genAleatorio(4));
          forEachConRetardo(
            newArray,
            (item, index) => {
              let item2 = {
                id: randomId(12, "A0"),
                sitterId: data.id,
                petTypeId: item.id,
              };
              axios
                .post("http://localhost:5000/petType/registrar", {
                  data: item2,
                })
                .then((response) => {});
            },
            900
          );
          alert("Usuario Creado Correctamente");
        });
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          registrar();
        }}
      >
        registrarSitter
      </button>
    </div>
  );
}
