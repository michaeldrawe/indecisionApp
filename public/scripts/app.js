"use strict";

//Used so we know this file is being used
console.log("App.js is running!");

// create app object title/subtitle
//user title/subtitle in the template

// only render the subtitle (and p tag) if subtitle exists
//render new p tag -- if options.length > 0 "here are your options" "no options"

var app = {
  title: "Indecision App",
  subtitle: "Making decisions a little easier",
  options: ["One", "Two"]
};
function getSubtitle(subtitle) {
  if (subtitle) {
    return React.createElement(
      "p",
      null,
      subtitle
    );
  }
}

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  { style: { textAlign: "center" } },
  React.createElement(
    "h1",
    { style: { backgroundColor: "grey" } },
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle ? app.subtitle : "No Subtitle"
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? 'Here are your options: "' + app.options + '"' : "no options"
  )
);

var user = {
  name: "Michael",
  age: 39,
  location: ""
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
