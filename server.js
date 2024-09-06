var express = require('express')
var exphbs = require('express-handlebars')


var port = process.env.PORT || 8000;
var app = express();

var postData = require('./apptPost.json')


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res, next) {
    res.status(200).render('homePage')
})

app.get('/about', function (req, res, next) {
    res.status(200).render('about')
})


app.get('/contact', function (req, res, next) {
    res.status(200).render('contact')
})

app.get('/book', function (req, res, next) {
    res.status(200).render('bookPage', {
        newPost: postData
    })
})

app.get('*', function (req, res, next) {
    res.status(400).render('404', {
        path: req.url
    })
})

app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
})