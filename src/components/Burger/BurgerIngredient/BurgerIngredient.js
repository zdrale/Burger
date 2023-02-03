import classes from "./BurgerIngredients.css";
import { checkPropTypes } from "prop-types";
import { Component } from "react";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="bread-top">
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1}></div>
              <div className={classes.Seeds2}></div>
            </div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "Salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "Bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredients.checkPropTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
