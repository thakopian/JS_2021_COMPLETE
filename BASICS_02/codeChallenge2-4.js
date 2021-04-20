
/*

Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals array

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array

*/

// assign variables
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// create function with ternary operators for value comparison
// for the ternary operator include the % multiple for the tip
const calctip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 :
    bills * 0.2;
}

// run the values for bills through the for loop
// push the calctip function output into the array
// push the arrays of bills and tips added up to the totals array
for (let i = 0; i < bills.length; i++) {
    tips.push(calctip(bills[i]));
    totals.push(bills[i] + tips[i]);

}

console.log(bills);
console.log(tips);
console.log(totals);

// create a function with arguments for getting average values in each array

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


/*
ternary operator can be written as a regular if/else expression

function calcTip(bill) {
    if (bill >= 50 && bill <= 300)
        return bill * 0.15;
    else
        return bill * 0.2;
}
*/






/*

// for the tip value create a new array using the calctip function bills argument
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);

// for the totals add bills and tips together and log the values
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/

/* 
// ternary operator in this case states a variable then the low end of the value and the high end of the value (list variable each time) followed by the ternary
const ternTip = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;


//print values to see the results
console.log(`the bill was ${bill1} and the tip was ${ternTip} with a total value of ${bill1 + ternTip}`);

function cutFruitPieces(fruit) {
    return fruit * 4;
}
*/
