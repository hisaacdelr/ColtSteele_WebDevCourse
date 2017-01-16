var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require('body-parser'),
	mongoose 	= require('mongoose');


//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE / MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String, //{ type: String, default: placeholder.jpg }
	body: String,
	created: { type: Date, default: Date.now } //default value for date
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTful ROUTES

app.get("/", function(req, res){
	res.redirect("/blogs");
})

app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		} else{
			res.render("index", {blogs: blogs});
		}
	});
});

app.listen("3000", function(){
	console.log("Blog running on server 3000");
});