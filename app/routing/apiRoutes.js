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

    // Create an instance of Express to listen for a POST request at the path of '/api/friends'
    app.post("/api/friends", function (req, res) {
        // Begin compatibility logic
        // Assign a variable to hold the req.body (new friend object) - req.body is available since we're using the body parsing middleware
        var newFriend = req.body;
        // Log for testing
        console.log(newFriend);
        // Assign an empty variable to receive an object of the best match for a friend after compatibility is calculated
        var friendMatch;
        // Instantiate a variable with the maximum possible difference allowed by 10 survey questions + 1 (50 + 1)
        var maximumDifference = 51; // This can be changed to totalDifference since they'll be doing the same thing, per Step 4
        // Iterate through each element (object) in the friendData array - assign parameter 'friend' as placeholder for each object
        friendData.forEach(function (friend) {
            // Instiatiate a variable to hold the sums of each difference calculation
            var differenceSum = 0;
            // Instantiate a variable to hold the 'scores' of each friend's survey results
            var scoresArray = friend.scores;
            // Iterate through each index (of each friend object) of the survey results' scoresArray - assign parameters score and index as placeholders for each score and each index
            scoresArray.forEach(function (score, index) {
                // For each index of the newFriend and existing friend's 'scores' array, reassign the sums variable to equal itself plus the difference between newFriends score value and existing friend's score value at the current index
                differenceSum += Math.abs(newFriend.scores[index] - score); // Take the absolute value of each difference before adding them all together so there are no negative solutions
            })
            // Set a condition to check if the sums variable is less than the maximumDifference
            if (differenceSum < maximumDifference) {
                // If it is, reassign the value of maximumDifference to the differenceSum to compare to subsequent differences for each friend object
                maximumDifference = differenceSum;
                // Reassign friendMatch to be the friend object with the lower differenceSum - this will occur for each friend object until the friend object with the lowest difference is reached
                friendMatch = friend;
            }
        });
        // Log friendMatch for testing
        console.log(friendData);
        // Push newFriend object to array of objects in api/friends.js
        friendData.push(newFriend);
        // Send the boolean value of 'true' back as a JSON response to 'alert' user of a survey successfully submitted with a modal
        res.json(true);
    });
};