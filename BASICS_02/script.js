// using strict mode at the beginning of your js code //

// start code with strict mode to catch errors in your code easier on the console debug
// ! the code lessons moving forward will use strict mode !

'use strict'; 

let hasDriversLicense = false;
const passTest = true;

// make sure your writing of the variables match or you are returned an error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive thanks to strict mode!');


// if you start writing statements with protected classes then strict mode will return errors for review like in the examples below:

//const interface = 'Audio';
//const private = 532;
//const if = 23;


// FUNCTIONS //

// functions are code that can be reused multiple times in the code
// starts with 'function' keyword 
// then 'logger'() followed with braces for the code {}
// parentheses() portion is where parameters can be added and used later
// the parameters can become arguments when you call the function
// the return statement ends the function with a variable you assign somewhere in the function
// call the function and store it in a variable with const yourVariable = function(arg1, arg2); so you can use it stored in your code

function logger() {
    console.log('This function loggers says that my name is Tadeh');
}

// loggers are useful for checking information
// calling / running / invoking the function

logger();
logger();
logger();

// functions are good for retrieving data that is processed through a function and reusing your function for different purposes throughout your code

// create a function with a unique name and parameters to be used
// 1 - function with args 1 and 2 in parentheses() then braces {}
// 2 - console log to check args
// 3 - a variable with a statement in it based on the args
// 4 - return statement with the return pointing to the variable in your function
// 5 - reuse the function into different variables and args so you only have to call the function to get new results

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
    // also can be compacted in 1 line  to > return `Juice with ${apples} apples and ${oranges} oranges.`;
}

// Now you can use the results of your function with different arg inputs into different variables 

// capture the value and store it with a variable
const appleJuice = fruitProcessor(5, 0);
// you can also log that variable
console.log(appleJuice);
// you can log the function with a variable but that won't store it in memory
console.log(fruitProcessor(5,0));

// reuse the function above with different args

const appleOrangeJuice = fruitProcessor(3,3);
console.log(appleOrangeJuice);

const orangeAppleJuice = fruitProcessor(1, 5);
console.log(orangeAppleJuice);

// many parts of JS have built in functions that you use all the time
// Number function
const numFunction = Number('23');
// console log function
console.log('did you know console.log is a builtin function?');

// functions are essential for DRY code - Don't repeat yourself
// the more you use it the more clean and orderly your code will be

//  FUNCTION DECLARATIONS VS EXPRESSION //

// Declarations - functions named that return a value

// Expresssions - functions in a variable that return a value


// Calculating values returned from a function
// All functions end up as values in JS
// format of function is different but the arguments and console log are the same


// DECLARATION FUNCTION EX
// Create a named function with a return value
// Then pass the value to a variable with an argument

function calcAge1(birthyear) {
    return 2037 - birthyear; 
}

const ageDeclare = calcAge1(1986);

// EXPRESSIVE FUNCTION EX
// Store the function into a NAMED variable 
// the function itself has no name

const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const ageFunction = calcAge2(1986);

//return values of each type of function

console.log(ageDeclare, ageFunction);

// Choosing a declarative vs expressive function is a matter of preference
// some coders like to express the function in a variable so it is easy to reference later to get the entire function
// some coders like declared functions with a name 
// you need to know both given different coder preferences


// ARROW FUNCTION //

// Arrow functions are short and fast to write functions
// no curly braces {}, no return explicitly written, no need to write even function keyword
// useful for short one off functions without much complexity using one line of code and one parameter

// FORMAT
// write the function name, arrow (=>) return value and only then the argument in parentheses ()
// to store the data place the arrow in a variable otherwise write it without a variable assignment

// single line arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const ageArrow = calcAge3(1986);
console.log(ageArrow);

// multi-line arrow function with 1 return statement
// requires RETURN statement written with more than one line in => functions
// have to use braces {} for remainder of function nesting
// still do not have to use FUNCTION keyword
const yearToRetire = birthyear => {
    const age4 = 2037 - birthyear;
    const retirement = 65 - age4;
    return retirement;
}

console.log(yearToRetire(1986));


// multi-line arrow function with 2 return statements
// same rules as single return in arrow function with changes to syntax
// arguments need parentheses () and return requires template literals `` in this case
// for this example retirement2 is not returned on its own, it goes into the literal
const yearToRetire2 = (birthyear2, firstName2) => {
    const age4 = 2037 - birthyear2;
    const retirement2 = 65 - age4;
    return `${firstName2} retires in ${retirement2} years`;
}

console.log(yearToRetire2(1986, 'Tadeh'));
console.log(yearToRetire2(1993, 'Tomik'));


// using arrow functions cannot use 'this' keyword unlike the declarative and expressive functions
// if you are writing a regular simple function then arrow functions are very useful


// CALLING A FUNCTION FROM ANOTHER FUNCTION //


// cut the fruit into many pieces using calls to other functions
// start with the function that will do the cutting
// add to other functions variables that will work on the actual cutting
// then call the cutting functions with your main function
// data flow is important to organizing the code


function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessorCall(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `This Juice contains ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
console.log(fruitProcessorCall(2,3));

// Call functions are good example of DRY principles for reusing existing code with new code instead of repetitive code work
// for more review look at this video - https://www.udemy.com/share/101WfeCEccd1tTQw==/



// REVIEW FUNCTIONS //


//  Function Basics with if/else statments, calls and other operations working together into one function

//consider rebuilding the entire function with different variable names to avoid issues in the console

const calcAge4 = function (birthyear4) {
    return 2037 - birthyear4;
}

const yearToRetire4 = function (birthyear4, firstName) {
    const age5 = calcAge4(birthyear4);
    const retirement4 = 65 - age5;

    if (retirement4 > 0) {
        console.log(`${firstName} retires in ${retirement4} years`);
        return retirement4; // return statement        
    } else {
        return -1; // -1 is standard return number with no specific meaning
        console.log(`${firstName} has already retired`);
    }
    //return `${firstName3} retires in ${retirement3} years`;
}

console.log(yearToRetire4(1986, 'Tadeh'));
console.log(yearToRetire4(1981, 'Andre'));


// Different types of functions for review

// These examples won't execute anything because birthyear isn't given

// Declarative
function calcAgeDeclare(birthyear) {
    return 2037 - birthyear;
};

// Expressive
const calAgeExpress = function (birthyear) {
    return 2037 - birthyear;
};

// Arrow
const calcAgeArrow = birthyear => 2037 - birthyear;


// Anatomy of a declarative function

function calcAge(birthYear, firstName) {  // create function name and placeholder parameters that will be used for arugments later.
    // in the braces {} add the block of code for the function to process data.
    const age = 2037 - birthYear; // add variable based on the parameters
    console.log(`${firstName} is ${age} years old`); // log shows in your developer console based on the formatting of the text so you can see the results of your function to review and test
    return age; // return statement creates an output of the function to terminate the execution
}

const ageTH = calcAge(1986, 'Tadeh'); // save the function output to a variable
// Arguments are the actual values passed to the placeholder parameters as input data
// the parentheses() section is called running, invoking or calling the function that you established earlier

const ageTMK = calcAge(1993, 'Tomik'); // stored to value and printed via function command
// note that so long as the function is available in your code you can create different arguments to pass through the function so long as it matches the function name

console.log(calcAge(1981, 'Andre')); // printed twice but not stored to value
console.log(calcAge(1986, 'Tadeh'));
console.log(calcAge(1993, 'Tomik'));

calcAge(1986, 'Tadeh'); // printed by function but not stored in value


// ARRAYS //

// BASICS OF ARRAYS

// bundle variables into a bigger groups so the variables don't have to be listed one by one

// one by one 
const friend1 = 'Michael';
const friend2 = 'Billy';
const friend3 = 'Joe';

// create an array (like lists in Python you place everything brackets [])
const friendArray = ['Michael', 'Steven', 'Peter'];
console.log(friendArray);
// your console log will also report values of an array like length
// but that report can't be use for operations elsewhere

// another way to create arrays - new Array(value list);
const yearsArray = new Array(1991, 1984, 2008, 2020);

// get position from index in array
console.log(friendArray[0]);
console.log(friendArray[2]);

// get number of items in the array as a count with 'length'
console.log(friendArray.length); // reports number of elements in the array
// combine array index with length to select different values in the array like slicing in python
console.log(friendArray[friendArray.length - 1]);

// mutate or change the array list by replacing the value
friendArray[2] = 'Jay';
console.log(friendArray);

// note that the array is a const variable so it shouldn't be able to change because it is a primitive value. 
//However arrays ARE NOT a primitive value so you can always change them due to the way JS stores primitives in its memory

// exception is to change the entire array
// doing so will create a TYPE ERROR like the example below 
//friendArray = ['bob', 'alice']

// arrays can also be mixed data types including math and other arrays which will show up as a list within the list
const tadehArray = ['Tadeh', 'Hakopian', 2021-1986, 'architect', friendArray];
console.log(tadehArray)

// Exercise with Arrays in a function

// using arrays with function operations to calculate values

// create a normal expressive function for birthyear
const calcAgeArray = function(birthyear) {
    return 2037 - birthyear;
}
// add an array list
const yearsBirth = [1990, 1967, 2002, 2010, 2018];

// assign values to each index inlcuding using length
const ageArray1 = calcAgeArray(yearsBirth[0]);
const ageArray2 = calcAgeArray(yearsBirth[1]);
const ageArray3 = calcAgeArray(yearsBirth[yearsBirth.length-1]);
// log all your new variables
console.log(ageArray1, ageArray2, ageArray3);

//console.log(calcAgeArray(yearsBirth)); // this method won't work! no a number NAN

// create an array based on the function and index from the original array list
const ageNewArray = [calcAgeArray(yearsBirth[0]), calcAgeArray(yearsBirth[1]), calcAgeArray(yearsBirth[2]), calcAgeArray(yearsBirth[yearsBirth.length -1])];
// log your new array
console.log(ageNewArray);


// ARRAY METHODS & OPERATIONS //

// start wtih a basic array
const friendArray2 = ['Michael', 'Steven', 'Peter'];

// push method to add a new index to an array via mutation and returns a new array
friendArray2.push('Jay');
console.log(friendArray2);
// push method can be use in a variable and stored as well
const newFriendArray = friendArray2.push('Bill');
// if you log the const value you get the length but not the array in this case so pay attention to how these values work
console.log(newFriendArray);


// unshift method to add index value to beginning of an array
friendArray2.unshift('John');
console.log(friendArray2);

// pop removes the last index in an array
friendArray2.pop(); // last index removed

// can store the popped value in a variable and print that as well
const popped = friendArray2.pop();
console.log(popped);
console.log(friendArray2);

// shift removes first element in index of array
friendArray2.shift();
console.log(friendArray2);

// indexOf will tell you which index a given value is in the array
console.log(friendArray2.indexOf('Steven'));
// if the value doesn't exist then -1 will be returned
console.log(friendArray2.indexOf('Bob'));


// ES6 method that is like indexOf - called 'includes'
// returns only boolean values instead of index
console.log(friendArray2.includes('Steven'));
console.log(friendArray2.includes('Bob'));
// includes only works with strict values so there will be no type conversion between numbers and strings for example
console.log(friendArray2.includes(23));


// true false statements with includes method helps find a value in an array
// example for true
if (friendArray2.includes('Peter')) {
    console.log('You have a friend call Peter');
}
// example for false
if (friendArray2.includes('Jessica')) {
    console.log('You have a friend call Jessica');
}


// OBJECTS //


// objects rely on key value pairs like dictionaries in python
// it is like an array but the paired values instead of a list structure
// pairs can be unordered

const tadehKey = {
    firstNameKey:'Tadeh',
    lastNameKey:'Hakopian',
    ageKey: 2021 - 1986,
    jobKey: 'Developer',
    friendsKey: ['Michael', 'Peter', 'Steven']
};

console.log(tadehKey);

// Dot vs Bracket Notation //

// retrieve data from objects in 2 ways

// dot notation - uses property name then a dot '.' followed by the value

console.log(tadehKey.firstNameKey);

// bracket notation - use property name and bracket with string expression inside to call value
// this method is useful for template literals concatenations

console.log(tadehKey['firstNameKey']);

// you can assign the values to a variable and create a new value
// take the COMMON value from your object like 'Namekey' and you can combine it with other values to create new values like the example below:

const nameKey = 'NameKey';
console.log(tadehKey['first' + nameKey]);
console.log(tadehKey['last' + nameKey]);


// use prompt with a variable for notation
// if you are accessing a value with nothing in it then it is undefined

/* commented out due to pop up message

const interestedIn = prompt('what do you want to know about Tadeh? Choose between firstName, lastName, age, job and friends');
console.log(tadehKey[interestedIn]);


if (tadehKey[interestedIn]) {
    console.log(tadehKey[interestedIn]);
} else {
    console.log('Wrong request! choose from the REAL list!');
}

*/

// add values to your existing object key value pairs

tadehKey.location = 'USA'
tadehKey['twitter'] = '@tadeh_hakopian'
console.log(tadehKey);

// Challenge portion!
// return the following statement = "Tadeh has 3 friends, and his brest friend is Michael"

// write everything in console log with template literals 
// first store the first name from your object into the literal
// then add the length of your friendsKey with the .length method
// at the end at the friendsKey index value for Michael

console.log(`${tadehKey.firstNameKey} has ${tadehKey.friendsKey.length} friends, and his best friend is called ${tadehKey.friendsKey[0]}`);

// dot and bracket notation follow orders of operation executing left to right in the statement



// OBJECT METHODS //

// Functions are values and you can add functions to objects with methods
// you can create a key-value pair where the function is a value

const TomKey = {
    firstNameKey:'Tom',
    lastNameKey:'Hakopian',
    birthYear: 1993,
    jobKey: 'Counselor',
    friendsKey: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // create the function below as an EXPRESSION within the object 
    // any function attached to an object is called a METHOD
    /*
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
    */

    /*
    // use the THIS keyword to reference the object itself when creating a function
    // avoids hardcoding the name of the object and is part of the DRY principles

    // method below reference the object and values
    calcAge: function () {
        console.log(this);
        return 2037 - TomKey.birthYear;
    }
    */

    // method below reference the object values only
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }

    /*
    // following code returns an unexpected identifier error, not sure the cause
    // create a function to write a string and return it
    getSentence: function () {
        return `${this.firstNameKey} is a ${this.calcAge()} -year old ${TomKey.jobKey}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
    */

};

// log the function from the object
console.log(TomKey.calcAge(1993));
// can also be logged with the bracket notation since it is an object
console.log(TomKey['calcAge'](1993));

// chalenge with object-key values - write the below statement with the object example below
// Tom  is a 51 year old teacher, and he has a driver's license

// write the console string
//console.log(TomKey.getSentence());




// LOOPS //

// loops help you automate repetitive tasks

// create a loop for reps at the gym:

// for loop keeps running while condiition is true
// create a new loop with 'for'
// create the i variable for storing values (i means interation but can be any word as a variable)
// add a counter starting at 1
// next part is a ; with the variable using a boolean value to check statement
// last part is to state the counter increase per loop
// rep = i + 1 can be weritten as i++
// you can add a console log like a function after the loop
for(let i = 1; i <= 5; i++) {
    console.log(`lifting weights ${i}`);    
}


// looping through arrays

// copy an array (not object) from earlier
const tadehKey2 = [
    'Tadeh',
    'Hakopian',
    2021 - 1986,
    'Developer',
    ['Michael', 'Peter', 'Steven'],
    true
];
// a new empty array for types you can create with the for loop
const types = [];

// build the for loop in js
// for() contains the variable, boolean and counter like last time
// within the for loop you can console log the index of each array

for (let i = 0; i < 5; i++) {
    // console each array through index 5 then check tyepof eac index in the array
    console.log(tadehKey2[i], typeof tadehKey2[i]);
    // iterate the array into types list which is equal to the type of
    types[i] = typeof tadehKey2[i];
    // alternate type array creation with type.push method
    //types.push(typeof tadehKey2[i]);
}

console.log(types);


// example 2 with push and length methods 
// create an array and an empty array
// set the for loop condition with length method counting the len of the array
// use push method to add values to ages2 empty list

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
    ages2.push(2037 - years2[i]);
}    

console.log(ages2);




// CONTINUE

// continue statement keeps executing a code if it meets a given condition
// useful for avoiding errors that would otherwise crash the code
console.log('---ONLY STRINGS WILL BE SHOW BELOW---')
for (let i = 0; i < tadehKey2.length; i++) {
    if(typeof tadehKey2[i] !== 'string') continue;

    console.log(tadehKey2[i], typeof tadehKey2[i]);
}    



// BREAK


// break statement stops executing the code at a condition
// in the code below the loop will stop running when a number appears
// useful for stopping the code at a designated point
console.log('---BREAK WITH NUMBER WILL BE SHOW BELOW---')
for (let i = 0; i < tadehKey2.length; i++) {
    if(typeof tadehKey2[i] === 'number') break;

    console.log(tadehKey2[i], typeof tadehKey2[i]);
}    



// LOOP BACKWARDS

// same concept and formatting as a regular for loop but with different conditions

const tadehArray2 = [
    'Tadeh',
    'Hakopian',
    2021 - 1986,
    'Developer',
    ['Michael', 'Peter', 'Steven'],
];



// create the for() loop statement
// let i equal to the array name and length method
// length is minus one so you start from the end
// condition is i greater than 0 because you are counting down to 0
// i becomes minues since you are going from highest to lower written as i--
for(let i = tadehArray2.length - 1; i >= 0; i--) {
    console.log(tadehArray2[i]);
}




// LOOPS IN LOOPS

// same concept as a regular loop
// you nest a for loop inside a for loop brace
// the console log can use template literals for both variable statements to make messages

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Start this Exercise ${exercise} `);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}; weight rep ${rep}`);
    }
}



// WHILE LOOP

// while loops are similar to for loops
// useful when you do not know how many iterations will occur
// lets a statement keep iterating through many values until the while condition is not met

// For loop example 1

for(let i = 1; i <= 5; i++) {
    console.log(`lifting weights ${i} with for loops`);    
}

// While loop example 1

let rep = 1;
while (rep <=10) {
    console.log(`While: lifting weights reps ${rep} with while loops`);
    rep++;
}


// random dice throws with while loop 

// set dice varaible equal to a formula

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// random while loop with if statement
// while the dice is not equal to 6 keep throwing
// set the console log, dice variable and if statement
// the if statement can return a string to inform the user that while condition is met

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`loop is about to end...`);

}