var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/hello-world', function (req, res) {
    res.render('hello-world', { title: 'Hello World' })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Running.. http://%s:%s", host, port);
});
