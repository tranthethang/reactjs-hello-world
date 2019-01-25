require('dotenv').load();

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Learn ReactJs with me, now!'});
});

app.get('/hello-world', (req, res) => {
    res.render('hello-world', {title: 'Hello World'})
});
app.get('/greeting', (req, res) => {
    res.render('greeting', {title: 'Greeting'})
});
app.get('/component', (req, res) => {
    res.render('component', {title: 'Components and Props'});
});
app.get('/comment', (req, res) => {
    res.render('comment', {title: 'Single comment'});
});
app.get('/clock', (req, res) => {
    res.render('clock', {title: 'State and Lifecycle'});
});
app.get('/event', (req, res) => {
    res.render('event', {title: 'Handling Events'});
});
app.get('/boil', (req, res) => {
    res.render('boil', {title: 'Boil calculator'})
});

const server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Running.. http://%s:%s", host, port);
});
