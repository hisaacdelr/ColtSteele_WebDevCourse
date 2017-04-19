//shortcut for saving multiple var declarations in a row
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	seedDB = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

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
//Resource on using .populate() and .exec(): http://mongoosejs.com/docs/populate.html
app.get("/campgrounds/:id", function(req, res){
	//find campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
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