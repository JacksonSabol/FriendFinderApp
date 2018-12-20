// Import the path package to get the correct file path for our html
var path = require("path");

// Export our HTML GET requests
module.exports = function (app) {
    // Create an instance of Express to listen for a GET request at the path of '/survey'
    app.get("/survey", function (req, res) {
        // When a GET request is made to the specified path, send the survey.html file located in the 'app' > 'public' directory 
        // (one directory up from current directory, then down into 'public')
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // Create an instance of Express to listen for a GET request made to every path besides '/survey'
    // The '*' functions as a default, catch-all route for unspecified paths
    app.get("*", function (req, res) {
        // When a GET request is made to an unspecified path, send the home.html file located in the 'app' > 'public' directory 
        // (one directory up from current directory, then down into 'public')
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // Create an instance of Express to use a callback function for any GET request made to a path besides '/survey'
    // This functions as a default, catch-all route for unspecified paths
    // https://stackoverflow.com/questions/22673218/default-route-in-express-js
    // app.use(function (req, res) {
        // When a GET request is made to an unspecified path, send the home.html file located in the 'app' > 'public' directory 
        // (one directory up from current directory, then down into 'public')
        // res.sendFile(path.join(__dirname + '../public/home.html'));
    // });

}