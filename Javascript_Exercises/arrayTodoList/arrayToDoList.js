var todos = ["Buy cat"];
var input = prompt("What would you like to do?");


while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		newTodo();
	} else if(input === "delete"){
		deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}

console.log("APP CLOSED");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function newTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	console.log("\""+ newTodo+ "\"" + " has been added");
	todos.push(newTodo);
}

function deleteTodo(){
	//ask for index of todo to delete
	var index = prompt("Enter index of todo to delete:");
	//delete todo
	console.log("\""+ todos[index] + "\"" + " has been deleted");
	todos.splice(index, 1);
}