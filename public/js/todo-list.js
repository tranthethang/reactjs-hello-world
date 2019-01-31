class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form action='#' method='POST'>
                <h3>Form</h3>

                <p>
                    <label>Task</label>
                    <input/>
                </p>
            </form>
        );
    }
}

ReactDOM.render(
    <TodoForm/>,
    document.getElementById('root')
);
