require('dotenv').load();

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const pages = [
    {slug: 'index', title: 'Learn ReactJs with me, now!'},
    {slug: 'hello-world', title: 'Hello world'},
    {slug: 'greeting', title: 'Greeting'},
    {slug: 'component', title: 'Components and Props'},
    {slug: 'comment', title: 'Comments'},
    {slug: 'clock', title: 'State and Lifecycle'},
    {slug: 'event', title: 'Handling Events'},
    {slug: 'boil', title: 'Thermometer'}
];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));


pages.map((page) => {
    let route = ("index" === page.slug) ? '/' : '/' + page.slug;

    app.get(route, (req, res) => {
        res.render(page.slug, {title: page.title});
    });
});

const server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Running.. http://%s:%s", host, port);
});
