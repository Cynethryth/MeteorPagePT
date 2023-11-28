import React, { useState, useEffect } from "react";
import CuidLabel from "../components/Cuidadores/CuidLabel";
import axios from "axios";
import { estados, ciudades } from "../constantes";

export default function BuscarCuidador() {
  const [Sitters, setSitters] = useState([]);

  const [Inputs, setInputs] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    estado: "",
    ciudad: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/petsitter/all").then((response) => {
      setSitters(response.data);
      console.log(response.data);
    });
  }, []);

  function getEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mesHoy = hoy.getMonth();
    const mesNac = fechaNac.getMonth();
    if (
      mesNac > mesHoy ||
      (mesNac === mesHoy && hoy.getDate() < fechaNac.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  let filtro1 = !Inputs.nombre
    ? Sitters
    : Sitters.filter((dato) =>
        dato.nombre.toUpperCase().includes(Inputs.nombre.toUpperCase())
      );
  let filtro2 = !Inputs.apellidos
    ? filtro1
    : filtro1.filter((dato) =>
        dato.apellidos.toUpperCase().includes(Inputs.apellidos.toUpperCase())
      );
  let filtro3 = !Inputs.edad
    ? filtro2
    : filtro2.filter((dato) => getEdad(dato.birth) >= Inputs.edad);

  let filtro4 = !Inputs.estado
    ? filtro3
    : filtro3.filter((dato) => dato.stateId == Inputs.estado);

  let filtro5 = !Inputs.ciudad
    ? filtro4
    : filtro4.filter((dato) => dato.ciudadId == Inputs.ciudad);

  let ciudadesFil = !Inputs.estado
    ? ciudades
    : ciudades.filter((dato) => dato.estadoid == Inputs.estado);

  return (
    <div>
      <div className="topcontainerdetailsa">
        <div className="ContainerDet2">
          <h2>Pet Sitters</h2>
          <div className="filterContainer" >
            <select
              className="form-select"
              value={Inputs.estado}
              aria-label="Default select example"
              onChange={({ target }) => {
                setInputs({ ...Inputs, estado: target.value, ciudad: "" });
              }}
            >
              <option value={""}>Estado</option>
              {estados.map((data, i) => (
                <option key={i} value={data.id}>
                  {data.nombre}
                </option>
              ))}
            </select>
            <select
              className="form-select"
              value={Inputs.ciudad}
              aria-label="Default select example"
              onChange={({ target }) => {
                setInputs({ ...Inputs, ciudad: target.value });
              }}
            >
              <option value={""}>Ciudad</option>
              {ciudadesFil.map((data, i) => (
                <option key={i} value={data.id}>
                  {data.nombre}
                </option>
              ))}
            </select>
            <input
              placeholder="Nombre"
              value={Inputs.nombre}
              onChange={({ target }) => {
                setInputs({ ...Inputs, nombre: target.value });
              }}
            />
            <input
              placeholder="Apellidos"
              value={Inputs.apellidos}
              onChange={({ target }) => {
                setInputs({ ...Inputs, apellidos: target.value });
              }}
            />
            <input
              placeholder="Mayor que "
              type="number"
              value={Inputs.edad}
              onChange={({ target }) => {
                setInputs({ ...Inputs, edad: target.value });
              }}
            />
          </div>
          <div className="DetailsGallery">
            {filtro5.map((element, i) => (
              <CuidLabel key={i} data={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
