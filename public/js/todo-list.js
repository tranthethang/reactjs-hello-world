class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleGetTasks = this.handleGetTasks.bind(this);
    }

    handleNewTask() {
        let newTask = prompt('Task detail?');

        if (newTask) {
            this.setState({
                tasks: this.state.tasks.concat([newTask.trim()])
            });
        }
    }

    handleGetTasks() {
        console.log(this.state.tasks);
    }

    render() {
        return (
            <div>
                <code>Double click to edit a task!</code>
                <ul class="list-unstyled">
                    {this.state.tasks.map((task, index) => {
                        return (
                            <li>
                                <Task key={index} value={task}/>
                            </li>
                        );
                    })}
                </ul>
                <p>
                    <button class="btn btn-primary btn-sm" onClick={this.handleNewTask}>New task</button>
                    &nbsp;
                    <button class="btn btn-secondary btn-sm" onClick={this.handleGetTasks}>Grap</button>
                </p>
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
        this.handleUpdateTask = this.handleUpdateTask.bind(this);
    }

    handleTransform(e) {
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

    handleUpdateTask(e) {
        console.log(this.state.value);
        this.handleTransform();
    }

    render() {
        let content = this.state.value;

        if (!this.state.isSleeping) {
            content = <span><input type='text' defaultValue={this.state.value} onChange={this.handleOnChange}/><button
                onClick={this.handleUpdateTask}>Update</button></span>;
        }

        return (
            <p onDoubleClick={this.handleTransform}>
                {content}
                <hr/>
            </p>
        );
    }
}

ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
