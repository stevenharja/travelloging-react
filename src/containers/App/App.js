import React, { Component } from "react";
import classes from "./App.module.scss";
import axios from "axios";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogPost from "../../components/BlogPost/BlogPost";
import Hero from "../../components/Hero/Hero";

// https://jsonplaceholder.typicode.com/posts

class App extends Component {
  state = {
    headerNavs: ["Home", "Blogs"],
    posts: null,
    startPost: 0,
    numPerPage: 10,
    postBeingDisplayed: null,
  };

  async componentDidMount() {
    const URL_CALL = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(URL_CALL);
    this.setState({ posts: response.data });
  }

  displayPost(postId = null) {
    this.setState({ postBeingDisplayed: postId });
  }

  render() {
    let content;
    let contentType;
    if (this.state.posts && !this.state.postBeingDisplayed) {
      content = this.state.posts
        .slice(
          this.state.startPost,
          this.state.startPost + this.state.numPerPage
        )
        .map((post) => {
          return (
            <BlogCard
              title={post.title}
              body={post.body}
              id={post.id}
              userId={post.userId}
              key={post.id}
              clicked={() => this.displayPost(post.id)}
            />
          );
        });
      contentType = "All Blog Posts";
    }
    if (this.state.postBeingDisplayed) {
      content = (
        <BlogPost
          post={this.state.posts[this.state.postBeingDisplayed]}
          backClick={() => this.displayPost()}
        ></BlogPost>
      );
      contentType = "Blog Post";
    }
    return (
      <div className={classes.App}>
        <Hero navItems={this.state.headerNavs} />
        <div className={`${classes.App__content} ${contentType}`}>
          <div className={`${classes.App__shadow} section-shadow`} />
          <h1 className={classes.App__heading}>{contentType}</h1>
          {content}
        </div>
      </div>
    );
  }
}

export default App;
