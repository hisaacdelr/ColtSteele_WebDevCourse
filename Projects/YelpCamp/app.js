var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

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

];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campGrounds: campGrounds});
})

app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array (database later)

	var name = req.body.name; //from campgrounds/new
	var image = req.body.image;
	campGrounds.push({name: name, image: image});
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen("3000", function(){
	console.log("YelpCamp running on port 3000");
});