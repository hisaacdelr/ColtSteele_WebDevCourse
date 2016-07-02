printReverse([1,2,3,4]);
isUniform([1, 1, 2]);
sumArray([1, 2, 3]);
max([1, 7, 5]);


//prints the contents of an array in reverse
function printReverse(array){
	for(var i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	}
}

//returns true if all contents in an array is identical
function isUniform(array){
	var first = array[0];
	for(var i = 1; i < array.length; i++){
		if (array[i] !== first){
			return false;
		}
	}
	return true;
}

//returns the sum of all numbers in the array
function sumArray(array){
	var sum = 0;
	array.forEach(function(num){
		sum+=num;
	});
	return sum;
}

//returns the highest number in the array
function max(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}