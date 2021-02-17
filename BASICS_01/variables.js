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

// concatenate strings vakues from variables

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

// strings and tempalte literals

