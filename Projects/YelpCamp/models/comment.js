var mongoose = require('mongoose');

// CREATE COMMENT SCHEMA
var commentSchema = new mongoose.Schema({
	text: String,
	author: String
});

//set up model
module.exports = mongoose.model("Comment", commentSchema);
