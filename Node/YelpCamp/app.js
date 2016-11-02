var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var imgurl = "https://b.fastcompany.net/multisite_files/fastcompany/imagecache/inline-small/inline/2015/09/3050613-inline-i-2-googles-new-logo-copy.png";
	var campGrounds = [
	{name: "Billy", image: imgurl},
	{name: "Bob", image: imgurl},
	{name: "My little pony", image: imgurl},
	{name: "Shakespeare", image: imgurl},
	{name: "SHARON", image: imgurl},
	{name: "Carmilla", image: imgurl},
	{name: "Laura", image: imgurl},
	{name: "Kaitlyn", image: imgurl},
	{name: "Perry", image: imgurl},
	{name: "Kirsch", image: imgurl},
	{name: "Will", image: imgurl},
	{name: "Mattie", image: imgurl}

	]
	res.render("campgrounds", {campGrounds: campGrounds});
})

app.listen("3000", function(){
	console.log("YelpCamp running on port 3000");
});