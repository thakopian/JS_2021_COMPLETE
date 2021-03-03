
/*

Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy 

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
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

