		
		/* HTML ELEMENTS */
var easy_btn = document.getElementById('easy');
var medium_btn = document.getElementById('medium');
var hard_btn = document.getElementById('hard');
var start_btn = document.getElementById('start');
var reset_btn = document.getElementById('reset');
var answer_box = document.getElementById('answer');
var first_num_box = document.getElementById('number1');
var second_num_box = document.getElementById('number2')

		/* GLOBAL VARIABLES */

// Score
var score = 0;
// Increase Score
var points = 10;
// Max-Number
let max_num = 10;
// Math Type
let math_type = "addition"
// Answer
var answer;
// Time
let time = 30;
// Assign Random Number based on difficulty
let randomNumber = generateTwoRandomNumbers(max_num)



		/* SET DIFFICULTY */

// Get the UL container holding the difficulty buttons
const dificulty = document.getElementById("dificulty");
// Get all buttons with class="btn" inside the container - outputs an array
var btns = dificulty.getElementsByClassName("nav-link");


// Checks which button has been clicked by looping through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    // Change the value of Max_num for each btn
    if (this.innerHTML === "Medium") {
    	max_num = 15;
		points = 15;
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("Max_Num: ", max_num)
    }else if (this.innerHTML === "Hard") {
    	max_num = 20;
		points = 20;
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("Max_Num: ", max_num)
    }else{
    	max_num = 10;
		points = 10;
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("Max_Num: ", max_num)
    }
  });
}




		/* SET MATH TYPE */

// Get the container element
var math_sign = document.getElementById("math-sign");
// Get all buttons with class="btn" inside the container holding the Math Type
var signs = math_sign.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < signs.length; i++) {
  signs[i].addEventListener("click", function() {
    var current1 = document.getElementsByClassName("active1");
    current1[0].className = current1[0].className.replace(" active1", "");
    this.className += " active1";
    if(this.id === "addition"){
    	math_type = "addition"
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("MATH TYPE IS ", math_type)
    	document.getElementById('display-sign').innerHTML = "+";
    }else if (this.id === "subtraction") {
    	math_type = "subtraction"
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("MATH TYPE IS ", math_type)
    	document.getElementById('display-sign').innerHTML = "-";
    }else if (this.id === "multiplication") {
    	math_type = "multiplication"
		document.getElementById("number1").innerHTML='';
		document.getElementById("number2").innerHTML='';
		console.log("MATH TYPE IS ", math_type)
    	document.getElementById('display-sign').innerHTML = "x";
    }
  });
}


		/* GENERATE NUMBERS */

// Generate two random numbers in an Array
function generateTwoRandomNumbers(difficulty) {
    let a = Math.round((Math.random() * difficulty)+1)
    let b = Math.round((Math.random() * difficulty)+1)
	if(a > b){
        return [a, b]
    }else{
        return [b, a]
    }
    console.log(a, b)
}


// Function for Addition - pass in an array
function add(randomNumbers) {
    console.log("ADDITION")
    return randomNumbers[0] + randomNumbers[1]
}

// Function for Subtraction - passed in an array
function subtract(randomNumbers) {
    console.log("SUBTRACTION")
    if(randomNumbers[0] > randomNumbers[1]) {
        return randomNumbers[0] - randomNumbers[1]
    }else {
        return randomNumbers[1] - randomNumbers[0]
    }
}

// Function for Multiplication 
function multiply(randomNumbers) {
    console.log("MULTIPLICATION")
    return randomNumbers[0] * randomNumbers[1]
}


		/* GENERATE ANSWER */
function set_answer(math_type, randomNumber) {
	if(math_type == "addition") {
		answer = add(randomNumber);
		return answer
	}else if(math_type == "subtraction"){
		answer = subtract(randomNumber)
		return answer
	}else if(math_type == "multiplication"){
		answer = multiply(randomNumber)
		return answer
	}
}


		/* EVENT LISTENERS */

/* GO BUTTON */
start.addEventListener('click', function(){
	document.getElementById("number1").innerHTML=randomNumber[0];
	document.getElementById("number2").innerHTML=randomNumber[1];
	answer_box.focus();
	set_answer(math_type, randomNumber)
	// randomNumber = generateTwoRandomNumbers(max_num)
	console.log("Answer: ", answer)
})


/* RESET BUTTON */  
reset.addEventListener('click', function(){
	document.getElementById("number1").innerHTML='';
	document.getElementById("number2").innerHTML='';
	document.getElementById('score').innerHTML = "Score: ";
	randomNumber = generateTwoRandomNumbers(max_num)
	score = 0;
})
		

/* CHECK ANSWER */
//Submit Answer and check if correct
answer_box.onkeypress = function(e){
	if(e.keyCode == 13){
		var checkAnswer = answer_box.value;
		if(checkAnswer == answer ){
			console.log("CORRECT ANSWER! ", answer)
			score = score + points
			document.getElementById('navbar').classList.add("bg-success");
			setTimeout(function() {
				document.getElementById('navbar').classList.remove("bg-success");
			}, 650)
			randomNumber = generateTwoRandomNumbers(max_num)
		}else{
			console.log("WRONG ANSWER! ", answer)
			score = score - points
			document.getElementById('navbar').classList.add("bg-danger");
			setTimeout(function() {
				document.getElementById('navbar').classList.remove("bg-danger");
			}, 650)
		}

		if(score >= 100) {
			console.log("NICE! Keep Going!")
		}

	answer_box.value = "";
	document.getElementById('score').innerHTML = "Score: " + score;
	document.getElementById("number1").innerHTML="";
	document.getElementById("number2").innerHTML="";

	generateTwoRandomNumbers(max_num)
	document.getElementById("number1").innerHTML=randomNumber[0];
	document.getElementById("number2").innerHTML=randomNumber[1];
	answer_box.focus();
	set_answer(math_type, randomNumber)
	}
}






