/**
 * Libraries part
 */
const express = require('express')
const helmet = require("helmet");
const ejs = require('ejs')
const bodyParser = require("body-parser");
const path2public = __dirname + "/public" || null; // è il link alla cartella public del sito

/**
 * Setting up part
 */
const app = express()
app.use(helmet());
//app.use(express.cookieParser());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
if (path2public) {
  app.use(express.static(path2public));
}

/**
 * Routes part
 */
app.get('/', function (req, res) {
  res.render("main.ejs")
})
/**
 * Server part
 */
app.listen(3000, function () {
  console.log("server is listening on port", 3000)
})


app.get('*', function (req, res) {
  return res.redirect('/');
});