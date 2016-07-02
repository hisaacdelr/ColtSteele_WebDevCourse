isEven(2);
factorial(5);
kebabToSnake("poop-to-live");

function isEven(num){
	console.log(num % 2 === 0);
}

function factorial(num){
	var factorial = 1;
	for(var i = 1; i <= num; i++){
		factorial *= i;
	}
	console.log(factorial);
}

function kebabToSnake(string){
	var newString = string.replace(/-/g, "_");
	console.log(newString);
}