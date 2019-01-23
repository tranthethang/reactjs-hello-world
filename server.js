require('dotenv').load();

var express = require('express');
var app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));

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

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Running.. http://%s:%s", host, port);
});
