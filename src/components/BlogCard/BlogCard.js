import React, { Component } from "react";
import classes from "./BlogCard.module.scss";
import Fade from "react-reveal/Fade";

class BlogCard extends Component {
  render() {
    const date = new Date();

    return (
      <div className={classes.BlogCard} onClick={this.props.clicked}>
        <Fade bottom delay={300}>
          <h1 className={classes.BlogCard__title}>{this.props.title}</h1>
          <p className={classes.BlogCard__body}>{this.props.body}</p>
          <div className={classes.BlogCard__details}>
            Author : Person {this.props.userId}
          </div>
          <div className={classes.BlogCard__details}>{date.toDateString()}</div>
        </Fade>
      </div>
    );
  }
}

export default BlogCard;
