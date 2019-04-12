console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  //e.preventDefault() prevents the whole page from re-rendering

  const option = e.target.elements.option.value;

  if(option) {
    //add typed value to array
    app.options.push(option);
    //set value to an empty string
    e.target.elements.option.value = "";
    render();
  };
};

//create "REmove All" button above list
// onClick -> wipe the array, and re-render


const appRoot = document.getElementById("app");

const onRemoveAll = () => {
  app.options = [];
  render();
};

const numbers = [55,101,1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        // numbers.map((number) => {
        //   return <p key={number}>Number: {number}</p>
        // })
      }
      
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};


render();