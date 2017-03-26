//In User, it saves a reference to the Post (Post ID), not the post itself

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");


//POST - title, content (going to be nested into USER)
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);



//USER - email, name

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	] //name of the schema
});

var User = mongoose.model("User", userSchema);

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

// Post.create({
// 	title: "How to cook the best burger part 3",
// 	content: "asdfa asdfasdf asdfasdfasdf"
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

//Find user
//Find all posts for that userSchema

//find user.populate the field posts by looking up all the ids and their corresponding posts.execute the query
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});