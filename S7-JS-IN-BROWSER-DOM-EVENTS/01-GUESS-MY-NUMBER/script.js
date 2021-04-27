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
