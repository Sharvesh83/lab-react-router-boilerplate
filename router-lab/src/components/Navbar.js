import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Kalvium <span className="heart">💖</span>
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-link-about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
