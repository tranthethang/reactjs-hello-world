class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <p>
                {this.state.date.toLocaleTimeString()}
            </p>
        );
    }
}

let element = (
    <div>
        <Clock/>
        <Clock/>
        <Clock/>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));
