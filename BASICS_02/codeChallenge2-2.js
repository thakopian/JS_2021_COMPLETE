
/*

Coding Challenge #4

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip


Test data: 125, 555 and 44

*/

// assign variables
const bills = [125,555,44];

// create function with ternary operators for value comparison
// for the ternary operator include the % multiple for the tip
const calctip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

// for the tip value create a new array using the calctip function bills argument
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);

// for the totals add bills and tips together and log the values
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


/* 
// ternary operator in this case states a variable then the low end of the value and the high end of the value (list variable each time) followed by the ternary
const ternTip = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;


//print values to see the results
console.log(`the bill was ${bill1} and the tip was ${ternTip} with a total value of ${bill1 + ternTip}`);

function cutFruitPieces(fruit) {
    return fruit * 4;
}
*/
