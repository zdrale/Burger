import React, { Component } from "react";
import Auxilery from "../hoc/Auxilery";
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxilery>
        <Burger />
      </Auxilery>
    );
  }
}

export default BurgerBuilder;
