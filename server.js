// Import relevant modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Assign variable to create an instance of Express
var app = express();
// Assign variable PORT to allow us to accept a dynamic port from a bound environment variable if it exists (For Heroku deployment)
// Or to use localhost:3000 in lieu of a dynamic port (For functionality on a local machine)
var PORT = process.env.PORT || 3000;

// Import apiRoutes and htmlRoutes which point our server to a series of "route" files
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create an instance of Express to listen on the designated PORT (essentially, start the app)
app.listen(PORT, function () {
    // Log which PORT we're listening on
    console.log("App listening on PORT: " + PORT);
});