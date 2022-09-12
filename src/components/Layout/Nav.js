import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = (props) => {
  console.log(props.themeValue);
  const [isExtand, setIsExtand] = useState(false);
  const showLinkGroup = () => {
    setIsExtand(!isExtand);
  };
  return (
    <nav className={`${classes.header} ${props.themeValue}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" className={classes.navicon}>
          {/* <FontAwesomeIcon icon={faCamera} /> */}
          <span style={{ marginLeft: "0.7rem" }}>
            <h1
              className={classes.h1}
              style={{
                color: `${props.themeValue === "dark" ? "white" : "black"}`,
              }}
            >
              React APP
            </h1>
          </span>
        </Link>
        <button className={classes.menu} onClick={showLinkGroup}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        style={{ marginRight: "3rem" }}
        className={
          isExtand
            ? `${classes["navigation-menu"]}`
            : `${classes["navigation-menu"]} ${"expanded"}`
        }
      >
        <div>
          <Link
            to="/"
            style={{
              color: `${props.themeValue === "dark" ? "white" : "black"}`,
            }}
          >
            首頁
          </Link>
          <Link
            to="/about"
            style={{
              color: `${props.themeValue === "dark" ? "white" : "black"}`,
            }}
          >
            關於
          </Link>
          <Link
            to="/contact"
            style={{
              color: `${props.themeValue === "dark" ? "white" : "black"}`,
            }}
          >
            聯絡作者
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
