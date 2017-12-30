console.log("app is running");

let visibililty = false;

const toggleVisible = () => {
    visibililty = !visibililty;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={toggleVisible}>
                {visibililty ? "Show detail" : "Hide detail" }
            </button>
            {visibililty && <p>Heya! here is something.</p>}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
}

render();