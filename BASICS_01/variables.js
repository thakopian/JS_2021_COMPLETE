// basics start // 

// declare your first variable and print it in the console of your browser
let js2 = 'amazing';
console.log(40 + 8 + 23 - 10);


// value basics //


// Value is the most fundamental piece of data, the smallest piece of information

// values can be stored into a variables

// values like String and integers can be stored in a variable and passed into other functions 


// create variables with values // 


// declare a variable and assign value of a string name
let firstName = 'Tadeh'
console.log(firstName);

// name variables with camelCase  notation
let firstNamePerson

// under_score notation
let first_name_person

// do not assign number values to the variable
// do not assign words like 'new' to the variables as they are protected values

// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) //

let country = 'USA'
let continent = 'North America'
let population = 320000000

console.log(country);
console.log(continent);
console.log(population);


// data types //


// use a boolean operator

let javasriptIsFun = true;
console.log(javasriptIsFun);

// defining the type of a data type

console.log(typeof javasriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');

// change the value of an existing variable
// do not use 'let' just rename the variable's value

javasriptIsFun = 'Yes!';
console.log(typeof javasriptIsFun);

// define a variable without a type  to get undefined value returned

let year;
console.log(year);
console.log(typeof year);

// change the value and assign a data type

year = 1991;
console.log(typeof year);

// as a reference you can check the typeof for null and see that it returns as an object
// that is a bug in js but left in there for legacy maintenance reasons
// watch out to not make null objects in your code
console.log(typeof null);

// variable declarations //

// 'let' variables can have mutable values - called 'mutate a variable'

let age = 38;
age = 31;

// 'const' variables cannot change after assigning a value
// useful for variables that shouldn't change at any point or get an error

const birthYear = 1991;
// birthYear = 1999;

// 'var' is a legacy way of defining variables but should be avoided in ES6 and above
// looks like the let variable but different in how they work in functions

var job = 'programmer';
job = 'teacher';

// you can assign a value without a variable declaration but that can cause problems as you develop a program so don't do that

lastName = 'Hakopian';
console.log(lastName);



// operators //


// minus operator 

const now = 2037;
const ageJonas = now - 1991;
const ageTadeh = now - 1986;
console.log(ageJonas, ageTadeh);

// multiply, divide, exponents

console.log(ageJonas * 2, ageTadeh / 10, 2 ** 3);

// concatenate strings values from variables

const firstName1 = 'Tadeh'
const lastName1 = 'Hakopian'
console.log(firstName1 +' '+ lastName1);


// assignment operator 

// = sign is one assignment that is the most common 

let x = 10 + 5; // 15
console.log(x);

// increment operators for addition, multiplication, single addition, single subtraction

x += 10; // x = x + 10 = 25
x *= 4; // x = x + 4 = 200
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators

// < > >= <=
console.log(ageJonas > ageTadeh); 

console.log(ageJonas >= 18); 

// after getting a result then store it in a new variable

const isFullAge = ageJonas >= 18;
console.log(isFullAge);

// order of operations

// MDN reference docs for order of operations - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(20 - 10 -5); // 5

// assign to values in order of operations 

let y, z;
y = z = 25-10-5; // y = z = 10, z = 10 
console.log(y, z);

// calculate avarage with order of operations precedence

const averageAge = (ageJonas + ageTadeh) / 2
console.log(ageJonas, ageTadeh, averageAge);



// strings and template literals //



// variables with strings and numbers

const myFirstName = 'Tadeh';
const myJob = 'Architect';
const birthYearMe = 1986;
const currentYear = 2021;

// variable made of concatenated variables printed in the console

const Tadeh = "I'm " + myFirstName +  '. a ' + (currentYear - birthYearMe) + ' year old ' + myJob + '!';
console.log(Tadeh);

// using string literals in JS instead of concatenation and quotes

const tadehNew = `I'm ${myFirstName}, a ${currentYear - birthYearMe} year old ${myJob}!!`;
console.log(tadehNew);

// writing text with backticks intead of quotes

console.log(`This statement is just a string in backticks`);

// ES5 uses \n\ and return to create multi-line statement prints

console.log(`String with \n\
ES5 multi-line \n\
text`);

// ES6 just require a return in the statement for multi-line text

console.log(`String with
ES6 multi-line
text`);


// conditional statements - if / else //


// control structure with if / else, string literals and comparison operators

const ageCurrent = 15;

if (ageCurrent >= 18) {
    console.log(`Bill can start a driving test`);
} else {
    const yearsLeft = 18 - ageCurrent;
    console.log(`Bill is too young, wait another ${yearsLeft} years `)
};

// conditional statement with a variable value created by the if / else control statement

const birthYearCentury = 1998;

let century;
if(birthYearCentury <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion and coercion //

// type conversion is explicit type change
// type coercion is js doing the change behind the scenes for you


// type conversion example 
// you modify the type

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion example
// js modifies the type for you

// entire statement becomes a string by converting numbers to strings for addition
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');

// with substractions the strings can become numbers
console.log('23' - '10' - '3');

// with division the strings can become numbers
console.log('23' / '10');

// with logival operators the strings can become numbers
console.log('23'  > '10');

// test with n values
let n = '1' + 1; // '11' becomes string
n = n -1; // 11 becomes number then subtract 1
console.log(n);

// more examples of how types can change with coercion
// 2 + 3 + 4 + '5' // '95'
// 10'-'4'-'3'-2 +'5' //'15'

// BIG LESSON - type coercion can create bugs if you are not careful so pay attention to these types in operations as you write the code


// Truty and Falsy value booleans //

// 5 falsy values: 0, "", undefined, null, NaN,

// test with explicit booleans to find truthy and falsy values

console.log(Boolean(0)); // false bc 0 = false
console.log(Boolean(undefined)); // false bc undefined != true
console.log(Boolean('Jonas')); // true bc Jonas exists as a string
console.log(Boolean({})); // true bc there is a value in the braces
console.log(Boolean('')); // false bc there is nothing in the string

// functions and truthy and falsy values
const money = 0; // change to value >0 for a different result
if (money) {
    console.log("Don't spend it all!);");
} else {
    console.log('You should get a job!');
}

/* code is creating errors in console to demonstrate the boolean example so the rest of the code will be commented out

let height // heght is currenlty undefined and will be converted to a boolean which sets undefined as false
if (height) {
    console.log('Yay! height is defined);
} else {
    console.log('Height is undefined');
}
*/


// Equality operators == vs === //


// = is assignment operator for variable to a value
// == is  loose equality operator - compares two values of different data types with type coercion
// === is strict comparison operator for same data types - no type coercion

const ageAssign = '18';
if(ageAssign === 18) console.log('you are now an adult :D (strict)');

if(ageAssign == 18) console.log('you are now an adult :D (loose) ');


// example of where loose equality helps - input values 
// if you leave it without a conversion then any input works

/* // commented out to avoid prompts in console
const favorite = prompt("what's your favorite number");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 100) { // '100' = 100
    console.log('100 is a good number!')
}

*/ 

// if you use strict equality then only that type will work and you have to modify your code to make sure you convert types to that value
// also note the else if statements for more operations in your code
// commented out to avoid prompts in console


/* // commented out to avoid prompts in console

const favorite = Number(prompt("what's your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 100) { // '100' != 100
    console.log('100 is a good number!')
} else if(favorite === 10) {
    console.log('10 is also a good number')
} else if(favorite === 50) {
    console.log('50 is also a good number')    
} else {
    console.log('Numbner is not 100 or 10 or anything else approved')
}

// strict operator for not equal values
if (favorite !== 100) console.log('Why not 100?');

*/


// boolean logic //

// AND, OR, NOT operators for statements
// AND is when all are true = &&
// OR is when one is true = ||
// NOT is when none are true or invert a value = !

// examples with age conditions and logical operators
// you set a variable set to a boolean true/false and create a statement to check in the console.log
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// place the condition in the if statement () and run a conditional function
// make sure the A and B values for the variables are both set to true before running the code

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is a good driver!');
} else {
    console.log('Someone else should drive...');
}

// if all values are not true with && operator then the whole result is not true
console.log(hasDriversLicense && hasGoodVision && isTired);

// Invert with not ! operator to invert a boolean value
// understand you are basically changing the condition which is in a way like lying so be mindful of how you use it
console.log(hasDriversLicense && hasGoodVision && !isTired);


// switch statement //

// can be used in place of else statements
// Switch(variable) {case}
// case is nested into the switch and includes colon : after the line followed by nested code
// break statement - stops executing the code in the previous line - usefule with switch statements

// set a variable and a beginning value
const weekDay = 'monday'; // change the day to get a different result below

// create a switch statement with that variable
switch (weekDay) {
    case 'monday': // result if the case is a monday
        console.log('Study Dynamo today');
        console.log('Review last week notes');
        break; // stop executing code
    case 'tuesday':
        console.log('One on one calls');
        break; 
    case 'wednesday':
    case 'thursday':
        console.log('team calls');
        break;    
    case 'Friday':
        console.log('send emails'); 
        break;
    case 'Saturday':
    case 'Sunday':        
        console.log('hike day'); 
        break;   
    default: // if nothing matches the cases here is the default message
        console.log('not a valid day');                        
}