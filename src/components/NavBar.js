import React, { useState } from "react";
import "../style/navbar.css";
import { HashLink } from "react-router-hash-link";

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
    <nav>
      <ul className={Navbar ? "navbar__list active" : "navbar__list"}>
        <li>
          <HashLink to="/#home_top">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#pro_top">Projects</HashLink>
        </li>
        <li>
               <HashLink to="/contact/#top"> Contact </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
