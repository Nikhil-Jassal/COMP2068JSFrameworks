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
  
  //decide computer's choice based on the random number
  if (randomNumber <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNumber <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  //show what each player chose
  console.log('You chose:', userSelection);
  console.log('Computer chose:', computerSelection);

  //determine the winner using simple if-else conditions
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('You win!');
  } else {
    console.log('Computer wins!');
  }

});