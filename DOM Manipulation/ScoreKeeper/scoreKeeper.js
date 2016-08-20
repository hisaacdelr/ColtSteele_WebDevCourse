var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");

var p1Display = document.querySelector("#score1");
var p2Display = document.querySelector("#score2");

var numInput = document.querySelector("input[type='number']");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5; //initial winning score

var limitDisplay = document.getElementById("limit");
limitDisplay.textContent = winningScore;

//when the user clicks on the p1/p2 buttons,
//it adds points to their respective scores
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;			
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	reset();
});

//resets the state of all variables in the program
function reset(){
	p1Score = 0;
	p1Display.textContent = 0;
	p2Score = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

//changes how many games are needed to win the game
numInput.addEventListener("change", function(){
	winningScore = Number(this.value); //because === and .value is initially a string, will never equal
	limitDisplay.textContent = this.value;
	reset();
});