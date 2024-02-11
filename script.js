'use strict';

// ---------------------------------------------------------------------------------------
// Declarations
// ---------------------------------------------------------------------------------------

let choices = ['Rock', 'Paper', 'Scissors'];

// ---------------------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------------------

function getCompmuterChoice() {
  return Math.floor(Math.random() * 3);
}

function playerSelection() {
  let selection = prompt('Rock, Paper or Scissors');
  if (selection.toLowerCase === 'rock' ||  selection === '0') {
    return 0;
  } else if (selection.toLowerCase === 'paper' ||  selection === '1') {
    return 1;
  } else if (selection.toLowerCase === 'scissors' ||  selection === '2') {
    return 2;
  } else {
    alert('Invalid input! Please enter Rock, Paper or Scissors only.');
    return false;
  }
}
