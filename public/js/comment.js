class Comment extends React.Component {
    constructor(pros) {
        super(pros);

        this.state = {
            avatar: pros.avatar,
            author: pros.author,
            comment: pros.comment
        }

    }

    render() {
        return <section className="comment">
            <div className="d-inline-flex">
                <div>
                    <Avatar src={this.state.avatar}/>
                </div>
                <div>
                    <Author name={this.state.author}/>
                    <p className="comment__content">{this.state.comment}</p>
                </div>
            </div>
        </section>
    }
}

class Avatar extends React.Component {
    constructor(pros) {
        super(pros);

        this.state = {
            src: pros.src
        }
    }

    render() {
        return <img className="comment__avatar" src={this.state.src} alt=''/>
    }
}

class Author extends React.Component {
    constructor(pros) {
        super(pros);
    }

    render() {
        return <h3 className="comment__author">John Doe</h3>;
    }
}

let element = <div>
    <Comment avatar='https://place-hold.it/60x60?text=J&italic&bold' author='John Doe'
             comment='This is comment of John Doe.'/>
    <Comment avatar='https://place-hold.it/60x60?text=K&italic&bold' author='John Doe'
             comment='This is comment of Kia Lee.'/>
    <Comment avatar='https://place-hold.it/60x60?text=B&italic&bold' author='John Doe'
             comment='This is comment of Best Big.'/>
</div>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
