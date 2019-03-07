"use strict";

console.log("App.js is running!");

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Did this change?"
  ),
  React.createElement(
    "p",
    null,
    "This is new info"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
