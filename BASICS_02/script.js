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


//  DECLARATION EX
// Create a named function with a return value
// Then pass the value to a variable with an argument

function calcAge1(birthyear) {
    return 2037 - birthyear; 
}

const ageDeclare = calcAge1(1986);

// FUNCTION EX
// Store the function into a variable 
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
// no curly braces {}, no return explicitly written, no need to write even function
// useful for short one off functions without much complexity using one line of code and one parameter

// FORMAT
// write the function name, arrow (=>) return value only then the argument in parentheses ()
// to store the data place the arrow in a variable otherwise write it without a variable assignment

// single line arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const ageArrow = calcAge3(1986);
console.log(ageArrow);

// multi-line arrow function
const yearToRetire = birthyear => {
    const age4 = 2037 - birthyear;
    const retirement = 65 - age4;
    return retirement;
}

console.log(yearToRetire(1986));


