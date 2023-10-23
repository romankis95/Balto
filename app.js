/**
 * Libraries part
 */
const express = require('express')
const helmet = require("helmet");
const ejs = require('ejs')
const bodyParser = require("body-parser");
const path2public = __dirname + "/public" || null; // è il link alla cartella public del sito
const favicon = require('serve-favicon');

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
const path2icon = __dirname + '/public/favicon.ico' || null; // è il link all'icona dei preferiti del sito

if (path2public) {
  app.use(express.static(path2public));
  app.use(favicon(path2icon));
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