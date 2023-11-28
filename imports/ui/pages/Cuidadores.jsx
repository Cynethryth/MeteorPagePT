import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CrateReseña from "../components/Cuidadores/CrateReseña";
import ReseñaLbl from "../components/Cuidadores/ReseñaLbl";

export default function Cuidadores() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const [User, setUser] = useState({});
  const [Mascotas, setMascotas] = useState([]);
  const [Reviews, setReviews] = useState([]);

  const getProfile = () => {
    axios(`http://localhost:5000/petsitter/getById/${userId}`).then(
      (response) => {
        setUser(response.data[0]);
      }
    );
  };
  const getMascotas = () => {
    axios(`http://localhost:5000/petType/getTypes/${userId}`).then(
      (response) => {
        setMascotas(response.data);
      }
    );
  };
  const getReviews = () => {
    axios(`http://localhost:5000/reviews/getById/${userId}`).then(
      (response) => {
        console.log(response.data);
        setReviews(response.data);
      }
    );
  };

  useEffect(() => {
    getProfile();
    getMascotas();
    getReviews();
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

  return (
    <div className="Background2">
      <div className="TopContainerDetails">
        <img
          className="ImageTopDetails"
          src={`https://wallpapers.com/images/hd/grass-and-sky-background-mbtrpqi4i3ttlp52.jpg`}
        />
        <div className="TopProfileDetails">
          <div className="ContenedorTopDetails">
            <div className="TopCD1">
              <img className="ProfileImageDetails" src={User.photoURL} />
            </div>
            <div className="TopCD1">
              <p>
                {User.nombre} {User.apellidos}
              </p>
              <span>{getEdad(User.birth)} años</span>
            </div>
            <div className="TopCD1">
              <span>
                {User.ciudadNombre}, {User.estadoNombre}
              </span>
              <span>Texto3</span>
            </div>
            <div className="TopCD1">
              <span>Texto5</span>
              <span> Texto4 </span>
            </div>

            <div className="TopCD1">
              <span> Contacos: </span>
              <span>Tel: {User.telefono}</span>
              <span>{User.email} </span>
            </div>

            {/* <div className="TopCD1">
                <button
                  className="BlueBtn"
                  onClick={() => {
                    alert("boton");
                  }}
                >
                  Seguir
                </button>
              </div> */}
            {/* <button
        onClick={() => {
          console.log(Mostrar1, 1);
          console.log(Mostrar2, 2);
          console.log(Mostrar3, 3);
        }}
      >aaaaaaa</button> */}
          </div>
        </div>
      </div>

      <div className="topcontainerdetailsa">
        <div className="ContainerDet2">
          <span>Mascotas</span>
          <div className="DetailsGallery">
            {Mascotas.map((data, i) => (
              <div className="Infgendiv4" key={i}>
                <img src={`/images/${data.petTypeId}.svg`} />
                <div>{data.descripcion}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="topcontainerdetailsa">
        <div className="ContainerDet2">
          <span>Reseñas</span>
          <CrateReseña data={userId} />
          <div className="DetailsGallery2">
            {Reviews.map((data, i) => (
              <ReseñaLbl data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
