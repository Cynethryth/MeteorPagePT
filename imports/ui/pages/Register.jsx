import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import axios from "axios";
import "../styles/register.css";
import randomId from "random-id";
import { Cookies } from "react-cookie";

export default function Register() {
  const cookie = new Cookies();
  const [User, setUser] = useState({
    Nombre: "",
    Apellidos: "",
    Direccion: "",
    Telefono: "",
    Email: "",
    Password: "",
  });
  const register = async (e) => {
    e.preventDefault();
    let usuario = { ...User };
    usuario.id = randomId(12, "A0");
    axios
      .post(`http://localhost:5000/users/register`, {
        data: usuario,
      })
      .then((response) => {
        console.log(response.data);
        cookie.set("user", response.data.usuario, { path: '/' });
        alert("Usuario Creado Correctamente");
        window.location.href = "/";
      })
      .catch((error) => {
        // console.log(error)
      });
  };

  return (
    <div className="float">
      {/* <Head>
        <title>Login</title>
      </Head> */}
      <div className="section">
        <div className="imgBx">
          <img src="https://www.suburbanpets.com/wp-content/uploads/2021/06/dog-walk-PWHJWKG-1-copy.jpg" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Registrarme</h2>
            <form>
              <div className="registerDobles">
                <div className="inputBx" id="RegisterNombres">
                  <span>Nombres</span>
                  <input
                    type="text"
                    value={User.Nombre}
                    onChange={({ target }) => {
                      setUser({ ...User, Nombre: target.value });
                    }}
                  />
                </div>
                <div className="inputBx" id="RegisterApellidos">
                  <span>Apellidos</span>
                  <input
                    type="text"
                    value={User.Apellidos}
                    onChange={({ target }) => {
                      setUser({ ...User, Apellidos: target.value });
                    }}
                  />
                </div>
              </div>

              <div className="inputBx">
                <span>Dirección</span>
                <input
                  type="text"
                  value={User.Direccion}
                  onChange={({ target }) => {
                    setUser({ ...User, Direccion: target.value });
                  }}
                />
              </div>
              <div className="inputBx">
                <span>Email</span>
                <input
                  type="text"
                  value={User.Email}
                  onChange={({ target }) => {
                    setUser({ ...User, Email: target.value });
                  }}
                />
              </div>
              <div className="inputBx">
                <span>Contraseña</span>
                <input
                  type="password"
                  value={User.Password}
                  onChange={({ target }) => {
                    setUser({ ...User, Password: target.value });
                  }}
                />
              </div>
              <div className="inputBx">
                <span>Telefono</span>
                <input
                  type="tel"
                  value={User.Telefono}
                  onChange={({ target }) => {
                    setUser({ ...User, Telefono: target.value });
                  }}
                />
              </div>

              {/* <div className="remember}>
              <label>
                <input
                  type="checkbox"
                  // value={Input}
                  // onChange={({target})=>{setInput(target.value)}}
                />
                Remember Me
              </label>
            </div> */}
              <div className="inputBx">
                <input
                  type="submit"
                  onClick={(e) => {
                    register(e);
                  }}
                  value={"Registrarme"}
                />
              </div>
              <div className="inputBx"></div>
            </form>
            <h3>Proximamente</h3>
            <ul className="sci">
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" />
              </li>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" />
              </li>
              <li>
                <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
