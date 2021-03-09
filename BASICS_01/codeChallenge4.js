
/*

Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 

Test data:

§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

// console check (ignore)
/*let x = 10;
console.log(x);
*/

// assign variables
bill1 = 250
bill2 = 40
bill3 =  430



const ternTip = (bill1 >= 50) ? bill1 * 0.15 : bill1 * 0.2;


//print values to see the results
console.log(ternTip);

// set if else condition based on calculation 
/*
if (dAvg > kAvg && dAvg >= 100) {
    console.log('Dolphins win!');
} else if (kAvg > dAvg && kAvg >= 100) {
    console.log('Koalas win!');
} else if (dAvg === kAvg && kAvg >= 100 && dAvg >= 100) {
    console.log('It is a draw!');     
} else {
    console.log('No one wins');     
};

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is a good driver!');
} else {
    console.log('Someone else should drive...');
}

const ternDrink = ternAge >= 18 ? 'drink some beer' : 'drink some water' ;
console.log(ternDrink);

console.log(`I like to drink ${ternAge >=18 ? 'beer' : 'water'}`);

*/