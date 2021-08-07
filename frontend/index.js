/**
 * Board functionality
 *  - alternate Xs and Os on the board
 * 
 * Turn Tracker
 *  - alternate turn indication
 * 
 * Show Winner result
 */

const player1 = 'X';
const player2 = 'O';

let isPlayer1Turn = true;
let currentTurn = isPlayer1Turn ? player1 : player2;

let turnsMade = 0;

// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');
const turn = document.getElementById('turn');

const squaresArray = Array.from(squares);

const changeTurn = () => {
  isPlayer1Turn = !isPlayer1Turn;
  currentTurn = isPlayer1Turn ? player1 : player2;
  turn.innerHTML = isPlayer1Turn ? 'Player 1 Turn' : 'Player 2 Turn';
};

const checkForDraw = (turnsMade) => {
  if (turnsMade == 9) {
    // show draw result
    const modal = document.getElementById('modal');

    // grab win result element
    // set innerHTML
    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = 'Draw';

    turnsMade=0;
  }
};

const checkForWinner = (turnsMade) => {
  if(turnsMade == 3) {
    const modal = document.getElementById('modal');

    // grab win result element
    // set innerHTML
    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = isPlayer1Turn ? 'Player 2 Wins': 'Player 1 Wins';

    turnsMade=0;
  }
};

const restartButton = document.getElementById('restart-button');

const startGame = () => {
  modal.classList.remove('game-over');
  squaresArray.forEach(input => input.innerHTML ='');
};

restartButton.addEventListener('click', startGame);

const setupSquare = (square) => {
  square.addEventListener('click', () => {
    square.innerHTML = currentTurn;

    turnsMade++;
    changeTurn();
    checkForWinner(turnsMade);
    checkForDraw(turnsMade);
  });
};
 
squaresArray.forEach(setupSquare);
 
 /**
  * Make html with html elements
  * use js to play with them
  */