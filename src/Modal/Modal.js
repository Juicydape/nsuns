import React, { Fragment } from "react";
import ReactDom from 'react-dom'
import classes from "./Modal.module.scss";

const Modal = (props) => {
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={() => {props.setInstructionsAreOpen(false)}}></div>
      <div className={classes.modal}>
        {props.children}
      </div>
    </Fragment>, document.getElementById("modal")
  );
};

export default Modal;
