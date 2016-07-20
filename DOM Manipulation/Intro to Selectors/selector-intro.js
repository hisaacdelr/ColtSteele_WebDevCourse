var h1 = document.querySelector("h1");

h1.classList.toggle("pink");

var body = document.querySelector("body");
var isBlue = false;

//makes the background change to blue at 1 second intervals
setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000);