import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [Navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav >
      <ul className={Navbar ? "navbar__list active" : "navbar__list"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
