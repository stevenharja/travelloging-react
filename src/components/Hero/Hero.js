import React from "react";
import classes from "./Hero.module.scss";
import Header from "../Header/Header";
import bgImg1 from "../../assets/img/bg-img.jpg";
import bgImg3 from "../../assets/img/person-bg.png";

const hero = (props) => {
  return (
    <header className={classes.Hero}>
      <Header navItems={props.navItems} />
      <h1
        className={`${classes.Hero__title} translate hero-title`}
        data-speed="0.3"
      >
        Journey of a lifetime.
      </h1>
      <img
        src={bgImg1}
        className={`${classes[`Hero-bg--1`]} translate`}
        data-speed="-0.25"
        data-direction="y"
        alt="hero"
      />
      <img
        src={bgImg3}
        className={`${classes[`Hero-bg--2`]} translate`}
        data-speed="-1"
        data-direction="x"
        alt="hero2"
      />
      <div
        className={`${classes[`Hero-bg--shadow`]} translate hero-shadow`}
        data-speed="0.2"
        data-direction="y"
      />
    </header>
  );
};

export default hero;
