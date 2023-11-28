import React from "react";
import { Cookies } from "react-cookie";
import NavUser from "./NavUser";

export default function Navbar() {
  const cookies = new Cookies();
  const usuario = cookies.get("user");
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PetSitter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/buscarCuidador">
                Buscar Cuidador
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div>
            {usuario ? (
              <NavUser data={usuario} />
            ) : (
              <a className="loginBtn" href="/login" title="login page">
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
