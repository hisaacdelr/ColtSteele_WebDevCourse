var express = require("express");
var app = express();

// "/" => "Hi there!"

app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"

app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/dog" => "WOOF!"
app.get("/dog", function(req,res){
	//triggered as soon as someone makes a request to /dog from anywhere
	//console.log("Someone made a request to /dog");

	res.send("WOOF!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName; //subredditName is from the URL request after the colon
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	//req.params would now have variables for 'subredditName', 'id', and 'title'
	console.log(req.params);
	res.send("Welcome to the comments page");
});

app.get("*", function(req, res){
	res.send("You are a star!");
});

//Tell Express to listen for requests (start server)
//in c9: process.env.PORT, process.env.IP
app.listen(3000, function(){
	console.log("Running server on port 3000");
});