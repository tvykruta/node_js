/*
 * Module dependencies
 * http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , morgan = require('morgan')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    //.use(nib())
    .use(foundation());
}

// Asynchronous
var auth = express.basicAuth(function(user, pass, callback) {
 var result = (user === 'captainron' && pass === 'fantasticvoyage');
 callback(null /* error */, result);
});

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(morgan('combined'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title: 'Home' }
  )
})

app.get('/login', function (req, res) {
  res.render('login',
  { title: 'Login' }
  )
})

app.get('/machine', function (req, res) {
  res.render('machine',
  { title: 'Machine' }
  )
})

app.get('/contact', function (req, res) {
  res.render('contact',
  { title: 'Contact' }
  )
})

app.get('/signup', auth, function (req, res) {
  res.render('signup',
  { title: 'Signup' }
  )
})

// Start server
console.log("Server running at http://107.178.213.138:8080/");
app.listen(8080)
