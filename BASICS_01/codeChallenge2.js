
/*

Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

*/

// console check (ignore)
/*let x = 10;
console.log(x);
*/

// assign variables
let MarkWeight = 78;
let MarkHeight = 1.95;
let JohnWeight = 85;
let JohnHeight = 1.88;

// calculate BMI for each person
BMImark = (MarkWeight / (MarkHeight ** 2)); //= MarkWeight / (MarkHeight * Markheight) 
console.log(BMImark);

BMIjohn = (JohnWeight / (JohnHeight ** 2)); // = JohnWeight / (JohnHeight * JohnHeight) 
console.log(BMIjohn);


// set if else condition based on calculation  
// add string literal for console log results

if (BMImark > BMIjohn) {
    console.log(`Mark has a higher BMI score of ${BMImark}`);
} else {
    console.log(`John has a higher BMI score of ${BMIjohn}`);
};

