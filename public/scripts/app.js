'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

//only render the subtitle and p tag if subitle exist - logical and poerator
//render enw p tag - if options.length > 0 "here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitles: 'put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var remove = function remove() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitles && React.createElement(
            'p',
            null,
            app.subtitles
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'here are your options' : "no options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                app.options[0]
            ),
            React.createElement(
                'li',
                null,
                app.options[1]
            )
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number: ',
                number
            );
        }),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: remove },
                'Remove all'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();

//오브젝트 안에 있는 어레이는 각각의 오브젝트와 같다. 


//true ? 'Andrew : 'Anonymous'
//undefined null bolleans are ignored by JSX and it's useful!
//JSX doesn't have built in function to bind.....
