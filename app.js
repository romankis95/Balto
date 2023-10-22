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