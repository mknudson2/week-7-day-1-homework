// Testing Connection
console.log('Hello Matrix')

//Camel case is best practice for JS
//===================================================

// DECLARE A VARIABLE let, const, var (don't use var if don't have to)

var firstName;
console.log(firstName); //appears undefined in the console 

firstName = 'sean';
console.log(firstName); //properly shows sean

firstName = 'dylan';
console.log(firstName); //properly shows sean

//bad practice redeclaring variable with var
var firstName = 10;
console.log(firstName);


//let --> when updating value

let counter = 0;
counter++ //same as counter += 1 in python
console.log(counter);


//const --> when value remains the same
const fullName = 'Dylan Smith';

/* 
error: Cannot update const variable
fullName = 'Sean Currie' 

error: cannot reassign let or const variables
let counter
*/

//terminating statements with semicolons
console.log(firstName); console.log(counter); console.log(fullName)



//STRINGS
const string1 = 'This is a string' //must declare a const variable on the same line
let string2
string2 = "This is another string"
const string3 = "This is Sean's String"
const string4 = 'This is Sean\'s String'

const joinedString = string1 + ' added at the end'
console.log(joinedString)

const concatString = string3 + ' ' + string4
console.log(concatString)

const concatString2 = string3 + ' and ' + string4
console.log(concatString2)

const fullName2 = "Sean" + ' ' + 'Currie'
console.log(fullName2)

//indexing into a string is the same as in python, except negative indexing does not work here.
console.log(fullName2[0]);
console.log(fullName2[-1]); //however, we will not break here. It will be called undefined and move on
console.log(fullName2[100]);
console.log('test');

//A way of using negative indexing in Node, but not here
console.log(fullName.charAt(-1));

//slicing in JS
let str = "Hello, world!";
let substr = str.slice(0, 5);
console.log(substr);  // Outputs: "Hello"

console.log(fullName2.slice(0, 4)); //general slice
console.log(fullName.substring(0, 5)); //string slice specific


//other JS methods
console.log(fullName2.toUpperCase());
console.log("I'M NOT YELLING".toLowerCase());

//string are immutable, all methods are out of place
console.log(fullName2, fullName);

//you can work backwords with negatives with slice method
console.log(fullName2.slice(-6));

console.log(fullName.replace('Smith', 'Cervantes')) //O(N)
const marriedName = fullName.replace('Smith', 'Cervantes') //O(N)
console.log(fullName)
console.log(marriedName)


// TEMPLATE LITERALS (a.k.a., formatted string)
const congratsMsgIncorrect = 'Congrats on the marriage ${marriedName}' //incorrect
const congratsMsg = `Congrats on the marriage ${marriedName}`
const congratsMsg2 = `Congrats on the marriage ${marriedName}
You two are the best!`
console.log(congratsMsgIncorrect)
console.log(congratsMsg)
console.log(congratsMsg2)

console.log(`Your Matrix instructors are ${fullName} and ${fullName2}`)

//LENGTH OF STRING
console.log(fullName.length)
console.log(fullName[fullName.length-1]) //negative indexing to get the last letter

//checking type (i.e., datatype)
console.log(typeof fullName)

//Numeric types --> does not distinguish between float and int, both are type number
let number1 = 1
let aFloat = 3.14
console.log(typeof number1)
console.log(typeof aFloat)


console.log(5+5)
console.log(10*10)
console.log(10/2)
console.log(5**2)
console.log(10-5)
console.log(Math.floor(11/2)) //floor division
console.log(Math.ceil(11/2)) //rounding


number1++
console.log(number1)
number1++
console.log(number1)


console.log(number1++) //since it is a suffix, it will increase after logging number1, so it will appear updated on the next console log
console.log(number1)
console.log(++number1) //increments before logging

console.log(11 % 5)
console.log(number1 % 2 === 0 ? 'Even' : 'Odd') //ternary operator in JS
console.log(10 % 2 === 0 ? 'Even' : 'Odd') //ternary operator in JS



//TYPE CONVERSIONS
stringNum = number1.toString()
console.log(typeof stringNum) //convert to string

console.log(parseInt(stringNum)) //convert to number type

console.log(parseInt('12.9'))
console.log(parseFloat('12.9'))


console.log('10' + 10) //makes the second value a string and the concatenates --> output: 1010
console.log(10+ '10') //same


//BOOLEAN
const bool1 = true
console.log(typeof bool1)

const bool2 = false
console.log(typeof bool2)

console.log(5 > 6)
console.log(5 >= 5)
console.log(10 < 11)
console.log(10 <= 9)
console.log(10 == 10) //non-strict check
console.log(10 == '10') //same as line above, checks only values not datatypes
console.log(10 === '10') //strict check (value and datatype)
console.log(10 === 10) //best practice is using strict check


console.log(!(10 > 11)) // --> !() is the same as "is not" or != in python
console.log(10 !== 11)
console.log(!false)
console.log(!true)


console.log(Boolean(0), 1) // 0 is the only number that is false, all others are true, even negatives
console.log(Boolean(1), 2)
console.log(Boolean(-1), 3)
console.log(Boolean(false), 4)
console.log(Boolean(true), 5)
console.log(Boolean('false'), 6) //a string with any characters will return true
console.log(Boolean(), 7) //empty string returns false
console.log(Boolean(' '), ' ')
console.log(Boolean([]), [])
console.log(Boolean(undefined), undefined)
console.log(Boolean(null), null)



console.log(true && true)
console.log(true && false)
console.log(false && true) //short circut

console.log(true || false) //or 
console.log(false || true) //no short circuting
console.log(false || true || false); // short circuting
console.log();

function t1() {
    console.log('t1 ran')
    return true
}

function t2(){
    console.log('t2 ran')
    return false
}

console.log(t2() && t1())
console.log(t1() && t2())
console.log(t2() || t1())


//null(assigned a value of no value) vs. undefined(variable declared but a value was not assigned)

let newString
console.log(typeof (newString))

newString = null
console.log(typeof newString)
console.log(newString)


if (true){
    var varVariable = 'var'
    console.log(varVariable, 'in control')
}
if (true){
    let letVariable = 'let'
    console.log(letVariable, 'in control')
}
if (true){
    const constVariable = 'const'
    console.log(constVariable, 'in control')
}

console.log(varVariable, 'global')
/* 
let & const only exist in their if statements, var is global
console.log(letVariable, 'global')
console.log(constVariable, 'global') 
*/

//JAVASCRIPT ARRAY (similar to a list in python)

let studentArray = ['ben', 'sima', 'michael', 'christian']

console.log(typeof studentArray)
console.log(Array.isArray(studentArray))
console.log(Array.isArray('string'))

console.log(studentArray[0])
console.log(studentArray[studentArray.length-1])

const musicians = []

musicians.push('bob dylan') //similar to append, also adds to the end of a list
musicians.push('neil young')

console.log(musicians)

musicians.push('j. cole', 'lil wayne')

console.log(musicians)

let removedArtist = musicians.pop();

console.log(removedArtist)

//This does not work like in python where you can index to specific positions to pop. Only end in JS
let removedFirstArtist = musicians.pop(0);
console.log(removedFirstArtist)

console.log(musicians)
musicians.push('j. cole')
console.log(musicians)

//Destructure each element into its own variable
let [bd, ny, jc] = musicians
let [bd2, , jc2] = musicians //only destructuring the first and last element. Be sure to leave the empty space to show we are hopping over it
console.log(bd)
console.log(ny)
console.log(jc)
console.log(bd2, jc2)


console.log(studentArray)
let [ben, ...restOfStudents] = studentArray //rest operator
console.log(ben, restOfStudents)


//add to a beginning of an array with .unshift() (creates a linear operation because we are moving/shuffling all the other elements to a new position)
studentArray.unshift('david')
console.log(studentArray)

//remove from beginning with .shift() ALSO LINEAR FOR THE SAME REASON AS .UNSHIFT()
studentArray.shift()
console.log(studentArray)


//FIND A SPECIFIC INDEX 
console.log(studentArray.indexOf('michael'))
console.log(studentArray.indexOf('mich')) //does not exist, so will give an imposible index value


//========INTERATING THROUGH AN ARRAY==========
studentArray.push('david', 'tajay');

//=====ARROW FUNCTION
// (param) => {function body}

const myArrow = (num1, num2) => {
    return num1 + num2
}

console.log(myArrow(1,2))

console.log(studentArray.map((student)=> student.toUpperCase()))
console.log(studentArray.map((student)=> {
    return student.toUpperCase()
}))
console.log(studentArray)

console.log(studentArray.filter((student)=> student[student.length-1] === 'n')) //filter all students who has an 'n' as the last character in their name
console.log(studentArray.filter((student)=> student[student.length-1] !== 'n')) //filter all students who do not have an 'n' as the last character in their name

let matrixString = studentArray.reduce((acc, student)=> acc + ` ${student}`) + " welcome to JS week" //accumulator is what we are reducing into, student is each item in our array
console.log(matrixString)

console.log(studentArray.toString())


//join method
const joinedStudentString = studentArray.join(', ')
console.log(joinedStudentString)

console.log(studentArray.slice(0,2))
console.log(studentArray.slice(4)) //with going to the end, you do not need to specify an end

let removedArtists = musicians.splice(1,1,'the beatles') //index at which it was removed, optional: how many to be removed from the starting point, optional argument to add in to the array
console.log(removedArtists)
console.log(musicians)

musicians.splice(1)
console.log(musicians)

//=======IN CLASS EXERCIZE====

let favFoods = ['tacos', 'gyros', 'pizza', 'kebab']
console.log(favFoods.push('fried tarantulas'))
console.log(favFoods)
console.log(favFoods.unshift('haggis'))
console.log(favFoods)
console.log(favFoods.slice(1, 5))


// hoisting --> calling functions before they've been defined since JS goes through and pulls out all variables, hoisting them to the top. 
//however, one cannot hoist arrow functions.
console.log(addNums(100, 1909))

//============== FUNCTIONS ==============
//1. 
function addNums (num1, num2){  
    return num1 + num2
};
console.log(addNums(10,5))

   
//2. arrow functions
const addNumsArrow = (num1, num2) => num1+num2 //implicit return
console.log(addNumsArrow(10,22))


//3. could have the function be the value stored with a variable
const addNums3 = function(num1, num2) {
    return num1 + num2
};
console.log(addNums3(10,10))


const greeting = name => `Hello ${name}`; //with one param () are not required.
console.log(greeting('sean'))


//SPREAD OPERATOR --> opposite of destructuring an array
function addManyNums(...numbers){
    console.log(numbers)
    return numbers.reduce((acc, number) => acc+number)
}

console.log(addManyNums(19,2,100,4))

//FLOW CONTROL
if(10>11){
    console.log('10>11')
} else if (100 === '100'){
    console.log('same data types')
} else if (100 == '100'){
    console.log('number 100 equals string 100')
} else {
    console.log('all conditions false')
}

// ternary operator
console.log(
    10>11 ? 
        '10>11' : 
    100 === '100' ?
        'same data types' :
    100 == '100' ?
        'numbers are equal, not data types':
        'all conditions false'
        )

//========= FOR LOOP =========
//  for(declare index; while condition; increment){loop body}

//loop through indices
 for(let i=0; i<5; i++){    //set variable, set condition while we continue looping, action(here, increment our index)
    console.log(i)
 }

 for(let i=0; i<studentArray.length; i++ ){
    console.log(studentArray[i])
 }

 for(let i=studentArray.length-1; i >= 0; i--){ //starting at the end and moving backwards to the beginning
    console.log(studentArray[i])
 }

 for(let i=0; i<=20; i+=2){
    console.log(i)
 }

 //loop through elements
 for(let student of studentArray){
    console.log(student)
 }

 let i=0
 while (i<20){
    console.log(i)
    i++
 }


 i=0
 while (i<20){
    console.log(i)
    if(i === 5){
        break
    }
    i++
 }
 i=0
 while (i<20){
    console.log(i)
    if(i === 5){
        break
    }
    i++
 }

