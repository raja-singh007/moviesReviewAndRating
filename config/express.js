const bodyParser = require("body-parser");;
const cors = require("cors");;
const express = require('express');
const routes = require('../Server/routes');
const path= require('path');
const app = express();
const server = require('http').createServer(app);

// // mount assets folder on / path
// app.use('/node', express.static(path.resolve(__dirname, '../../node/'))); // eslint-disable-line

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// mount all routes on /api path
app.use('/node/api/', routes)

exports= module.exports = server;