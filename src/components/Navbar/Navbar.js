import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navBarRoutes from "./NavbarRoutes.js";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
            ANT<span>ANA</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navBarRoutes.map((items) => (
              <li className="nav-items" key={items.id}>
                <Link
                  to={items.componentRoute}
                  className={
                    items.componentName === "Join Us"
                      ? "register-nav-link" // now create the class in your css and style it like your button
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  {items.componentName}
                </Link>git s
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
