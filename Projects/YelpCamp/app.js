//shortcut for saving multiple var declarations in a row
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
//how each campground is set up
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});
//set up model
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Woodland Park Zoo", 
// 		image: "https://s3-media1.fl.yelpcdn.com/bphoto/Eoeekwd6uKq-Jpm-_dwhEA/90s.jpg"
// 	}, function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("Newly created campground");
// 			console.log(campground);
// 		}
// 	}
// );

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	//Get all campgrounds from DB
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds", {campgrounds: allcampgrounds});
		}
	});
})

app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array (database later)

	// var name = req.body.name; //from campgrounds/new
	// var image = req.body.image;
	// campGrounds.push({name: name, image: image});
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen("3000", function(){
	console.log("YelpCamp running on port 3000");
});