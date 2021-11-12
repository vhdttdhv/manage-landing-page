import React from "react";
import "../styles/Nav.css";
import { useState } from "react";
import Button from "../components/small-components/Button";
function Nav() {
  const [isHam, setIsHam] = useState(true);
  return (
    <div>
      <div className="nav-wrapper">
        <a href="/" className="nav-logo">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <div className="nav-desktop-wrapper">
          <a href="/">Pricing</a>
          <a href="/">Product</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
        </div>
        <div
          className="nav-hamburger"
          onClick={() => {
            setIsHam(!isHam);
          }}
        >
          <img
            src={`/images/icon-${isHam ? "hamburger" : "close"}.svg`}
            alt="nav hamburger"
          />
        </div>
        <div className="nav-button">
          <Button />
        </div>
      </div>
      {!isHam ? (
        <div
          className="nav-popup-wrapper"
          onClick={() => {
            setIsHam(!isHam);
          }}
        >
          <div className="nav-popup">
            <a href="/">
              <b>Pricing</b>
            </a>
            <a href="/">
              <b>Product</b>
            </a>
            <a href="/">
              <b>About Us</b>
            </a>
            <a href="/">
              <b>Careers</b>
            </a>
            <a href="/">
              <b>Community</b>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
