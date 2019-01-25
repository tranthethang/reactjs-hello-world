class PageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pages = [
            ['hello-world', 'Hello world'],
            ['greeting', 'Greeting'],
            ['component', 'Components and Props'],
            ['comment', 'Comments'],
            ['clock', 'State and Lifecycle'],
            ['event', 'Handling Events'],
            ['boil', 'Thermometer']
        ];

        return (
            <ol>
                {
                    pages.map((page) => {
                        return <PageItem key={page[0]} slug={page[0]} title={page[1]}/>
                    })
                }
            </ol>
        );
    }
}

class PageItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let href = 'http://localhost:3000/' + this.props.slug;

        return (
            <li>
                <a href={href}>{this.props.title}</a>
            </li>
        );
    }
}

ReactDOM.render(
    <PageList/>,
    document.getElementById('root')
);