
/*

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (somone average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀

*/

// write the  function for average
function calcAvg(s1,s2,s3) {
    avgScore = (s1+s2+s3)/3;
    return avgScore;
}
// set variables to the average functions
let dScore = calcAvg(65,54,49);
console.log(dScore);
let kScore = calcAvg(23,34,27);
console.log(kScore);
// write function for returning messages with the stored variables
const checkWinner = function (dScore, kScore) {
    if (dScore > kScore) {
        console.log('D win!');
    } else if (kScore > dScore) {
        console.log('K win!');
    } else {
        console.log('No Winners!');
    }
        
};

// call the function
checkWinner(kScore, dScore);
// problem - the scond part with the winner check does not return anything in console print - could be problem with argument parameters not storing the value from the last operation 
// solution -  after your write checkwinner call the function at the bottom of the code

// call function with different explicit values returned 
checkWinner(155, 112);

// reassign the values on the let variables with new averages
dScore = calcAvg(85,54,41);
console.log(dScore);
kScore = calcAvg(44,23,71);
console.log(kScore);
checkWinner(kScore, dScore);
