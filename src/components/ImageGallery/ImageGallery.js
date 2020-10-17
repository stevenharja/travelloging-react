import React from "react";
import classes from "./ImageGallery.module.scss";
import Imgix from "react-imgix";

const imageGallery = (props) => {
  let imageIndex = 0;
  const images = props.imageLinks.map((element) => {
    imageIndex++;
    return (
      <span
        className={`${classes.ImageGallery__imgBox} ${
          classes[`ImageGallery__imgBox--${imageIndex}`]
        }`}
        key={imageIndex}
      >
        <Imgix
          src={element}
          alt="blog"
          key={`img-${imageIndex}`}
          className={classes.ImageGallery__img}
          sizes={"100vw"}
          imgixParams={{ q: 50, fit: "crop", w: 1086, h: 3000 }}
        />
        <div
          className={classes.ImageGallery__caption}
        >{`Picture of ${imageIndex}`}</div>
      </span>
    );
  });
  return <div className={classes.ImageGallery}>{images}</div>;
};

export default imageGallery;
