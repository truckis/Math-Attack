

// Getting numbers from HTML Vs. Pushing Numbers to HTML
var answer_box = document.getElementById('answer_box').value;
var answer;

// Difficulty Function - Determines the Max_Number
var easy = 10
var medium = 15
var hard = 20



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

// Function for Division - NOT FINISHED
// function divide(randomNumbers) {
//     // Check for larger number
//     if(randomNumbers[0]/randomNumbers[1] > 1 && randomNumbers[0] % randomNumbers[1] == 0) {
//         return randomNumbers[0]/randomNumbers[1]
//     } else if(randomNumbers[1]/randomNumbers[0] > 1 && randomNumbers[1] % randomNumbers[0] == 0){
//         return randomNumbers[1]/randomNumbers[0]
//     }else{
//     //    generate two random numbers 
//     // while a % b = 0 
//     }
   
// }


// Function for all 
function runAllMathTypes(difficulty) {
   let a = Math.floor(Math.random() * 3) 
   console.log("A IS "+ a)
   let f; 
   switch(a) {
       case 0:
        console.log("A")
           return add(generateTwoRandomNumbers(difficulty));
           break;
        case 1:
            console.log("S")
            return subtract(generateTwoRandomNumbers(difficulty))
            break;
        case 2:
            console.log("M")
            return multiply(generateTwoRandomNumbers(difficulty))
   }
}


    
// TESTS
// Addition
// console.log(add(generateTwoRandomNumbers(medium) ))
// // // // Subtraction
// console.log(subtract(generateTwoRandomNumbers(medium) ))
// // // // Multiplication
// console.log(multiply(generateTwoRandomNumbers(medium) ))
// // // // Division

// All
// console.log(runAllMathTypes(easy))


// FUNCTION TO GENERATE NUMBERS
let generateNumbers = (difficulty) => {
    let a = Math.round((Math.random() * difficulty)+1)
    let b = Math.round((Math.random() * difficulty)+1)
    if(a > b){
        // console.log("Random Numbers: ", a, b)
        return [a, b]
    }else{
        // console.log("Random Numbers: ", b, a)
        return [b, a]
    }
}
// FUNCTION TO CHECK ANSWER

let randomNumbers = generateNumbers(easy)

// Pass in The random numbers
function setAnswer(randomNumber, math_type) {
    if(math_type == "addition"){
        answer = randomNumber[0] + randomNumber[1]
    }else if(math_type == "subtraction"){
        answer = randomNumber[0] - randomNumber[1]
    }else if(math_type == "multiplication"){
        answer = randomNumber[0] * randomNumber[1]
    }
}


answer_box.onkeypress = function(e) {
    if(e.keyCode == 13){
        if(answer_box.value == answer){
            console.log("Correct Answer: ", answer)
        }else{
            console.log("Wrong Answer, try again")
        }
    }
}

console.log(randomNumbers)
setAnswer(randomNumbers, "multiplication");
console.log(answer)

 