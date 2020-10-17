import React from "react";
import HeaderOption from "./HeaderOption/HeaderOption";
import classes from "./Header.module.scss";
import logo from "../../assets/img/camera-retro.svg";

const header = (props) => {
  let nav;
  if (props.navItems) {
    nav = props.navItems.map((nav) => {
      return <HeaderOption title={nav} key={nav} />;
    });
  }
  return (
    <div className={classes.Header}>
      <img className={classes.Header__logo} src={logo}></img>
      <div>{nav}</div>
    </div>
  );
};

export default header;
