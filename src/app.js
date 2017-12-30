console.log('App.js is running!');

// JSX - JavaScript XML

//only render the subtitle and p tag if subitle exist - logical and poerator
//render enw p tag - if options.length > 0 "here are your options" "No options"

const app = {
    title: 'Indecision App',
    subtitles: 'put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const remove = () => {
    app.options = [];
    render();
}



const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitles && <p>{app.subtitles}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : "no options"}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={remove}>Remove all</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

//오브젝트 안에 있는 어레이는 각각의 오브젝트와 같다. 


















//true ? 'Andrew : 'Anonymous'
//undefined null bolleans are ignored by JSX and it's useful!
//JSX doesn't have built in function to bind.....  




