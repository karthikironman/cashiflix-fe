import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
// import logo from '../../images/logo.png'
import "./navbar.css";
import logo from "../../images/logo.png"
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo_img" src={logo} alt=""/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links " onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about"  className="nav-links" onClick={closeMobileMenu}>
              About Us
              </Link>
            </li>
         
            <li className="dropdown nav-item">
              <Link
                onClick={closeMobileMenu}
                className="dropdown_color dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link
                  to="/sell"
                  onClick={closeMobileMenu}
                  class="dropdown-item"
                >
               Sell
                </Link>
                <Link to="/" onClick={closeMobileMenu} className="dropdown-item">
                Repair
                </Link>
                <Link to="/" onClick={closeMobileMenu} className="dropdown-item">
                Buy
                </Link>
                <Link to="/" onClick={closeMobileMenu} className="dropdown-item">
                Recycle
                </Link>
              </div>
            </li>
           
            <li className="nav-item">
              <Link to="/blog"  className="nav-links" onClick={closeMobileMenu}>
              Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career"  className="nav-links" onClick={closeMobileMenu}>
             Career
              </Link>
            </li>






            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Contact Us
              </Link>
            </li>
              {/* <li className="nav-item">
              <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
               SignUp
              </Link>
            </li> */}
            <li className="nav-item login_classdiv">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Login
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
