var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode button event listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//the function above is ternary operator and identiical to the one below
		/*if (this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}*/
		reset();
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeneers
		squares[i].addEventListener ("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare with pickedColor
			if (clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "You Got It!!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset() {
	//generate new colors array
	colors = generateRandomColors(numSquares);
	//pick new color from array
	pickedColor = pickColor();
	//change colorDisplay textContent
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change squares colors hide any not needed
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset h1 to background color
	h1.style.backgroundColor = "steelblue";
}

//the reset() function above replaces the easyBtn and hardBtn code below
/*easyBtn.addEventListener("click", function() {
	numSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	numSquares = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
*/
resetButton.addEventListener("click", function() {
	reset();
	/*//when newcolor button clicked generate new colors
	colors = generateRandomColors(numSquares);
	//pick new color from array
	pickedColor = pickColor();
	//change colorDisplay textContent
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change squares colors
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	//reset h1 to background color
	h1.style.backgroundColor = "steelblue";*/
});



function changeColors(color) {
	//loop thru all squares
	for (var i = 0; i < squares.length; i++) {
		//change color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor (Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor (Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor (Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}