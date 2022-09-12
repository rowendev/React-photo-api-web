import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      Created by
      <Link
        to="/about"
        style={{ margin: "0 0.3rem", textDecoration: "underline" }}
      >
        Rowen
      </Link>
      , copyright 2022 ™
    </footer>
  );
};

export default Footer;
