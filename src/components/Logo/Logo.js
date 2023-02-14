import React from "react";
import logo from "../../assets/burger.png";
import classes from "./Logo.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={logo} alt="MyBurger"></img>
  </div>
);

export default Logo;
