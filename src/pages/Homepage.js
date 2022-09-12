import React from "react";
import Search from "../components/Search";
import Card from "../components/UI/Card";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <Card>
        <Search />
      </Card>
    </React.Fragment>
  );
};

export default Homepage;
