// import the useState
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import the icons
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
// import the button data from button.js
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  // add Javascript here ->

  // create a useState variable with the initval of false
  const [click, setClick] = useState(false);

  // set a useState variable with the initval true
  const [button, setButton] = useState(true);

  // create a arrow type function that toggles the setClick parameter in the useState
  const handleClick = () => setClick(!click);

  // create a function closeMobileMenu and set the click value to false to close the mobile menu
  const closeMobileMenu = () => setClick(false);

  // create a function showButton that check the width of the page and toggles the button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* add a global style with the color white  */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            {/* Use the link route propertie to navigate */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* use the fingerprint icon */}
              <MdFingerprint className="navbar-icon" />
              Lavish
            </Link>

            {/* onclick handle the handleClick funtion */}
            <div className="menu-icon" onClick={handleClick}>
              {/* add a ternery operator to check the current state */}
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {/* check if button is clicked else show just nav menu */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {/* link the navbar items */}
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Producten
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-btn">
                {/* check if button is true else show the mobile button */}
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Meld je aan!</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Meld je aan!
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
