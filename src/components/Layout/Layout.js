import Auxilery from "../../hoc/Auxilery";
import React from "react";
const Layout = (props) => (
  <Auxilery>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxilery>
);

export default Layout;
