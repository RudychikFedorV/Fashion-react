import React from "react";
import logoImg from "./../../img/icons/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={logoImg} alt="Logo" />
            <span>FASHION</span>
          </div>
          <nav className="header-nav">
            <ul>
              <li>
                <a href="#!">CATALOGUE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVOURITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a href="#!" className="header-nav__btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
