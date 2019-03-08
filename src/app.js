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
    return <p>{subtitle}</p>;
  }
}

//JSX - JavaScript XML
var template = (
  <div style={{ textAlign: "center" }}>
    <h1>{app.title}</h1>
    <p>{app.subtitle ? app.subtitle : "No Subtitle"}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "no options"}</p>
  </div>
);

var user = {
  name: "Michael",
  age: 39,
  location: ""
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
