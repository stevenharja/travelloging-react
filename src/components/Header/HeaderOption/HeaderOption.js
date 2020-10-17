import React from "react";
import classes from "./HeaderOption.module.scss";

const headerOption = (props) => {
  return <button className={classes.HeaderOption}>{props.title}</button>;
};

export default headerOption;
