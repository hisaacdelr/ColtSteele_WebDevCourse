var express = require("express");
var app = express();

app.get('/', function(req, res){
	res.render("home.ejs"); //.ejs : embedded javascript
});

// / fallinlovewith/rusty
// / fallinloveith/pomsky
app.get('/fallinlovewith/:thing', function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing.toUpperCase()});
})

app.listen("3000", function(res, req){
	console.log("Server running at port 3000");
});