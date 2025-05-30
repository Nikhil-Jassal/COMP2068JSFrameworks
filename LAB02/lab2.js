//get input from the user in the console
const prompt = require('prompt');

//start the prompt
prompt.start();

//ask the user to enter their choice (ROCK, PAPER, or SCISSORS)
prompt.get(['userChoice'], function (err, result) {
    if (err) {
      console.log('There was an error getting input.');
      return;
    }

      //convert user input to uppercase
  const userSelection = result.userChoice.toUpperCase();

  //generate a random number between 0 and 1
  const randomNumber = Math.random();
  let computerSelection = '';



});