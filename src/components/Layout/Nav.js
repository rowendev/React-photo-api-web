import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ReactSwitch from "react-switch";
const Nav = (props) => {
  const [isExtand, setIsExtand] = useState(false);
  const showLinkGroup = () => {
    setIsExtand(!isExtand);
  };
  return (
    <header>
      <Stack spacing={2} direction="row" alignItems="center">
        <div className="link">
          <Link to="/">首頁</Link>
          <Link to="/about">關於</Link>
          <Link to="/contact">聯絡作者</Link>
          <Link to="/exercise">Material UI 練習</Link>
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />*/}
        </div>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
          size="small"
        >
          登入
        </Button>
      </Stack>
    </header>
  );
};

export default Nav;
