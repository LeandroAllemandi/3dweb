import React from "react";
import './index.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="nav-left">
        {/* Navbar principal (izquierda) */}
        <nav className="nav">
          <ul>
            <li>
              <a href="#">
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Noticias</span>
              </a>
            </li>
            <li>
              <a href="#" className="is-active">
                <span>Blogs</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logo centrado */}
      <figure className="logo"></figure>

      <div className="nav-right">
        {/* Navbar derecho */}
        <nav className="nav">
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <span>Ingresar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Sobre nosotros</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
