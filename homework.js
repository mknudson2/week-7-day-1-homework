// Question 1
/* Write a function that takes a string and an array of strings (in this example dog_names) and checks if one of the list members(dog_names)
is in the string. Return an array of the dog names found in the array.

Hint: filter, includes */

var dogNames = ["Max", "Fido", "Gizmo", "Nala"]

var testString1 = "Hello, my dog is Max, and they have purple eyes"
var testString2 = "My Dog is fast, her name is Tippi"
var testString3 = "Come here Fido and Gizmo come here"

function findDogNames (aString, anArray){
    return dogNames.filter(dogNames => aString.includes(dogNames))
}

console.log(findDogNames(testString1))
console.log(findDogNames(testString2))
console.log(findDogNames(testString3)) //output meets "Expects"

//==============================================================
//Question 2
/* Write a function using map to convert an array of numbers from inches to feet.
Example: 

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
[ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ] */

function heightConverter(arr){
    let heights = arr.map(inches => inches / 12)
    return heights
}

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
console.log(heightConverter(heightsInInches)) //output meets "Expects"


//==============================================================
// Question 3
// Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

// Example:
var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// // Expects:
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]

function tmntPizza(arr){
    return arr.map(name => name[name.length-1] === 'o' ?
        `${name} is eating pizza` : 
        `${name} is being rude`)
}

console.log(tmntPizza(tmnt)) 
//output
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]

//===============================================================
//Question 4
// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

// Example:
var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125

let maxNum = 0


let findMax = (arr) => {
    return arr.reduce((max, current) => (
        current > max ? 
        current : max), 
        0);
  };
  
console.log(findMax(findAMax)) //output: 234125


//===============================================================
//Question 5

/* At the end of the third iteration ( the third time the loop has run ) of this ‘For Loop’ define the state of all the variables used in this code block */
//for loop = (starting, while condition, index increment/decrement)

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
ognib+=(bingo[i])
//define state from this line on the third iteration
}

// Expects: 
//bingo value is: "B-I-N-G-O"
//ognib value is: "OGN"
// i value is: 3

//===============================================================
//Question 6:
Comple 3 codewars problems using JavaScript, start with ones you have already solved in python. Paste a link in your .js file to the codewar problem and your solution.

Q1:https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
function evenOrOdd(number) {
    return number % 2 === 0? 
      'Even':
    'Odd'
  }

Q2:https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript
function solution(number){
    if (number < 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
Q3: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/solutions/javascript
function numberToString(num) {
    return num.toString()
  }