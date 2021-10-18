import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-mailing">
        <div className="footer-mailing-address">Updates in your inbox...</div>
        <div className="footer-submit">GO</div>
      </div>
      <div className="footer-nav">
        <a href="/">Home</a>
        <a href="/">Careers</a>
        <a href="/">Pricing</a>
        <a href="/">Community</a>
        <a href="/">Products</a>
        <a href="/">Privacy Policy</a>
        <a href="/">About Us</a>
      </div>
      <img src="/images/logo.svg" alt="logo" />

      <footer>Copyright 2021. All right reserved</footer>
    </div>
  );
}

export default Footer;
