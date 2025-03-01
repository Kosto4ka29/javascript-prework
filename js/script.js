var buttonPaper, buttonRock, buttonScissors, x, button;

/**
 * Describe this function...
 */
function do_something(buttonPaper) {
  clearMessages();
  console.log(buttonPaper + ' został kliknięty');
}

/**
 * Describe this function...
 */
function buttonClicked(buttonRock) {
  clearMessages();
  console.log(buttonRock + ' został kliknięty');
}

/**
 * Describe this function...
 */
function buttonClicked2(buttonScissors) {
  clearMessages();
  console.log(buttonScissors + ' został kliknięty');
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Nożyce'); });

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage('Przegrywasz :(');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
    printMessage('Remis!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
    printMessage('Remis!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz :(');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Przegrywasz :(');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);