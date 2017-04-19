var mongoose = require('mongoose'),
	Campground = require('./models/campground');
	Comment = require('./models/comment');

var data = [
	{
		name: "Clouds Rest",
	 	image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
	 	description: "blah clouds blah blerp."
	},

	{
		name: "Desert Camp",
	 	image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
	 	description: "blah sand and hot blah blerp."
	},

	{
		name: "Canyon Floor",
	 	image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
	 	description: "blah blazing scorching hot canyon blah blerp."
	}
]

function seedDB(){
	//remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed Campgrounds.");

		//Add a few campgrounds
		//inside the remove function because if it's outside, Javascript is asynchronus
		//and doesn't guarantee what order code will be run
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} else {
					console.log("Added a campground!");
					//Create a comment
					Comment.create({text: "This place is great, but I wish there was internet...",
									author: "Homer"
									}, function(err, comment){
										if(err){
											console.log(err);
										} else {
											//associate comment with a campground in "data"
											campground.comments.push(comment);
											campground.save();
											console.log("Created a new comment");
										}
									});
				}
			});
		});
	});
}

module.exports = seedDB;
