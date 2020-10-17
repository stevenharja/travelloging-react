import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Front End Code
const translate = document.querySelectorAll(".translate");
const header = document.querySelector("header");
const headerTitle = document.querySelector(".hero-title");
const headerShadow = document.querySelector(".section-shadow");
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  translate.forEach((element) => {
    let speed = element.dataset.speed;
    let direction = element.dataset.direction ? element.dataset.direction : "y";
    element.style.transform = `translate${direction}(${scroll * speed}px)`;
  });
  headerTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
  headerShadow.style.height = `${scroll * 0.5 + 300}px`;
});

let createSquare = () => {
  const square = document.createElement("span");
  square.classList.add("bg-circle");
  if (header) {
    let size = Math.random() * 50;

    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";

    square.style.top = Math.random() * header.offsetHeight - 100 + "px";
    square.style.left = Math.random() * header.offsetWidth - 100 + "px";
    header.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 5000);
  }
};

setInterval(createSquare, 150);

const position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--mouseX", e.clientX + "px");
  position.style.setProperty("--mouseY", e.clientY + "px");
});
