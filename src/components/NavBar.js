import React, { useState } from "react";
import "../style/navbar.css";
import { HashLink } from "react-router-hash-link";


const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav
        className={navbar ? "navbar open" : "navbar closed"}
        onClick={handleClick}
      >
        <div className="burger_bars">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li>
            <HashLink to="/#home_top" smooth={true} duration={500}>
              &lt; Home &#47;&gt;
            </HashLink>
          </li>
          <li>
            <HashLink to="/#pro_top" smooth={true} duration={500}>
              &lt; Projects &#47;&gt;
            </HashLink>
          </li>
          <li>
            <HashLink to="/contact/#top">&lt; Contact &#47;&gt;</HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
