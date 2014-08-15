/*
 * Module dependencies
 * http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , morgan = require('morgan')
  , foundation = require('foundation')
// Note, this is foundation 4.2, we want 5.0.

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    //.use(nib())
    .use(foundation());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(morgan('combined'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
// Start server
app.get('/', function (req, res) {
  res.render('index',
  { title: 'Home' }
  )
})
console.log("Server running at http://localhost:3000/");
app.listen(3000)
