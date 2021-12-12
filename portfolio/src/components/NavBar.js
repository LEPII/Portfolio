import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [Navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={Navbar ? "navbar__list active" : "navbar__list"}>
      <ul isDynamic={true}>
        <li>
          <Link to="section1" smooth={true} duration={200} isDynamic={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={200} isDynamic={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={200} isDynamic={true}
>
            Skills
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={200} isDynamic={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="section5" smooth={true} duration={200} isDynamic={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
