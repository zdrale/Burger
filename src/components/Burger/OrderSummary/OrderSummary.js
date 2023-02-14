import React from "react";
import Auxilery from "../../../hoc/Auxilery";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredintSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxilery>
      <h3>Your order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>{ingredintSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)} </strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Auxilery>
  );
};

export default OrderSummary;
