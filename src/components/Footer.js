import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_nav">
        <li>
          <Link id="footer_home_link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/custom">Fabrics</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
