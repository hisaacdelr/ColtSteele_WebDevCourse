var mongoose = require("mongoose");

//POST - title, content (going to be nested into USER)
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

module.exports = mongoose.model("Post", postSchema);