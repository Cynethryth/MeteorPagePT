import React from "react";

export default function CuidLabel({ data }) {
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
  return (
    <div className="LabelCuvo">
      <div className="ImgCuvoLabel">
        <img
          src={
            data.photoURL ||
            "https://pics.filmaffinity.com/El_gato_con_botas_El_ltimo_deseo-897078202-large.jpg"
          }
        />
      </div>
      <div className="DatsCuvoLabel">
        <div className="class1">
          <span>
            {data.nombre} {data.apellidos}
          </span>

          <span>Edad: {getEdad(data.birth)}</span>
          <span>
            Ubicacion: {data.ciudadNombre}, {data.estadoNombre}
          </span>
          <a href={`/cuidadores/?id=${data.id}`} id="BT1">
            Perfil
          </a>
        </div>
      </div>
    </div>
  );
}
