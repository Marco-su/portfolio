import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./Navbar.css";

const Nabvar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > window.innerHeight) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-dark ${
        activeNavbar ? "active-navbar" : ""
      }`}
    >
      <div className="container">
        <HashLink className="navbar-brand" to="#home">
          MARCO SUBERO
        </HashLink>
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

        <div
          className="elements-list collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li>
              <HashLink className="nav-link" to="#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" to="#portfolio">
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
