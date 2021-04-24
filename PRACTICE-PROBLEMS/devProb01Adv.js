// from user submitted example - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648353#questions/12887922
// shows a simpler solution with more advanced use of JS methods

"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temp = [];

const tempAmp = (arr) => {
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== "number") continue;
    temp.push(temperatures[i]);
  }
  return Math.max(...arr) - Math.min(...arr);
};

const amplitude = tempAmp(temp);
console.log(amplitude);
