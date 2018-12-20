// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Import friends 'data' from app/data/friends.js
// File located in the 'app' > 'data' directory  (one directory up from current directory, then down into 'data')
var friendData = require("../data/friends");

// Export our API GET and POST requests
module.exports = function (app) {
    // Create an instance of Express to listen for a GET request at the path of '/api/friends'
    app.get("/api/friends", function (req, res) {
        // When a GET request is made to the specified path, send the JSON friendData as a response
        res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array imported from data/friends.js)

    // Create an instance of Express to listen for a POST request at the path of '/api/friends'
    app.post("/api/friends", function (req, res) {
        // Begin compatibility logic
        // Assign a variable to hold the req.body (new friend object) - req.body is available since we're using the body parsing middleware
        var newFriend = req.body;
        // Assign an empty variable to receive an object of the best match for a friend after compatibility is calculated
        var friendMatch;
        // Instantiate a variable with the maximum possible difference allowed by 10 survey questions + 1 (50 + 1)
        var maximumDifference = 51; // This can be changed to totalDifference since they'll be doing the same thing, per Step 4
        // Iterate through each element (object) in the friendData array
        // For each friend object, isolate the array of survey results located at the key of 'scores:'
        // For each array of survey results, isolate the index and the value (score) at each index
        // For each value at each index of the survey 'scores', calculate the difference between it and the values at the newFriend's corresponding survey 'scores'
        // Add up all of the differences between the newFriend's scores and each existing friend's scores to calculate the totalDifference
        // Take the absolute value of each difference before adding them all together so there are no negative solutions
        // Store the totalDifference for each friend as they are calculated
            // How: 
            // 1) Instantiate a variable with the maximum possible difference allowed by 10 survey questions + 1 (50 + 1?)
                // This way, even if there's zero compatibility between newFriend and existing friends, it'll avoid reassigning problems in step 2
            // 2) Instiatiate a variable to hold the sums of each difference calculation
            // 3) For each index of the 'scores' array, reassign the sums variable to equal itself plus the difference at each current index
            // 4) After iterating through all survey 'scores', while still iterating through each friend object, set a condition to check if the sums variable is less than the maximumDifference
                // If it is, reassign the maximumDifference to the sums variable
                // This condition will always be met on the first friend object, because we initially define the variable to a value unattainable by the constraints of the survey scores
                // But it may not be after the first one. It will continue to be reassigned when it finds a lower difference, and it will continue to not be reassigned when it finds the lowest difference
        // Once the lowest totalDifference is found through the forEach iteration, we will have our closest match (friendMatch)
            // The closest match will be the user with the least amount of difference
            // Reassign friendMatch to equal the friend object with the current lowest difference during the conditional in Step 4
        // Once the closest match to newFriend has been found, display the result as a modal 'pop-up'
        // The modal should display both the name and picture of the closest match
        
    });
};