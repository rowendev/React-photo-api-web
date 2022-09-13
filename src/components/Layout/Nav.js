import React, { useState } from "react";
import { Link } from "react-router-dom";

import ReactSwitch from "react-switch";
const Nav = (props) => {
  const [isExtand, setIsExtand] = useState(false);
  const showLinkGroup = () => {
    setIsExtand(!isExtand);
  };
  return (
    <header>
      <div className="link">
        <Link to="/">首頁</Link>
        <Link to="/about">關於</Link>
        <Link to="/contact">聯絡作者</Link>
        {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />*/}
      </div>
    </header>
  );
};

export default Nav;
