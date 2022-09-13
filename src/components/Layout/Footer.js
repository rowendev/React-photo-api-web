import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      Created by
      <Link
        to="/contact"
        style={{ margin: "0 0.3rem", textDecoration: "underline" }}
      >
        Rowen
      </Link>
      , copyright 2022 ™
    </footer>
  );
};

export default Footer;
