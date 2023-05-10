import React, { useState } from "react";
import "../style/navbar2.css";
import { HashLink } from "react-router-hash-link";


const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <ul className={menu_class}>
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
    </>
  );
}

export default NavBar;
