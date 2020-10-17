import React from "react";
import classes from "./BlogPost.module.scss";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import blog_picture from "../../assets/img/blog_post.jpg";
import blog_picture2 from "../../assets/img/blog_post2.jpg";
import blog_picture3 from "../../assets/img/blog_post3.jpg";
import author from "../../assets/img/author_pic.jpg";
import ImageGallery from "../ImageGallery/ImageGallery";

const blogPost = (props) => {
  const post = props.post;
  const gallery = [blog_picture, blog_picture2, blog_picture3];
  return (
    <React.Fragment>
      <Fade left delay={300}>
        <button onClick={props.backClick} className={classes.BackBtn}>
          Back
        </button>
        <div className={classes.BlogPost}>
          <h1 className={classes.BlogPost__title}>{post.title}</h1>
          <ImageGallery imageLinks={gallery} />
          <p className={classes.BlogPost__body}>{post.body}</p>
          <Tilt className="Tilt" options={{ max: 45 }}>
            <div className={classes.BlogPost__author}>
              <img src={author} alt="author" />
              <div>Person {post.userId}</div>
            </div>
          </Tilt>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default blogPost;
