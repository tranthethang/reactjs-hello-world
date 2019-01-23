class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        }
    }

    render() {
        return <h2>Hi, {this.state.name}</h2>
    }
}

let element =
    <div>
        <Welcome name="John Doe"/>
        <Welcome name="Kia Lee"/>
        <Welcome name="Best Big"/>
    </div>;

ReactDOM.render(
    element,
    document.getElementById('root')
);