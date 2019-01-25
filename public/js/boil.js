class Thermometer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isBoil = parseInt(this.props.temperature) >= 100;
        let message = 'The water would not boil.';

        if (isBoil) {
            message = 'The water would boil.';
        }

        return (
            <p>{message}</p>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let temperature = e.target.value;
        this.setState({temperature: temperature});
    }

    render() {
        let temperature = this.state.temperature;
        return (
            <div>
                <input type='number' value={temperature} onChange={this.handleChange}/>
                <Thermometer temperature={temperature}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
