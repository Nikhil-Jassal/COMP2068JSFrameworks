//get input from the user in the console
const prompt = require('prompt');

//start the prompt
prompt.start();

// Step 3: Ask the user to enter their choice (ROCK, PAPER, or SCISSORS)
prompt.get(['userChoice'], function (err, result) {
    if (err) {
      console.log('There was an error getting input.');
      return;
    }