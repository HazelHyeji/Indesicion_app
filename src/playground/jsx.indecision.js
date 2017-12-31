console.log('App.js is running!');

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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitles && <p>{app.subtitles}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : "no options"}</p>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={remove}>Remove all</button>
                <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

//오브젝트 안에 있는 어레이는 각각의 오브젝트와 같다. 


















//true ? 'Andrew : 'Anonymous'
//undefined null bolleans are ignored by JSX and it's useful!
//JSX doesn't have built in function to bind.....  




