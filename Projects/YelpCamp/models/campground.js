var mongoose = require('mongoose');

// SCHEMA SETUP
//how each campground is set up
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment" //name of the model ("Comment")
		}
	]
});

//set up model
module.exports = mongoose.model("Campground", campgroundSchema);

//module.exports send data out of the file

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
