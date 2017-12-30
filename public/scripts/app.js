'use strict';

console.log('App.js is running!');

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

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

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
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
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
            ),
            React.createElement(
                'button',
                { disabled: app.options.length === 0, onClick: onMakeDecision },
                'What should I do?'
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
