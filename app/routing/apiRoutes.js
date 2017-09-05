const path = require("path");
const amigos = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/frineds", function(req, res) {
        res.json(amigos);
    });

    app.post("/api/friends", function(req, res) {
        let closest_match = {
            name: "",
            photo: "",
            difference: 500
        };

        var newFiend = req.body;
        var userPoints = newFiend.points;
        var totalDifference = 0;

        for (var i = 0; i < amigos.length; i++) {
            console.lof(amigos[i].name);
            totalDifference = 0;

            for (var p = 0; p < amigos[i].points[p]; p++) {
                totalDifference += Math.abs(parseInt(userPoints[p]) - parseInt(amigos[i].points[p]));
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;

                if (totalDifference <= closest_match.difference) {


                    closest_match.name = amigos[i].name;
                    closest_match.photo = amigos[i].photo;
                    closest_match.difference = totalDifference;
                }
            }
        }


        amigos.push(newFiend);
        res.json(closest_match);


    });
};