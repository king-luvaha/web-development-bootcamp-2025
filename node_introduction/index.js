const colors = require('colors');
console.log('hello'.green);
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap);

const giveMeAJoke = require('give-me-a-joke');
// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});

