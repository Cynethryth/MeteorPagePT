import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { Cookies } from "react-cookie";

export default function Login() {
  const cookie = new Cookies();
  const [User, setUser] = useState({
    Email: "",
    Password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/users/login`, {
        data: User,
      })
      .then((response) => {
        // console.log(response);
        cookie.set("user", response.data.usuario, { path: "/" });
        alert("Se inicio sesion correctamente");
        window.location.href = "/";
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.respuesta);
          setUser({ ...User, Password: "" });
        } else if (error.request) {
          console.log("No se recibió respuesta del servidor");
        } else {
          console.log(
            "Error durante la configuración de la solicitud:",
            error.message
          );
        }
      });
  };

  return (
    <div className="float2">
      <div className="section">
        <div className="imgBx">
          <img src="https://www.suburbanpets.com/wp-content/uploads/2021/06/dog-walk-PWHJWKG-1-copy.jpg" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Iniciar Sesion</h2>
            <form>
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
                <span>Password</span>
                <input
                  type="password"
                  value={User.Password}
                  onChange={({ target }) => {
                    setUser({ ...User, Password: target.value });
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
                    login(e);
                  }}
                  value={"Iniciar Sesion"}
                />
              </div>
              <div className="inputBx">
                <p>
                  ¿No tienes cuenta? <a href="/register">Registrate aqui</a>
                </p>
              </div>
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
