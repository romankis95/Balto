/**
 * Libraries part
 */
const express = require('express')
import helmet from "helmet";
const ejs = require('ejs')
/**
 * Setting up part
 */
const app = express()
app.use(helmet());
app.use(express.cookieParser());

// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    res.cookie('Hint',"UXVhbmRvIHNvcnJpZGkgc2luY2VyYW1lbnRlLCB0aSBtb3JkaSBsYSBsaW5ndWEgdHJhIGkgZGVudGksIGUgbWkgcGlhY2UgdW4gc2FjY28=", { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});
/**
 * Routes part
 */
app.get('/', function (req, res) {
  res.send('Hello World')
})
/**
 * Server part
 */
app.listen(3000)
