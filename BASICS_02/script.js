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


// Anatomy of a function declarative function

function calcAge(birthYear, firstName) {  // create function name and placeholder parameters that will be used for arugments later
    // in the braces {} add the block of code for the function to process data
    const age = 2037 - birthYear; // add variable based on the parameters
    console.log(`${firstName} is ${age} years old`); // log shows in your developer console based on the formatting of the text so you can see the results of your function to review and test
    return age; // return statement creates an output of the function to terminate the execution
}

const age = calcAge(1986, 'Tadeh') // save the function output to a variable
// Arguments are the actual values passed to the placeholder parameters as input data
// the parentheses() section is called running, invoking or calling the function that you established earlier
// note that so long as the function is available in your code you can create different arguments to pass through the function so long as it matches the function name

