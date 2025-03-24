import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="brand-name">Ecoterra</span>
        <span className="viewers">+90 Viewers</span>
      </div>

      <nav className="nav-center">
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Problems</a></li>
          <li><a href="#">Solutions</a></li>
        </ul>
      </nav>

      <div className="nav-right">
        <a href="#" className="contact-btn">Contact Us</a>
      </div>
    </header>
  );
};

export default Navbar;
