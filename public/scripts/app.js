"use strict";

console.log("app is running");

var visibililty = false;

var toggleVisible = function toggleVisible() {
    visibililty = !visibililty;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visible Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisible },
            visibililty ? "Show detail" : "Hide detail"
        ),
        visibililty && React.createElement(
            "p",
            null,
            "Heya! here is something."
        )
    );
    ReactDOM.render(jsx, document.getElementById("app"));
};

render();
