var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// middleware
app.use('/assets', express.static('assets'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// Routes
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about-us', function(req, res) {
    res.render('aboutus');
});

app.get('/contact', function(req, res) {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function(req, res) {

    var data = {age: 25, job: 'Web Developre', hobbies: ['eating', 'playing soccer', 'making music']};

    res.render('profile', {person: req.params.id, data: data});
});


// listening  on port 3000
app.listen(process.env.port || 3000, function() {
    console.log('listening on port 3000...');
});

