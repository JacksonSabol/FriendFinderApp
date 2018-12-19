// Import relevant modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Assign variable to create an instance of Express
var app = express();
// Assign variable PORT to allow us to accept a dynamic port from a bound environment variable if it exists (For Heroku deployment)
// Or to use localhost:3000 in lieu of a dynamic port (For functionality on a local machine)
var PORT = process.env.PORT || 3000;

