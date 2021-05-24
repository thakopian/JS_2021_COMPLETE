'use strict';

// DOM MANIPULATION //

// DOM = Document Object Model - structured representation of HTML documents
// Allows JS to access html elements and manipulate them
// DOM follows the html tree structure for hierarchy or selecting parent and child elements

// use the following DOM selectors to modify the default values of the web page:

// dom selector for query message class in html as follows
console.log(document.querySelector('.message').textContent);

// use DOM query selector to change html message to a different one via JS
document.querySelector('.message').textContent = '🎉 Correct Number!';

// add more DOM selectors to the HTML classes and modify the values on the web page
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// add a DOM selector with a class and argument for value b/c of the input field in html requires a value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// create a randokm number operator for the guessing game

const number = Math.random();

// ADD EVENT LISTENER //

// When you click on a button something should happen = event listener
// look for html class for the button you want to listen for an action
// the event listener can then tie into the event handler to trigger an action

// create an event listener with querySelector and addEventListener methods
// after the event listener create an EVENT HANDLER with the html class, a function
// and stipulate what the next action will be like another html value being updated

// CHECK THE FOLLOWING SEGMENT AGAINST DEMO CODE:

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // add input value containing nothing message with a false boolean 'if' function
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; // = score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ' Too Low!';
    score--; // = score = score - 1;
    document.querySelector('.score').textContent = score;
  }
});
