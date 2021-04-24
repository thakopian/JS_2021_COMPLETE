"use strict";

// source code from user on QA site for course - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648351#questions/14674146

function reverse(whatever) {
  if (
    typeof whatever != "string" &&
    typeof whatever != "number" &&
    !Array.isArray(whatever)
  ) {
    console.log("First Output");
    return whatever;
  } else if (typeof whatever == "string") {
    let revetahw = "";
    for (let i = whatever.length - 1; i >= 0; i--) {
      revetahw += whatever[i];
    }
    return revetahw;
  } else if (typeof whatever == "number") {
    whatever = whatever.toString();
    let revetahw = "";
    for (let i = whatever.length - 1; i >= 0; i--) {
      revetahw += whatever[i];
    }
    revetahw = Number(revetahw);
    return revetahw;
  } else if (typeof whatever == "object") {
    let revetahw = [];
    for (let i = whatever.length - 1; i >= 0; i--) {
      revetahw.push(whatever[i]);
    }
    return revetahw;
  }
}

console.log(reverse("Reverse This String!"));
console.log(reverse(123456789));
console.log(reverse(["This", "Is", "An", "Array"]));
