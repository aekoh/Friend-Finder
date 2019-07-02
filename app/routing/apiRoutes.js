
//  code will allow me to work with file and directory paths
var path = require("path");

//  Linking in the friends.js Data
var friends = require("../data/friends");

//  using a GET route to display a JSON of all friends.
//  GET will be used to request data from this specified source
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

//  Using a Post route to control the compatibility of friends 
//  POST will be used to submit the processed data to this specified source
    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

//  This will parse the new friend input to get integers       
        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var friendIndex = 0;
        var minDifference = 40;



//  This will check each friends scores and their difference in points
//  This will also review the new friend data with the existing ones           
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++){
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

//  This will determine the best friend match 
//  If the total difference is less than the minimum then they will be better matches            
            if (totalDifference < minDifference) {
                friendIndex = i;
                minDifference = totalDifference;
            }
        }


//  This will push the new friend to the friends data array and store them        
        friends.push(user);
        res.json(friends[friendIndex]);
        });
};