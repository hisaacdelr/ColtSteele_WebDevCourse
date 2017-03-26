//In User, it saves a reference to the Post (Post ID), not the post itself

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");
var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
// 	title: "How to cook the best burger part 4",
// 	content: "bleep blorp bloop"
// },function(err, post){
// 	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});