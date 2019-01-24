class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true
        };

        // Declare handleClick as callback function.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn
        }));
    }

    render() {
        return (
            <button className='btn btn-sm btn-secondary'
                    onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        );
    }
}

ReactDOM.render(
    <Button/>,
    document.getElementById('root')
);