import React, { useState } from "react";
import "../style/navbar2.css";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isNavClicked, setIsNavClicked] = useState("nav closed")
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setIsNavClicked("nav open")
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setIsNavClicked("nav closed");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav className={isNavClicked} onClick={updateMenu}>
        <div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <ul className={menu_class}>
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
