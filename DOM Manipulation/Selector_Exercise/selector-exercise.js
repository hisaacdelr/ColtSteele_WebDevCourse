//4 different ways to select the first p tag
var tag = document.getElementById("first");
tag = document.getElementsByClassName("special")[0];
tag = document.getElementsByTagName("p")[0];
tag = document.querySelectorAll(".special")[0];
tag = document.querySelector("p"); //because it only returns the first value with that query
tag = document.querySelector("h1 + p"); //+ means first element adjacent to the first query

//Click Listener
var button = document.querySelector("button");
var paragraph = document.querySelector("#eventIndicator");

button.addEventListener("click", function(){
	paragraph.textContent = "Someone clicked me";
});