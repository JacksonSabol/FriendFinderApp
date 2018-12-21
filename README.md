# :two_men_holding_hands: Welcome to Friend Finder App! :two_women_holding_hands:

## The Best Way to Find Your Best Friend!

### About this application:
Friend Finder is a simple way to find like-minded individuals online. Fill out 10 personality questions and the app will do the work to find the person most like you!
Once you've completed and submitted the personality questionaire, the app will display the name and a photo of the person you most closely match with. It's that simple!
Click the Start Survey button on the home page and start finding your new best friend!

### Overview
I employed HTML, CSS, JavaScript, and jQuery to make a dynamically generated list of survey questions. Users fill out their name, add a URL to a photo of themselves, then answer 10 personality-based questions. Once the completed survey is submitted, a POST request is made using AJAX, and an Express.js (Node.js module) request listener processes the data. The answers from the survey questions are run through an algorithm that calculates the difference in scores for each question for each friend stored in the object 'database'. Once the algorithm finds the 'friend' with the least difference in answer scores, a match is made. As exemplified in the code snippet below, the matched 'friend' is returned as a JSON object response to the AJAX callback function.

### The code snippet below demonstrates how friend combatibility is calculated
``` javascript
module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var friendMatch;
        var maximumDifference = 51;
        friendData.forEach(function (friend) {
            var differenceSum = 0;
            var scoresArray = friend.scores;
            scoresArray.forEach(function (score, index) {
                differenceSum += Math.abs(newFriend.scores[index] - score);
            })
            if (differenceSum < maximumDifference) {
                maximumDifference = differenceSum;
                friendMatch = friend;
            }
        });
        friendData.push(newFriend);
        res.json(friendMatch);
    });
};
```
### Feel free to visit the deployed version on Heroku to find your new best friend!
[Link to Friend Finder](https://friend-finder-app-express.herokuapp.com/)

Note: To run this app on your localhost, you will need to install the depencies listed in the package.json, or type 'npm i' into your bash terminal

Thank you for reading!

### Built With:
* Command Line
* HTML
* CSS
* Bootstrap CSS
* Bootstrap JS
* JavaScript
* jQuery
* AJAX
* JSON
* Node.js
* Express.js