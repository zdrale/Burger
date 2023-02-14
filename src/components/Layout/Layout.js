import Auxilery from "../../hoc/Auxilery";
import React from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Auxilery>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxilery>
);

export default Layout;
