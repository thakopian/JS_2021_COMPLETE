"use strict";

// source code from user on QA site for course - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648351#questions/13015674

// Challenge: In an array of GPS coordinates, find the two closest points
// Extras: find all distances, find farthest points, find total trip between all points, add user input for a trip to all points

const ancientWonders = {
  // name of the list
  name: "The Ancient Wonders of the World",
  // list of locations
  list: [
    [29.97916667, 31.13416667, "Great Pyramid of Giza"],
    [33.5355, 44.2475, "Hanging Gardens of Babylon"],
    [37.63777778, 21.63, "Statue of Zeus at Olympia"],
    [37.94972222, 27.36388889, "Temple of Artemis at Ephesus"],
    [37.03777778, 27.42416667, "Mausoleum at Halicarnassus"],
    [36.4511, 28.2278, "Colossus Rhodes"],
    [31.21388889, 29.88555556, "Lighthouse of Alexandria"],
  ],
  // to store all distances between points
  distances: [],
  // to store shortest trip in list
  shortest: [],
  // to store longest trip in list
  longest: [],
  // function to add more locations in list
  addToList: function (arr) {
    this.list.push(arr);
  },
  // function to check average distances between list locations
  calcAverageDistance: function () {
    let averageDistance = 0;
    for (let i = 0; i < this.distances.length; i++) {
      averageDistance += this.distances[i][2];
    }
    return averageDistance / this.distances.length;
  },
  // to store direct route between points
  directRoute: [],
};

const newWonders = {
  name: "The New Wonders of the World",
  list: [
    [40.67666667, 117.2316667, "Great Wall of China"],
    [20.68277778, -88.56861111, "Chichen Itza"],
    [30.32861111, 35.44194444, "Petra"],
    [-12.83666667, -72.54555556, "Machu Picchu"],
    [-21.04805556, -43.21055556, "Christ the Redeemer"],
    [41.89, 12.49222222, "Colosseum"],
    [27.175, 78.04194444, "Taj Mahal, India"],
  ],
  distances: [],
  shortest: [],
  longest: [],
  addToList: function (arr) {
    this.list.push(arr);
  },
  calcAverageDistance: function () {
    let averageDistance = 0;
    for (let i = 0; i < this.distances.length; i++) {
      averageDistance += this.distances[i][2];
    }
    return averageDistance / this.distances.length;
  },
  directRoute: [],
};

// Function converts (x) degrees to radians
function degToRad(x) {
  return (x * Math.PI) / 180;
}

// Function calculates the distance between (point1) array and (point2) array assuming element 0 is the latitude and element 1 is the longitude
// returns number - distance in km
function calcDistance(point1, point2) {
  let r = 6371; // r is radius of Earth in km
  //let r = 3958.8; // r is radius of Earth in miles
  let lat1 = degToRad(point1[0]); // convert latitude in point1 to radians
  let lon1 = degToRad(point1[1]); // convert longitude in point1 to radians
  let lat2 = degToRad(point2[0]); // convert latitude in point2 to radians
  let lon2 = degToRad(point2[1]); // convert longitude in point2 to radians
  let dlat = lat2 - lat1; // dlat is the distance between point2 latitude and point1 latitude
  let dlon = lon2 - lon1; // dlon is the distance between point2 longitude and point 1 longitude
  // formula to calculate distance
  let a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = r * c;
  return d; // returns d - distance in km
}

// function to calculate all distances between points in (arr) array
// returns array - array of points and distances between points
function calcAllDistances(arr) {
  let distances = []; //set distances array to empty, for reuse purposes
  // loop to compare all points in arr array, starts at element 1 to skip title string element
  for (let i = 0; i < arr.length - 1; i++) {
    for (let n = i + 1; n < arr.length; n++) {
      // add array as element to distances - element 0 point1 array, element 1 point2 array, element 2 distance between both points
      distances.push([arr[i], arr[n], calcDistance(arr[i], arr[n])]);
    }
  }
  return distances;
}

// Function calculates the shortest distance in (arr) array, assumes (arr) has multiple array elements
// returns array - element 0 (point1) array, element 1 (point2) array, element 2 (distance) between both points
function calcShortestDistance(arr) {
  let shortest = arr[0]; // set shortest variable to first element in arr
  // loop to compare all points in arr array
  for (let i = 0; i < arr.length; i++) {
    // compare if current element is shorter than shortest variable
    if (arr[i][2] < shortest[2]) {
      shortest = arr[i]; // if true, set shortest variable to that element
    }
  }
  return shortest; // return shortest element
}

// Function calculates the longest distance in arr (array), assumes (arr) has multiple array elements
// returns array - element 0 (point1) array, element 1 (point2) array, element 2 (distance) between both points
function calcLongestDistance(arr) {
  let longest = arr[0]; //set longest variable to first element in distance
  // loop to compare all points in arr array
  for (let i = 0; i < arr.length; i++) {
    // compare if current element is longer than longest variable
    if (arr[i][2] > longest[2]) {
      longest = arr[i]; // if true, set longest variable to that element
    }
  }
  return longest; // return longest element
}

// function to find closest route from ($start) location going to each point in ($list) and back to ($start)
function calcDirectRoute($start, $list) {
  // create copy of (list) array
  let tempList = [];
  for (let i = 0; i < $list.length; i++) tempList.push($list[i]);
  // create copy of (start) array
  let tempStart = $start;
  // empty tripList array to return values calculated by this method
  let tripList = [];
  // loop through list and find the quickest route from point to point
  while (tempList.length > 1) {
    if (tempList.indexOf(tempStart) >= 0) {
      tempList.splice(tempList.indexOf(tempStart), 1); // check if (start) is in the (list), remove it
    }
    tempList.unshift(tempStart); // add (start) to beginning of (list)
    // create array to hold distances from (start) location
    let tempDistance = [];
    // fill array with distances from (start)
    for (let i = 1; i < tempList.length; i++) {
      tempDistance.push([
        tempStart,
        tempList[i],
        calcDistance(tempStart, tempList[i]),
      ]);
    }
    // create variable to hold shortest distance value, set to first element of distances
    let short = tempDistance[0];
    // check verse other distance values to determine shortest value
    for (let i = 0; i < tempDistance.length; i++) {
      // check next element in distance values vs current short value
      if (tempDistance[i][2] < short[2]) {
        short = tempDistance[i]; // set short to value if less than next element
      }
    }
    tripList.push(short); // add shortest trip to the the trip list
    tempList.shift(); // remove start location
    // check and set next start location
    if (short[0] === tempStart) {
      tempStart = short[1];
    } else if (short[1] === tempStart) {
      tempStart = short[0];
    } else {
      console.log("ERROR"); // not sure if error is ever produced
    }
  }
  tempStart = $start; // set back to original start value
  // add final trip from last location back to original position
  tripList.push([tempList[0], tempStart, calcDistance(tempList[0], tempStart)]);
  return tripList; // return array with each trip and distances
}

// function to convert (arr) array, assumming coordinate array
// element 0 is latitude, element 1 is longitude, and element 2 is location name
function convertCoord(arr) {
  return `Location - ${arr[2]} (Latitude: ${arr[0]}, Longitude: ${arr[1]}) `;
}

// function to convert (arr) array, assuming used to convert trip list only
function convertList(arr) {
  let tempList = arr;
  let tempString = ``;
  let totalTrip = 0;
  for (let i = 0; i < tempList.length; i++) {
    for (let n = 0; n < tempList[i].length; n++) {
      if (n === 0) {
        tempString += `From ${convertCoord(arr[i][n])}`;
      } else if (n === 1) {
        tempString += `To ${convertCoord(arr[i][n])}`;
      } else if (n === 2) {
        tempString += `Trip Length: ${arr[i][n]} km `;
        totalTrip += arr[i][n];
      } else {
        tempString += "\n";
      }
      tempString += "\n";
    }
    tempString += "\n";
  }
  tempString += `Total Trip Length: ${totalTrip} km`;
  return tempString;
}

// User can define starting location to check quickest trip
let startLat = 180;
while (startLat <= -180 || startLat >= 180) {
  startLat = prompt(`What is your starting latitude? (between -180 and 180)`);
}
let startLon = 180;
while (startLon <= -180 || startLon >= 180) {
  startLon = prompt(`What is your starting longitude? (between -180 and 180)`);
}
let startLocation = [startLat, startLon, "Starting Point"];

// Calculations for each list
ancientWonders.distances = calcAllDistances(ancientWonders.list);
ancientWonders.shortest = calcShortestDistance(ancientWonders.distances);
ancientWonders.longest = calcLongestDistance(ancientWonders.distances);
ancientWonders.averageDistance = ancientWonders.calcAverageDistance();
newWonders.distances = calcAllDistances(newWonders.list);
newWonders.shortest = calcShortestDistance(newWonders.distances);
newWonders.longest = calcLongestDistance(newWonders.distances);
newWonders.averageDistance = newWonders.calcAverageDistance();
ancientWonders.directRoute = calcDirectRoute(
  startLocation,
  ancientWonders.list
);
newWonders.directRoute = calcDirectRoute(startLocation, newWonders.list);

// Output data
console.log(ancientWonders.name);
console.log(
  `Shortest distance: ${ancientWonders.shortest[2]} km between ${ancientWonders.shortest[0][2]} and ${ancientWonders.shortest[1][2]}`
);
console.log(
  `Longest distance: ${ancientWonders.longest[2]} km between ${ancientWonders.longest[0][2]} and ${ancientWonders.longest[1][2]}`
);
console.log(`Average distance: ${ancientWonders.averageDistance} km`);
console.log(convertList(ancientWonders.directRoute));
console.log(newWonders.name);
console.log(
  `Shortest distance: ${newWonders.shortest[2]} km between ${newWonders.shortest[0][2]} and ${newWonders.shortest[1][2]}`
);
console.log(
  `Longest distance: ${newWonders.longest[2]} km between ${newWonders.longest[0][2]} and ${newWonders.longest[1][2]}`
);
console.log(`Average distance: ${newWonders.averageDistance} km`);
console.log(convertList(newWonders.directRoute));
