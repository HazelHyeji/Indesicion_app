class VisibililtyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisible = this.handleToggleVisible.bind(this);
        this.state = {
            visibililty: false
        };
    }
    handleToggleVisible() {
        this.setState((prevState)=> {
            return{
                visibililty: !prevState.visibililty
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleToggleVisible}>
                    {this.state.visibililty ? "Show detail" : "Hide detail"}
                </button>
                {this.state.visibililty && <p>Heya! here is something.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibililtyToggle />, document.getElementById("app"));



// let visibililty = false;

// const toggleVisible = () => {
//     visibililty = !visibililty;
//     render();
// };

// const render = () => {
//     const jsx = (

//     );

// }

// render();