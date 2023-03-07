import React, { useState } from "react";
import "../style/navbar.css";
import { Link, useLocation } from "react-scroll";

const NavBar = () => {
  const [Navbar, setNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

    const closeDropdown = () => {
      setShowDropdown(false);
    };
    
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
          <Link>Home</Link>
        </li>
        <li>
          <Link>
            <button
              onClick={toggleDropdown}
              className={
                location.pathname === "/"
                  ? "active"
                  : ""
              }
            >
              WORLD ▼
            </button>
          </Link>
        </li>
        <li>
          <Link>Skills</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
