var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}


//own version of todo list exercise

var taskUL = document.querySelector("#tasks");

//could have used a single array but i wanted to work on using objects
var tasks = [
	{detail: "Wash cat"},
	{detail: "Feed cat"},
	{detail: "Feed cat to dog"}
];

tasks.forEach(function(task){
	buildList(task);
});

function buildList(task){
	var taskLI = document.createElement("li");
	taskLI.textContent = task.detail;
	taskUL.appendChild(taskLI);

}