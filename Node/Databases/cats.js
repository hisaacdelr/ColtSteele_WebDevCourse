var mongoose = require("mongoose");
//connect to database
mongoose.connect("mongodb://localhost/cat_app");

//schema (from Mongoose)
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});


//model (mongoose, so you can use Cat.create, Cat.remove, kinda like a class in Java)
var Cat = mongoose.model("Cat", catSchema);


//adding new cat to DB

// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something went wrong");
// 	} else {
// 		console.log("We just saved a cat to database");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snowball",
	age: 15,
	temperament: "Nice"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});

//retrieve all cats from DB and console.log each one

Cat.find({}, function(err, cat){
	if(err){
		console.log("Oh no, error!");
	} else {
		console.log("Here are cats from database:")
		console.log(cat);
	}
});