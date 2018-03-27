import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_nav">
        <li>
          <a id="footer_home_link" href="/home">
            Home
          </a>
        </li>
        <li>
          <a id="footer_fabrics_link" href="/fabrics">
            Fabrics
          </a>
        </li>
        <li>
          <a id="footer_help_link" href="/help">
            Help
          </a>
        </li>
        <li>
          <a id="footer_about_link" href="/custom">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
