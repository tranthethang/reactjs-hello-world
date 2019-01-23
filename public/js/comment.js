class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: this.generateAvatar(props.author),
            author: props.author,
            comment: props.children.toString()
        };
    }

    generateAvatar(author) {
        let dropcap = author.substring(0, 1);
        return 'https://place-hold.it/60x60?text=' + dropcap + '&italic&bold';
    }

    render() {
        return <section className="comment">
            <div className="d-inline-flex">
                <div>
                    <Avatar src={this.state.avatar}/>
                </div>
                <div>
                    <Author author={this.state.author}/>
                    <p className="comment__content">{this.state.comment}</p>
                </div>
            </div>
        </section>
    }
}

class Avatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: props.src
        };
    }

    render() {
        return <img className="comment__avatar" src={this.state.src} alt=''/>
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: props.author
        };
    }

    render() {
        return <h5 className="comment__author">{this.state.author}</h5>;
    }
}

let element = <div>
    <Comment author='John Doe'>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec volutpat commodo consectetur. Praesent vel dignissim neque. Maecenas ut
        dapibus nunc. Donec volutpat libero augue, in varius urna blandit eget. Pellentesque fermentum, sem sit amet
        blandit faucibus, eros neque luctus diam, ut scelerisque risus quam id turpis. Ut tempus urna ut tellus
        tincidunt efficitur. Phasellus placerat id mi sed interdum. Phasellus porttitor tempor rhoncus. Vestibulum
        vulputate vel sapien at commodo. Maecenas eu faucibus nunc. Proin sodales, nibh a gravida bibendum, purus libero
        malesuada magna, ut rhoncus felis felis ac arcu. Pellentesque sit amet rhoncus justo, sed facilisis odio.
        Suspendisse potenti.</Comment>
    <Comment author='Kia Lee'>Morbi vitae augue elementum,
        faucibus leo sit amet, laoreet libero. Nunc egestas laoreet imperdiet. Donec gravida nisl risus, vel aliquam sem
        finibus at. Vivamus sodales libero quis tempor suscipit. Nam mollis, urna quis faucibus fermentum, ipsum justo
        porta tortor, varius pellentesque justo neque id turpis. Morbi auctor congue erat quis dapibus. Nam pretium odio
        ut erat vestibulum commodo. Aenean malesuada feugiat nulla a facilisis. Donec lacus lacus, sodales nec molestie
        non, scelerisque id magna. Morbi in felis convallis, lacinia mi suscipit, vulputate tortor. Vivamus ac ex nunc.
        Quisque condimentum tristique tellus ac placerat. Mauris vel dictum orci. Praesent sit amet aliquet ipsum, eu
        molestie tellus. Cras facilisis viverra velit, vel vehicula neque viverra quis.</Comment>
    <Comment author='Beast Big'>Suspendisse at vulputate tellus.
        Donec sit amet aliquam odio. Vivamus vestibulum nulla eget neque dapibus volutpat. Maecenas mi risus, commodo
        vel accumsan in, laoreet in diam. Integer iaculis tempus arcu in cursus. Ut lobortis hendrerit bibendum. Nam id
        luctus risus, in euismod orci.</Comment>
</div>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
