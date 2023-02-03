import Auxilery from "../../hoc/Auxilery";
import React from "react";
import classes from "./Layout.css";

const Layout = (props) => (
  <Auxilery>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxilery>
);

export default Layout;
