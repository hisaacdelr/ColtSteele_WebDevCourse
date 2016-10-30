var express = require("express");
var app = express();
//body-parser package allows you to be able to read req.body (allows console to print "console.log(req.body)" and not show undefined)
var bodyParser = require("body-parser");

var friends = ["Tony", "Poop", "Rover", "Sarah"];


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.post("/addFriend", function(req, res){
	//console.log(req.body);
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

app.listen("3000", function(){
	console.log("Server running at port 3000");
});