import React, { useState, useEffect } from "react";
import "../style/navbar2.css";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);


  const handleClick = () => {
    setNavbar(!navbar);
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 60) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <nav
        className={navbar ? "navbar open" : "navbar closed"}
        onClick={handleClick}
      >
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul >
          <li>
            <HashLink to="/#home_top">HOME</HashLink>
          </li>
          <li>
            <HashLink to="/#pro_top">PROJECTS</HashLink>
          </li>
          <li>
            <HashLink to="/contact/#top"> CONTACT </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
