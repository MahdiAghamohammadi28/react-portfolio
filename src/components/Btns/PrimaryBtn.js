import React from "react";
import classes from "./PrimaryBtn.module.css";

const PrimaryBtn = (props) => {
  return <button className={classes.btn}>{props.children}</button>;
};

export default PrimaryBtn;
