var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

//sends a response with animals and their respective sounds (pig, cow, dog)
app.get('/speak/:animal', function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");
});

//GETs a string and number and sends a response with the string times that number
app.get('/repeat/:str/:num', function(req, res){
	var str = req.params.str;
	var num = Number(req.params.num);
	var newStr = "";
	for(var i = 0; i < num; i++){
		newStr += str;
	}
	res.send(newStr); //you can only have one res.send function for each route
});

app.get('*', function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen('3000', function(){
	console.log("Running server on port 3000");
});