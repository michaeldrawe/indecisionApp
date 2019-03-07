console.log("App.js is running!");

//JSX - JavaScript XML
var template = (
  <div>
    <h1>Did this change?</h1>
    <p>This is new info</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
