class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form action='#' method='POST'>
                <h3>Form</h3>
            </form>
        );
    }
}

ReactDOM.render(
    <TodoForm/>,
    document.getElementById('root')
);
