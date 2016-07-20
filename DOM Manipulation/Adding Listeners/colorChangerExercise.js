var button = document.querySelector("button");
var isBlue = false;
/*
//Solution 1, uses logic (if/else)
button.addEventListener("click", function(){
	if(isBlue){
		document.body.style.background = "white";
	} else {
		document.body.style.background = "blue";
	}
	isBlue = !isBlue;
});
*/

button.addEventListener("click", function(){
	document.body.classList.toggle("blue");
});