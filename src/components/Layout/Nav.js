import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className={classes.header}>
      <Link to="/" className={classes.navicon}>
        <FontAwesomeIcon icon={faCamera} />
        <span style={{ marginLeft: "0.7rem" }}>ReactPhotoWeb</span>
      </Link>
      <div style={{ marginRight: "8rem" }}>
        <Link to="/">首頁</Link>
        <Link to="/about">關於</Link>
        <Link to="/contact">聯絡作者</Link>
      </div>
    </nav>
  );
};

export default Nav;
