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

let i=0;
// Add functionality to each square to mark player's Xs or Os
const squares = document.getElementsByClassName('symbol');
const turn = document.getElementById('turn');

const squaresArray = Array.from(squares);

const changeTurn = () => {
  isPlayer1Turn = !isPlayer1Turn;
  currentTurn = isPlayer1Turn ? player1 : player2;
  turn.innerHTML = isPlayer1Turn ? 'Player 1' + ' Turn' : 'Player 2' + ' Turn';
};

const checkForDraw = () => {
  i++;
  if (i==9) {
    // show draw result
    const modal = document.getElementById('modal');

    // grab win result element
    // set innerHTML
    const winResult = document.getElementById('win-result');
    
    modal.classList.add('game-over');
    winResult.innerHTML = 'Draw';

    i=0;
  }
};

const restartButton = document.getElementById('restart-button');

const startgame = () => {
  modal.classList.remove('game-over');
  squaresArray.forEach(input => input.innerHTML ='');
};

restartButton.addEventListener('click', startgame);
 
const setupSquare = (square) => {
  square.addEventListener('click', () => {
    square.innerHTML = currentTurn;

    changeTurn();

    checkForDraw();
  });
};
 
squaresArray.forEach(setupSquare);
 
 /**
  * Make html with html elements
  * use js to play with them
  */