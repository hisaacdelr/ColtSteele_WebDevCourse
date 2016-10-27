var express = require("express");
var app = express();

//allows use of the "public" folder. By default, only the "views" folder when using Express is served (used)
app.use(express.static("public"));

//so that you don't have to pass ".ejs" in render
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render("home"); //.ejs : embedded javascript
});

// / fallinlovewith/rusty
// / fallinloveith/pomsky
app.get('/fallinlovewith/:thing', function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing.toUpperCase()});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Suzy"},
		{title: "Nosferatu", author: "Arthur"},
		{title: "Spoopy Weeny Stories", author: "Dracula"}
	];

	res.render("posts", {posts: posts}); 
	//"[posts]: posts", is what you call in the .ejs template
	//"posts: [posts]", is the object you just defined
});

app.listen("3000", function(res, req){
	console.log("Server running at port 3000");
});