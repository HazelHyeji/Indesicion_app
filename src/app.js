class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
    render(){
        return(
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render() {
        return (
            <div>
                {
                    this.props.options.map((option, index) => <Option key={index} optionText={option}>{option}</Option>)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option : {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component{ 
    render(){
        return(
            <div>
                opttions go here
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
