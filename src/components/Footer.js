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
          <a id="footer_fabrics_link" href="/fabrics">
            Fabrics
          </a>
        </li>
        <li>
          <Link id="footer_help_link" to="/help">
            Help
          </Link>
        </li>
        <li>
          <Link id="footer_about_link" to="/custom">
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
