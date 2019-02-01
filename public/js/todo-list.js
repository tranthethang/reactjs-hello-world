class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <div>
                {this.state.tasks.map((index, task) => {
                    return (
                        <Task key={index} value={task}/>
                    );
                })}
            </div>
        );
    }
}

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSleeping: true,
            value: props.value
        };

        this.handleTransform = this.handleTransform.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleTransform() {
        this.setState({
            isSleeping: !this.state.isSleeping
        });
    }

    handleOnChange(e) {
        let newValue = e.target.value;

        this.setState({
            value: newValue
        });
    }

    render() {
        let content = this.state.isSleeping ? this.state.value :
            <input type='text' defaultValue={this.state.value} onChange={this.handleOnChange}/>;

        return (
            <p onDoubleClick={this.handleTransform}>
                {content}
            </p>
        );
    }
}

ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
