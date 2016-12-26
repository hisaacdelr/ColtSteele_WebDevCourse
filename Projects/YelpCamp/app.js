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
	image: String,
	description: String
});
//set up model
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Fam Camp", 
// 		image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
// 		description: "This is a fam friendly camp."
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

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
	//Get all campgrounds from DB
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds: allcampgrounds});
		}
	});
})

//CREATE - create new campgrounds
app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array (database later)

	var name = req.body.name; //from campgrounds/new
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};

	//Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			//redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	})

});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});


//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template with that campground
			res.render("show", {camp: foundCampground});
		}
	});
});

app.listen("3000", function(){
	console.log("YelpCamp running on port 3000");
});