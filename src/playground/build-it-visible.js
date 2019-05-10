let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <fragment>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show Details"}
        </button>
        {visibility && (
            <fragment>
            <p>Hey. These are some details you can now see</p>
            </fragment>
        )}
        </fragment>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();