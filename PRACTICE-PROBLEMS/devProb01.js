// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// final code here - https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/03-Developer-Skills/final/script.js

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  // create a function for temperature amplitude
  let max = temps[0]; // set max value in temp
  let min = temps[0]; // set min value in temp

  for (let i = 0; i < temps.length; i++) {
    // create a for loop
    const curTemp = temps[i]; // create a new variable with temps stored in it
    if (typeof curTemp !== "number") continue; // set continue if a type is not a number

    if (curTemp > max) max = curTemp; // current temp is greatest value then it becomes max value
    if (curTemp < min) min = curTemp; // current temp is lowest value then it becomes min value
  }
  console.log(max, min); // log the max and min values
  return max - min; // return the result of maximum minus minimum for the amplitude
};

const amplitude = calcTempAmplitude(temperatures); // store amplitude value from the temperatures list in the beginning
console.log(amplitude); // log the amplitude

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

// copy the original code from above and modify the variables to avoid errors:

const calcTempAmplitudeNew = function (t1, t2) {
  // add arrays to pass through the function and allow for concat
  // create a function for temperature amplitude
  const temps = t1.concat(t2); // use the array concat method to combine the two arrays
  console.log(temps);
  let max = temps[0]; // set max value in temp
  let min = temps[0]; // set min value in temp

  for (let i = 0; i < temps.length; i++) {
    // create a for loop
    const curTemp = temps[i]; // create a new variable with temps stored in it
    if (typeof curTemp !== "number") continue; // set continue if a type is not a number

    if (curTemp > max) max = curTemp; // current temp is greatest value then it becomes max value
    if (curTemp < min) min = curTemp; // current temp is lowest value then it becomes min value
  }
  console.log(max, min); // log the max and min values
  return max - min; // return the result of maximum minus minimum for the amplitude
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]); // pass the array values through the function to be concatenated
// store amplitude value from the temperatures list in the beginning
console.log(amplitudeNew); // log the amplitude
