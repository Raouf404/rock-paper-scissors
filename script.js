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
  if (selection.toLowerCase() === 'rock' || selection === '0') {
    return '0';
  } else if (selection.toLowerCase() === 'paper' || selection === '1') {
    return '1';
  } else if (selection.toLowerCase() === 'scissors' || selection === '2') {
    return '2';
  } else {
    alert('Invalid input! Please enter Rock (0), Paper (1) or Scissors (2) only.');
    return '-1';
  }
}

function playRound(player, computer) {
  let cas =  player + computer;
  console.log(cas);
  let result = '';
  switch (cas) {
    case '00':
    case '11':
    case '22':
      result = 'Draw!';
      break;
    case '10':
    case '21':
    case '02':
      result = 'You win! ';
      result += `${choices[player]} beats ${choices[computer]}`;
      break;
    case '01':
    case '12':
    case '20':
      result = 'You lose! ';
      result += `${choices[computer]} beats ${choices[player]}`;
      break;
  }

  return result;
}

let player = playerSelection();
if (player != '-1') {
  console.log(playRound(player, getCompmuterChoice()));
}