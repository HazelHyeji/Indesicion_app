
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option, index) => <Option key={index} optionText={option}>{option}</Option>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option : {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="hazel is awesome"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
