import React from "react";
import classes from "./Modal.css";
import Auxilery from "../../../hoc/Auxilery";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <Auxilery>
    <Backdrop clicked={props.modalClosed} show={props.show} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Auxilery>
);

export default Modal;
