"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  //e.preventDefault() prevents the whole page from re-rendering

  var option = e.target.elements.option.value;

  if (option) {
    //add typed value to array
    app.options.push(option);
    //set value to an empty string
    e.target.elements.option.value = "";
    render();
  };
};

//create "REmove All" button above list
// onClick -> wipe the array, and re-render


var appRoot = document.getElementById("app");

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option "
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
