import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredient/BurgerIngredient";
import React from "react";

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
