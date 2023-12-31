import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Backdrop = (props) => {
  return (
    <div className={props.faBars ? "" : "backDrop"} onClick={props.onClick} />
  );
};

const Navbar = () => {
  const [faBars, setFaBars] = useState(true);

  if (faBars === false) {
    window.onscroll = () => {
      setFaBars(true);
      console.log("executed");
    };
  }

  const iconClickHandler = () => {
    setFaBars((prevState) => !prevState);
  };

  const portalElement = document.getElementById("overlay");

  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">junaideditz</NavLink>
        </div>

        <div className={`navigations ${faBars ? "" : "conditionalItem"}`}>
          <ul className="">
            <li>
              <NavLink
                className="navlink"
                onClick={iconClickHandler}
                to="/"
                rel="noreferrer"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                onClick={iconClickHandler}
                to="/about"
                rel="noreferrer"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                onClick={iconClickHandler}
                to="/portfolio"
                rel="noreferrer"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <a className="navlink" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="menuBars">
          <i
            className={`fa-solid ${faBars ? "fa-bars" : "fa-xmark"} bars-xmark`}
            onClick={iconClickHandler}
          ></i>
        </div>
      </nav>
      {ReactDOM.createPortal(
        <Backdrop faBars={faBars} onClick={iconClickHandler} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Navbar;
