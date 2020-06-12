import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-links">
        <a
          href="/#"
        >
          Privacy hub
        </a>
        <span> | </span>
        <a href="/#">
        Privacy policy
        </a>
        <span> | </span>
        <a href="/#">
        Cookies policy
        </a>
        <span> | </span>
        <a href="/#">
          Terms & conditions
        </a>
      </p>
      <p>
        &copy; Argos Limited 2020. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;