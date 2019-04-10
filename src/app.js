console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item Three</li>
    </ol>
  </div>
);

let count = 0;

const addOne = ()=>{
  count = count +1;
  renderCounterApp();
};
const minusOne = ()=>{
  if (count > 0) {
    count = count -1;
  }
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp ();
};



const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <fragment>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={minusOne}>-1</button>
    </fragment>
);

ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();